import React, { useState, useEffect } from "react";
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

export default function Dossiers(props){

    return(
        <StatClientTab
            id={rules[menuVal]}
            rule={rules[menuVal]}
            schema={{ columns: schema }}
            data={data}
            tableProps={{
                filterKeys: [],
                hidden: ["id", "Count"],
                paddings: 2,
                defaultRpp: 10,
                collapses:
                menuVal === 1
                    ? []
                    : [{
                        title: "Fichiers",
                        fct: (d) => {
                            return (
                            <DisplayFiles id={d._id} type={rules[menuVal]} />
                            );
                        },
                    }],
            }}
          groupBy
          stats
          charts={["pie", "bar", "line"]}
        />
    )
}