import React, { useContext } from "react";

import { EverythingContext } from "../../../context/context";

function Message() {
  const { msg, setMsg } = useContext(EverythingContext);

  return (
    <div className="form-section">
      <div className="form-section-header">
        <h4>მესიჯი</h4>
      </div>
      <div className="form-items">
        <textarea
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        ></textarea>
      </div>
    </div>
  );
}

export default Message;
