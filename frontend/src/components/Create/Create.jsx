import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";
import {
  LinearProgress,
  TextField,
  Grid,
  Button,
  Card,
  CardContent,
  Box,
  Typography,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import useStyle from "./Style";
import { save, train, trainClassification } from "../../model/model";

const Create = ({
  schema,
  data,
  rule
}) => {
  const [isTrain, setIsTrain] = useState(false);
  const [trained, setTrained] = useState(false);
  const [input, setInput] = useState([]);
  const [output, setOutput] = useState("");
  const [modelName, setModelName] = useState("");

  function beginTrain() {
    setIsTrain(true);

    if (schema[output].type === "string") {
      trainClassification({ features: input, output: output }, data, schema).then((res) => {
        setTrained(true);
        setIsTrain(false);
        schema[output]["codes"] = res;
      });
    } else {
      console.log("given from react: ",input,output)
      train({ features: input, output: output }, data, schema).then((res) => {
        setTrained(true);
        setIsTrain(false);
      });
    }
  }

  function saveModel() {
    save(modelName).then(() => {
      console.log("Model Saved");
    });
  }
  function HandleLoad() {
  }

  const classes = useStyle();

  return (
    <>
     <Box className={classes.header}>
      <Typography variant="h5" style={{marginRight:"20px"}}>Create a Model</Typography>
      <TextField
        label="Model Name"
        variant="outlined"
        onChange={(e) => {
          setModelName(e.target.value);
        }}
      />
      
      </Box>
      <Grid container spacing={10}>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl className={classes.checkboxes}>
            {Object.keys(schema).map((e, i) => {
              return (
                <FormControlLabel
                  control={<Checkbox style={{ color: "#006622" }} />}
                  key={i}
                  label={e}
                  value={e}
                  className={classes.chkbx}
                  onChange={(e) => {
                    e.target.checked
                      ? setInput([...input, e.target.value])
                      : setInput(
                          [...input, e.target.value].filter(
                            (i) => i !== e.target.value
                          )
                        );
                  }}
                />
              );
            })}
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <FormControl style={{ width: "100%" }}>
            <InputLabel style={{ color: "#006622" }}>Output</InputLabel>
            <Select
              label="Output"
              value={output}
              onChange={(e) => {
                setOutput(e.target.value);
              }}
            >
              {Object.keys(schema).map((e, i) => {
                return (
                  <MenuItem value={e} key={i}>
                    {e}
                  </MenuItem>
                );
              })}
            </Select>
            <Button
              variant="outlined"
              style={{
                marginTop: "50px",
                color: "white",
                backgroundColor: "#006622",
              }}
              onClick={beginTrain}
            >
              Train
            </Button>
            {isTrain && (
              <div>
                <LinearProgress />
              </div>
            )}
          </FormControl>
          {trained && (
            <div>
              <Button
                variant="outlined"
                style={{
                  marginTop: "50px",
                  color: "white",
                  backgroundColor: "#006622",
                }}
                onClick={saveModel}
              >
                Save
              </Button>
              <Button
                variant="outlined"
                style={{
                  marginTop: "50px",
                  marginLeft: "215px",
                  color: "white",
                  backgroundColor: "#006622",
                }}
              >
                <Link to="/predict" style={{ color: "white" }}>
                  Predict
                </Link>
              </Button>
            </div>
          )}
        </Grid>

        <Grid item xs={12} sm={6} md={4} className={classes.discription}>
          <Box>
            <Card
              elevation={3}
              style={{ color: "#2d8659", backgroundColor: "#cccccc" }}
            >
              <CardContent className={classes.content}>
                <Typography
                  variant="h5"
                  className={classes.text}
                  style={{ fontWeight: "bold", color: "#006622" }}
                >
                  How to use our model
                </Typography>
                <Typography variant="body1" className={classes.text}>
                  Check the boxes to select the input fields for training
                </Typography>
                <Typography variant="body1" className={classes.text}>
                  In the output field select what type of output you want
                </Typography>
                <Typography variant="body1" className={classes.text}>
                  Once the training finished you can predict new values or save
                  your model
                </Typography>
                <Typography variant="body1" className={classes.text}>
                  For better results we recommend using up to five inputs
                </Typography>
                <Button
                  variant="contained"
                  style={{
                    color: "white",
                    backgroundColor: "#006622",
                    marginTop: "100px",
                  }}
                >
                  See more
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
      <Box className={classes.load}>
      <Typography variant="h5">Load a Model</Typography>
      <Button
              variant="outlined"
              style={{
                color: "white",
                backgroundColor: "#006622",
                width:"50%"
              }}
              onClick={HandleLoad}
            >
              Load
      </Button>
      </Box>
    </>
  );
};

export default Create;
