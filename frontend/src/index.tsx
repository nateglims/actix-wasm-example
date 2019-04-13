import * as React from "react";
import * as ReactDOM from "react-dom";

import("../crate/pkg/rust_webpack").then(module => {
  const App = () => {
    return (
      <div>
        <h1>Title</h1>
        <button onClick={module.run}>Hi</button>
      </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById("app"));
});
