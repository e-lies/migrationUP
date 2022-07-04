import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Tabs,
  Tab,
  Paper,
  Chip,
  Backdrop,
  CircularProgress,
  Icon,
} from "@material-ui/core";
import StatClientTab from "./components/Tableaux/StatClientTab";
import { path } from "./Params";
/*import Dossiers from "./Pages/Dossiers";
import Factures from "./Pages/Factures";
import Devis from "./Pages/Devis";
import Chantiers from "./Pages/Chantiers"; */

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  chips: {
    padding: 24,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
    },
    backdrop: {
      zIndex: 7000,
      color: "#fff",
    },
  },
}));

const DisplayFiles = ({ id, type, element }) => {
  const classes = useStyles();
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3001/api/files/${id}/${type}/${element || ""}`)
      .then((prm) => prm.json())
      .then((rep) => {
        setFiles(rep);
        setLoading(false);
      })
      .catch((err) => {
        console.log("client error ", err);
        setLoading(false);
      })
      .catch((err) => {
        console.log("server error ", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className={classes.chips}>
      {/*<Switch>
        <Route path="/iwe/Dossier" component={Dossiers} />
        <Route path="/iwe/Factures" component={Factures} />
        <Route path="/iwe/Devis" component={Devis} />
        <Route path="/iwe/Chantiers" component={Chantiers} />
  </Switch>*/}
      {loading ? (
        <CircularProgress color="primary" size={100} thickness={5} />
      ) : files.length < 1 ? (
        <h3> Aucun fichier associé ! </h3>
      ) : (
        files.map((file) => {
          let arrFile = file.split(".");
          let extension = arrFile[arrFile.length - 1];
          let name = arrFile[0];
          return (
            <Chip
              style={{ margin: 2 }}
              variant="outlined"
              label={name}
              color="primary"
              icon={
                <Icon>
                  {" "}
                  {extension === "pdf"
                    ? "picture_as_pdf"
                    : ["bmp", "png", "jpg", "jpeg"].includes(extension)
                    ? "image"
                    : "text_format"}{" "}
                </Icon>
              }
              onClick={(e) =>
                window.open(
                  element
                    ? `${path}/api/download/${id}/${type}/${element}/${file}`
                    : `${path}/api/download/${id}/${type}/${file}`,
                  "_blank"
                )
              }
            />
          );
        })
      )}
    </div>
  );
};

const rules = ["dossier", "factures", "devis", "chantiers"];

function App() {
  const classes = useStyles();
  const [menuVal, setMenuVal] = useState(-1);
  //const [rule, setRule] = useState(null);
  const [schema, setSchema] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cache, setCache] = useState([0, 0, 0, 0]);

  useEffect(() => {
    setSchema(null);
    setData(null);
    menuVal !== null && setLoading(true);
    fetch(`http://localhost:3001/api/stat/${rules[menuVal]}`, {
      cache: cache[menuVal] > 0 ? "force-cache" : "no-cache",
    })
      .then((prm) => prm.json())
      .then((rep) => {
        let c = [...cache];
        c[menuVal]++;
        setCache(c);
        let definedData = rep.data.map((r) => {
          Object.keys(rep.schema).forEach((s) => {
            if (!r[s]) {
              r[s] = null;
            }
          });
          return r;
        });
        setSchema(rep.schema);
        setData(definedData);
        setLoading(false);
      })
      .catch((err) => console.log("client error ", err))
      .catch((err) => console.log("server error ", err));
  }, [menuVal]);

  return (
    <div className="App">
      <Paper square className={classes.root}>
        <Tabs
          style={{ width: "100%" }}
          value={menuVal}
          onChange={(e, v) => setMenuVal(v)}
          variant="scrollable"
          indicatorColor="secondary"
          textColor="secondary"
        >
          {/* <Tab
            component={Link}
            to="/iwe/Dossiers"
            value={0}
            icon={<Icon> file_copy </Icon>}
            label="Dossiers"
          />
          <Tab
            component={Link}
            to="/iwe/Factures"
            value={1}
            icon={<Icon> receipt </Icon>}
            label="Factures"
          />
          <Tab
            component={Link}
            to="/iwe/Devis"
            value={2}
            icon={<Icon> live_help </Icon>}
            label="Devis"
          />
          <Tab
            component={Link}
            to="/iwe/Chantiers"
            value={3}
            icon={<Icon> domain </Icon>}
            label="Chantiers"
          />*/}
          <Tab icon={<Icon> file_copy </Icon>} label="Dossiers" />
          <Tab icon={<Icon> receipt </Icon>} label="Factures" />
          <Tab icon={<Icon> live_help </Icon>} label="Devis" />
          <Tab icon={<Icon> domain </Icon>} label="Chantiers" />
        </Tabs>
      </Paper>
      {loading && (
        <Backdrop
          className={classes.backdrop}
          open={loading}
          //onClick={handleClose}
        >
          <CircularProgress color="primary" size={100} thickness={5} />
        </Backdrop>
      )}
      {schema && data ? (
        <StatClientTab
          id={rules[menuVal]}
          rule={rules[menuVal]}
          schema={{ columns: schema }}
          data={data}
          tableProps={{
            filterKeys: [],
            hidden: ["id", "_id", "idDossier", "Count"],
            paddings: 2,
            defaultRpp: 10,
            collapses:
              menuVal === 1
                ? []
                : [
                    {
                      title: "Fichiers",
                      fct: (d) => {
                        return (
                          <DisplayFiles
                            id={d.idDossier?.$id ? d.idDossier["$id"] : d._id}
                            type={rules[menuVal]}
                            element={menuVal === 0 ? undefined : d._id}
                          />
                        );
                      },
                    },
                  ],
          }}
          groupBy
          stats
          charts={["pie", "bar", "line"]}
        />
      ) : (
        <h3>Pas de données chargées !</h3>
      )}
    </div>
  );
}

export default App;
