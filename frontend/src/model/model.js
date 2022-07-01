import * as tf from "@tensorflow/tfjs";
/*import { getData, getSchema } from "../api";
let data = [];
let schema = {};

getData().then((res) => {
  data = res;
});

getSchema().then((res) => {
  schema = res;
  console.log("------------------", schema);
});*/

const model = tf.sequential();

const oneHot = (feature, featureValue, schema) => {
  let coded = [];
  Object.keys(schema).forEach((c) => {
    if (c === feature) {
      console.log("hot = ", feature);
      coded = Array.from(
        tf
          .oneHot(
            schema[c].possibleValues.indexOf(featureValue),
            schema[c].possibleValues.length
          )
          .dataSync()
      );
    }
  });
  return coded;
};

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const train = async (choice, data, schema) => {
  console.log("trainint");
  console.log("choicein model: ", choice.features, choice.output);
  function getData(choice) {
    let xs = [];
    let ys = [];
    data.forEach((e) => {
      let x = [];
      choice.features.forEach((f) => {
        if (typeof e[f] == "string") {
          x.push(oneHot(f, e[f], schema));
        } else {
          x.push(Number(e[f]));
        }
      });
      xs.push(x.flat());
      ys.push(e[choice.output]);
    });

    return { xs, ys };
  }
  const { xs, ys } = getData(choice);

  let lengthOfInput = xs[0].length;

  model.add(
    tf.layers.dense({
      inputShape: [lengthOfInput],
      units: 5,
      activation: "relu",
    })
  );
  model.add(
    tf.layers.dense({ inputShape: [5], units: 4, activation: "linear" })
  );
  model.add(
    tf.layers.dense({ inputShape: [4], units: 2, activation: "linear" })
  );
  model.add(tf.layers.dropout({ rate: 0.05 }));
  model.add(
    tf.layers.dense({ inputShape: [2], units: 1, activation: "linear" })
  );

  model.summary();
  model.compile({
    loss: tf.losses.absoluteDifference,
    optimizer: tf.train.adam(0.06),
    metrics: ["accuracy"],
  });
  const features = tf.tensor(xs, [xs.length, xs[0].length]);
  const labels = tf.tensor(ys, [ys.length, 1]);

  await model.fit(features, labels, {
    epochs: 600,
    batchSize: 512,
    shuffle: true,
    callbacks: {
      onEpochEnd: async (epoch, logs) => {
        console.log("epoch: " + epoch + " loss: " + logs.loss);
      },
    },
  });
  await model.save(`localstorage://Model`).then(() => {
    console.log("Saved successfully");
  });

  return true;
};
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const trainClassification = async (choice, data, schema) => {
  console.log("trainclass");
  function getData(choice) {
    let xs = [];
    let ys = [];
    data.forEach((e) => {
      let x = [];
      choice.features.forEach((f) => {
        if (typeof e[f] == "string") {
          x.push(oneHot(f, e[f]));
        } else {
          x.push(e[f]);
        }
      });
      xs.push(x.flat());
      ys.push(oneHot(choice.output, e[choice.output], schema));
    });

    return { xs, ys };
  }
  const { xs, ys } = getData(choice);
  let lengthOfInput = xs[0].length;
  model.add(
    tf.layers.dense({
      inputShape: [lengthOfInput],
      units: 10,
      activation: "relu",
    })
  );
  model.add(
    tf.layers.dense({
      inputShape: [10],
      units: 5,
      activation: "sigmoid",
    })
  );
  model.add(
    tf.layers.dense({
      inputShape: [5],
      units: ys[0].length,
      activation: "softmax",
    })
  );

  model.compile({
    loss: "categoricalCrossentropy",
    optimizer: tf.train.adam(0.01),
    metrics: ["accuracy"],
  });

  model.summary();

  const features = tf.tensor(xs);
  const labels = tf.tensor(ys);

  await model.fit(features, labels, {
    epochs: 200,
    batchSize: 128,
    shuffle: true,
    callbacks: {
      onEpochEnd: async (epoch, logs) => {
        console.log("epoch: " + epoch + " loss: " + logs.loss);
      },
    },
  });

  let codeForOut = [];
  schema[choice.output].possibleValues.forEach((e) => {
    codeForOut.push(oneHot(choice.output, e, schema));
  });
  schema[choice.output]["CodedValues"] = codeForOut;
  console.log("//////", schema[choice.output]["CodedValues"]);

  await model.save(`localstorage://Model`).then(() => {
    console.log("Saved successfully");
  });

  return schema[choice.output]["CodedValues"];
};
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const predictClassification = async (inputs, out, codes, schema) => {
  console.log("predClass init");
  console.log(schema);
  const model = await tf.loadLayersModel(`localstorage://Model`);
  let codedInpValues = [];
  Object.keys(inputs).forEach((e) => {
    if (schema[e].type === "string") {
      codedInpValues.push(oneHot(e, inputs[e]));
    } else {
      codedInpValues.push(Number(inputs[e]));
    }
  });

  let result = model
    .predict(
      tf.tensor(codedInpValues.flat(), [1, codedInpValues.flat().length])
    )
    .arraySync()
    .flat();
  console.log(result);
  let ResObj = {};
  result.forEach((_e, i, arr) => {
    let maxi = arr.indexOf(Math.max(...arr));
    let res = Array(arr.length).fill(0);
    res[maxi] = 1;
    ResObj[`${(arr[maxi] * 100).toFixed(2)}`] =
      schema[out].possibleValues[
        codes.indexOf(
          codes.find((e) => {
            return JSON.stringify(e) === JSON.stringify(res);
          })
        )
      ];
    arr[maxi] = 0;
    res[maxi] = 0;
    console.log("result--", ResObj);
  });
  return ResObj;
};
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const save = async (Mname) => {
  await model.save(`localstorage://${Mname}`).then(() => {
    return "Saved successfully";
  });
};
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const predict = async (inputs, schema) => {
  console.log("predint init");
  console.log("inputs to prediction: ", inputs);
  const model = await tf.loadLayersModel(`localstorage://Model`);

  let codedInpValues = [];
  Object.keys(inputs).forEach((e) => {
    if (schema[e].type === "string") {
      codedInpValues.push(oneHot(e, inputs[e]));
    } else {
      codedInpValues.push(Number(inputs[e]));
    }
  });
  console.log("here");
  return model
    .predict(
      tf.tensor(codedInpValues.flat(), [1, codedInpValues.flat().length])
    )
    .arraySync();
};
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const load = async (Mname) => {
  const model = await tf.loadLayersModel(`localstorage://${Mname}`);
  return model;
};

export {
  predict,
  load,
  save,
  train,
  trainClassification,
  predictClassification,
};
