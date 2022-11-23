const jwt = require("jsonwebtoken");
require("dotenv").config();

const users = [
  {
    id: 1,
    name: "Lionel Galles",
    email: "Lionel.Galles@polygongroup.com",
    password: "azerty22",
    admin: true,
  },
];

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1800s",
  });
}

function generateRefreshToken(user) {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "1d" });
}

function authentication(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  console.log("token = ", token);
  if (!token) {
    console.log("not token");
    return res.sendStatus(401);
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(401).send(`error = ${err}`);
    }
    req.user = user;
    next();
  });
}

const Login = (req, res) => {
  // TODO: checker en BDD le user par rapport à l'email
  console.log("login = ", req.body);
  let user = users.find((usr) => usr.email === req.body.email);
  console.log("user = ", user);
  if (!user) {
    res.status(401).send("@ mail invalide !");
    return;
  }
  let usr = { ...user };
  if (req.body.password !== usr.password) {
    console.log(req.body.password, usr.password);
    res.status(401).send("Mot de passe invalide !");
    return;
  }
  delete usr.password; //Ne pas envoyer le psw côté client
  const accessToken = generateAccessToken(usr);
  const refreshToken = generateRefreshToken(usr);
  res.send({
    accessToken,
    refreshToken,
  });
};

const RefreshToken = (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.sendStatus(401);
  }
  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(401);
    }
    // TODO : check en bdd que le user a toujours les droit et qu'il existe toujours
    delete user.iat;
    delete user.exp;
    const refreshedToken = generateAccessToken(user);
    res.send({
      accessToken: refreshedToken,
    });
  });
};

module.exports = { Login, RefreshToken, authentication };
