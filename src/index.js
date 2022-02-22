import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { EverythingContextProvider } from "./context/context";

ReactDOM.render(
  <EverythingContextProvider>
    <App />
  </EverythingContextProvider>,
  document.getElementById("root")
);
