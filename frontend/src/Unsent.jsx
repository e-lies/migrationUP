import React, { useState, useContext } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListItemIcon,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import OutlinedIcon from "./components/OutlinedIcon";
import { CrudContext } from "./context/ServerContext";
import { ContextForms } from "./context/Forms";
const labels = {
  insert: "Insertion d'un ",
  inserts: "Insertion d'un ",
  update: "Modification d'un ",
  delete: "Suppression d'un ",
};

export default function Unsent() {
  const [openCollapse, setOpenCollapse] = useState(false);
  const forms = useContext(ContextForms);
  const context = useContext(CrudContext);

  return (
    <>
      <List>
        <ListItem
          style={{ height: 106 }}
          button
          onClick={() => setOpenCollapse(!openCollapse)}
        >
          <ListItemText primary="Requêtes non-envoyées" />
          {openCollapse ? (
            <OutlinedIcon>expand_less</OutlinedIcon>
          ) : (
            <OutlinedIcon>expand_more</OutlinedIcon>
          )}
        </ListItem>
      </List>
      <Collapse in={openCollapse} timeout="auto" unmountOnExit>
        <List component="nav" aria-label="main mailbox folders" dense>
          {Object.keys(context.writeCache).reduce(
            (acc, curr) =>
              acc.concat(
                context.writeCache[curr].map((req) => (
                  <ListItem>
                    <ListItemIcon>
                      {curr === "insert" || curr === "inserts" ? (
                        <OutlinedIcon>add</OutlinedIcon>
                      ) : curr === "update" ? (
                        <OutlinedIcon>edit</OutlinedIcon>
                      ) : (
                        <OutlinedIcon>delete</OutlinedIcon>
                      )}
                    </ListItemIcon>
                    <ListItemText
                      primary={`${labels[req.request.type]} ${
                        req.request.rule
                      }`}
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        onClick={() =>
                          req.request.type === "delete"
                            ? context.write(
                                req.request,
                                req.callback,
                                req.idComp
                              )
                            : forms.addForm(
                                req.request.type === "inserts"
                                  ? "insert"
                                  : req.request.type,
                                req.request.rule,
                                {
                                  populate: false,
                                  od: Array.isArray(req.request.data)
                                    ? req.request.data
                                    : [req.request.data],
                                  cond: req.where || [],
                                  callback: req.callback,
                                }
                              )
                        }
                      >
                        <OutlinedIcon>refresh</OutlinedIcon>
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))
              ),
            []
          )}
        </List>
      </Collapse>
    </>
  );
}
