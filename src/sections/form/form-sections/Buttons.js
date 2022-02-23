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
    setCopied,
  } = useContext(EverythingContext);

  function clearEverything() {
    setYourName("");
    setYourSurname("");
    setTheirName("");
    setTheirSurname("");
    setMsg("");
    setHashedMsg("");
    setCopied(false);
  }

  function hashEverything() {
    setCopied(false);
    let newMsg = msg.replaceAll(" ", "");

    let curse = {
      vinc: "",
      var: "",
    };
    switch (degree) {
      case "0":
        curse.vinc = "იმანარგაიხაროსოჯახში";
        curse.var = "ვარდედასვფიცავარ";
        break;
      case "1":
        curse.vinc = "იმისდედავატირე";
        curse.var = "ვარვინმეშიარშეგეშალო";
        break;
      case "2":
        curse.vinc = "იმისდედასშევეცი";
        curse.var = "ვაროეეეეეეეეე";
        break;
    }

    const hash = `20ჭყბ60${theirName}${theirSurname}სგარდავინცესწაიკითხოს${curse.vinc}90ღვპჭ01>>>${newMsg}<<<46პტღ034ვინვარდა${yourName}${yourSurname}${curse.var}`;

    setHashedMsg(hash);
  }

  const fillEverythingError =
    yourName.length === 0 ||
    yourSurname.length === 0 ||
    theirName.length === 0 ||
    theirSurname.length === 0 ||
    msg.length === 0;

  return (
    <div className="btn-section">
      {fillEverythingError && <p className="errorMsg">შეავსე ყველა ველი</p>}

      <div className="btns-wrapper">
        <button className="btn btn-clear" onClick={clearEverything}>
          წაშლა
        </button>
        <button
          className="btn btn-hash"
          onClick={hashEverything}
          disabled={fillEverythingError}
        >
          დაჰეშეი
        </button>
      </div>
    </div>
  );
}

export default Buttons;
