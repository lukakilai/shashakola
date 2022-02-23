import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

import { Header, Output, Form } from "./sections/export";

function App() {
  return (
    <Fragment>
      <div className="dummy"></div>
      <div className="main-container wrapper">
        <Header />
        <Form />
        <Output />
      </div>
      <div className="dummy"></div>
    </Fragment>
  );
}

export default App;
