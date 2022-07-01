import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import ServerContext from "./context/ServerContext";
//import SessionContext from "./context/SessionContext";
import FormsContext from "./context/Forms";
import GeolocationContext from "./context/GeolocationContext";
//import SpeechSynthesisContext from "./context/SpeechSynthesis";
//import RecognizerContextProvider from './context/recognizerContext';
import App from "./App";
import Login from "./Login";
import NotFound from "./NotFound";
//import * as serviceWorker from "./serviceWorker";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
//import reportWebVitals from "./reportWebVitals";
import Theme from "./Themes/Red";

const theme = createMuiTheme(Theme);
const Rout = () => (
  <Switch>
    <Route path="/iwe/:view" component={App} />
    <Route path="/:role" component={Login} />
    <Route default comp={NotFound} />
  </Switch>
);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <HashRouter>
      {/*<SpeechSynthesisContext>*/}
      {/*<RecognizerContextProvider>*/}
      {/*<SessionContext>*/}
      <ServerContext>
        <FormsContext>
          <GeolocationContext>
            <Rout />
          </GeolocationContext>
        </FormsContext>
      </ServerContext>
      {/*</SessionContext>*/}
      {/*</RecognizerContextProvider>*/}
      {/*</SpeechSynthesisContext>*/}
    </HashRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
