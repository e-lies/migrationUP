import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import StatContainer from "./Pages/StatContainer";
import ArticleEnStock from "./Pages/Stats/ArticleEnStock";
import Arrivees from "./Pages/Stats/Arrivees";
import PreAchat from "./Pages/Stats/PreAchat";
import RetourClient from "./Pages/Stats/RetourClient";
import RetourFournisseur from "./Pages/Stats/RetourFournisseur";
import Ventes from "./Pages/Stats/Ventes";
import LignesCommande from "./Pages/Stats/LignesCommande";
import Commandes from "./Pages/Stats/Commandes";
import Visites from "./Pages/Stats/Visites";
import Virtuelles from "./Pages/Stats/Virtuelles";
import Reports from "./Pages/Reports";

function Stats() {
  return (
    <div className="Stats">
      <StatContainer />
      <Switch>
        <Route
          path="/siraj/statistiques/ArticleEnStock"
          component={ArticleEnStock}
        />
        <Route path="/siraj/statistiques/Arrivees" component={Arrivees} />
        <Route path="/siraj/statistiques/PreAchat" component={PreAchat} />
        <Route
          path="/siraj/statistiques/RetourClient"
          component={RetourClient}
        />
        <Route
          path="/siraj/statistiques/RetourFournisseur"
          component={RetourFournisseur}
        />
        <Route path="/siraj/statistiques/Ventes" component={Ventes} />
        <Route
          path="/siraj/statistiques/LignesCommande"
          component={LignesCommande}
        />
        <Route path="/siraj/statistiques/Commandes" component={Commandes} />
        <Route path="/siraj/statistiques/Virtuelles" component={Virtuelles} />
        <Route path="/siraj/statistiques/Visites" component={Visites} />
        <Route path="/siraj/statistiques/Reports" component={Reports} />
      </Switch>
    </div>
  );
}

export default Stats;
