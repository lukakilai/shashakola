import React from "react";

import {
  Buttons,
  Degree,
  Message,
  Receiver,
  Sender,
} from "./form-sections/export";

function Form() {
  return (
    <section>
      <div className="form-wrapper">
        <Sender />
        <Receiver />
        <Message />
        <Degree />
        <Buttons />
      </div>
    </section>
  );
}

export default Form;
