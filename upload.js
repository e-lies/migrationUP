const util = require("util");
const path = require("path");
const multer = require("multer");
const fs = require("fs");

//Create folders is not exist
const createFolder = (basePath, folder) => {
  let folders = folder.split("/");
  try {
    if (!fs.existsSync(basePath + folders[0])) {
      fs.mkdirSync(basePath + folders[0]);
    }
    if (folders[1]) {
      //récursivité si il y a encore des sous/répertoires
      createFolder(
        basePath + "/" + folders[0] + "/",
        folders.slice(1).join("/")
      );
    }
  } catch (err) {
    console.error("Cannot create folder " + folders[0], err);
  }
};

var storage = multer.diskStorage({
  destination: (req, file, callback) => {
    let folder = file.originalname.split("_@_");
    //console.log("file req = ",file," ___ ",folder.slice(0,folder.length-1).join('/'))
    createFolder(
      `${__dirname}/attachments/`,
      folder.slice(0, folder.length - 1).join("/")
    );
    callback(
      null,
      `attachments/${folder.slice(0, folder.length - 1).join("/")}`
    );
  },
  filename: (req, file, callback) => {
    let folder = file.originalname.split("_@_");
    let filename = folder[folder.length - 1];
    /*let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];*/
    callback(null, filename); //+ "." + extension);
  },
});

var uploadFiles = multer({ storage: storage }).array("fichiers[]", 15);
var uploadFilesMiddleware = util.promisify(uploadFiles);

const multipleUpload = async (req, res) => {
  try {
    //req.body.chemin && createFolder(req.body.chemin)
    await uploadFilesMiddleware(req, res);
    if (req.files.length <= 0) {
      return res.send(`You must select at least 1 file.`);
    }
    return res.send(`Files have been uploaded.`);
  } catch (error) {
    console.log(error);

    if (error.code === "LIMIT_UNEXPECTED_FILE") {
      return res.send("Too many files to upload.");
    }
    return res.send(`Error when trying upload many files: ${error}`);
  }
};

module.exports = multipleUpload;
