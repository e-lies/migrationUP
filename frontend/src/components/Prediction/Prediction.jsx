import React from "react";
import { useState } from "react";
import {
  Paper,
  TextField,
  Grid,
  Button,
  Typography,
  FormControl,
} from "@material-ui/core";
import useStyle from "./Style";
import { predict, predictClassification } from "../../model/model";

const Prediction = ({ schema, modelName, input, output }) => {
  console.log(modelName);
  console.log(schema);
  const classes = useStyle();
  const [intred, setIntred] = useState({});

  const [result, setResult] = useState([]);
  const [resultStr, setResultStr] = useState({});

  function handlePrediction() {
    if (schema[output].type === "string") {
      predictClassification(intred, output, schema[output].codes).then(
        (res) => {
          setResultStr(res);
        }
      );
    } else {
      predict(intred).then((res) => {
        setResult(res);
      });
    }
  }

  return (
    <>
      <Grid container>
        <Grid item xs={12} className={classes.form}>
          <Typography variant="h5">Model: {modelName}</Typography>
          <Typography variant="h5">{`Enter data to predict the ${output}`}</Typography>
          <FormControl>
            {input.map((e, i) => {
              return (
                <TextField
                  label={e}
                  type={schema[e].type}
                  key={i}
                  variant="outlined"
                  style={{ marginBottom: "10px" }}
                  onChange={(event) => {
                    setIntred({ ...intred, [e]: event.target.value });
                  }}
                />
              );
            })}

            <Button
              variant="outlined"
              style={{
                marginTop: "50px",
                color: "white",
                backgroundColor: "#006622",
              }}
              onClick={handlePrediction}
            >
              Do prediction
            </Button>
          </FormControl>
          {schema[output].type === "string" ? (
            Object.keys(resultStr).map((e, i) => {
              return (
                <Paper elevation={24} key={i} className={classes.result}>
                  {e}%: {resultStr[e]}
                </Paper>
              );
            })
          ) : (
            <Paper elevation={24} className={classes.result}>
              {result}
            </Paper>
          )}
          <Button
            variant="outlined"
            href="/"
            style={{
              marginTop: "100px",
              color: "white",
              backgroundColor: "#006622",
            }}
          >
            Go Back
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Prediction;
