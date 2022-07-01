import { React, useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Tab, Paper, Icon } from "@material-ui/core";
import StatClientTab from "./components/Tableaux/StatClientTab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
});
const rules = ["dossiers", "factures", "devis", "chantiers"];

function App() {
  const classes = useStyles();
  const [menuVal, setMenuVal] = useState(null);
  //const [rule, setRule] = useState(null);
  const [schema, setSchema] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/iwe/${rules[menuVal]}`)
      .then((prm) => prm.json())
      .then((rep) => {
        setSchema(rep.schema);
        setData(rep.data);
      })
      .catch((err) => console.log("client error ", err))
      .catch((err) => console.log("server error ", err));
  }, [menuVal]);

  return (
    <div className="App">
      azertyuio
      {/*<Paper square className={classes.root}>
        <Tabs
          value={menuVal}
          onChange={(e, v) => setMenuVal(v)}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
        >
          <Tab icon={<Icon> file_copy </Icon>} label="Dossiers" />
          <Tab icon={<Icon> receipt </Icon>} label="Factures" />
          <Tab icon={<Icon> live_help </Icon>} label="Devis" />
          <Tab icon={<Icon> domain </Icon>} label="Chantiers" />
        </Tabs>
      </Paper>
      {schema && data ? (
        <StatClientTab
          id={rules[menuVal]}
          rule={rules[menuVal]}
          schema={schema}
          data={data}
          tableProps={{
            filterKeys: [],
            hidden: ["id", "Commande", "Type"],
            paddings: 2,
            defaultRpp: 10,
          }}
          groupBy
          stats
          charts={["pie", "bar", "line"]}
        />
      ) : (
        <h4> Aucune donnée chargée </h4>
      )} */}
    </div>
  );
}

export default App;
