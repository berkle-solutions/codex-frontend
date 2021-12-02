import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import { Router } from "./router";
import { MainContext } from "./store/MainContext";

ReactDOM.render(
  <MainContext>
    <Router />
  </MainContext>,
  document.getElementById("root")
);
