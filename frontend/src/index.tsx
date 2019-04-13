import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/App";

import("../crate/pkg/rust_webpack").then(module => {
  ReactDOM.render(
    <App s="hi" fetch={module.run} />,
    document.getElementById("app")
  );
});
