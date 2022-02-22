import React, { useContext } from "react";

import { EverythingContext } from "../../../context/context";

function Receiver() {
  const { theirName, theirSurname, setTheirName, setTheirSurname } =
    useContext(EverythingContext);

  return (
    <div className="form-section">
      <div className="form-section-header">
        <h4>ის</h4>
      </div>
      <div className="form-items">
        <div className="form-item">
          <label>მისი სახელი</label>
          <input
            type="text"
            onChange={(e) => setTheirName(e.target.value)}
            value={theirName}
          />
        </div>
        <div className="form-item">
          <label>მისი გვარი</label>
          <input
            type="text"
            onChange={(e) => setTheirSurname(e.target.value)}
            value={theirSurname}
          />
        </div>
      </div>
    </div>
  );
}

export default Receiver;
