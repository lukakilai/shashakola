import React, { useContext } from "react";

import { EverythingContext } from "../../../context/context";

function Buttons() {
  const {
    yourName,
    setYourName,
    yourSurname,
    setYourSurname,
    theirName,
    setTheirName,
    theirSurname,
    setTheirSurname,
    msg,
    setMsg,
    degree,
    setHashedMsg,
  } = useContext(EverythingContext);

  function clearEverything() {
    setYourName("");
    setYourSurname("");
    setTheirName("");
    setTheirSurname("");
    setMsg("");
  }

  function hashEverything() {}

  return (
    <div className="form-section">
      <div className="btns-wrapper">
        <button className="btn btn-clear" onClick={clearEverything}>
          წაშლა
        </button>
        <button className="btn btn-hash">დაჰეშეი</button>
      </div>
    </div>
  );
}

export default Buttons;
