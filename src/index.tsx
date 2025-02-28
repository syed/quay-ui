import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@patternfly/patternfly/patternfly.css";
import { RecoilRoot } from "recoil";
// import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      {/* <BrowserRouter> */}
        <App />
      {/* </BrowserRouter> */}
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
