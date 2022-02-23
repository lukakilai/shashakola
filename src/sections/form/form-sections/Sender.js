import React, { useContext } from "react";

import { EverythingContext } from "../../../context/context";

function Sender() {
  const { yourName, yourSurname, setYourName, setYourSurname } =
    useContext(EverythingContext);

  return (
    <div className="form-section">
      <div className="form-section-header">
        <h4>შენ</h4>
      </div>
      <div className="form-items">
        <div className="form-item">
          <label>შენი სახელი</label>
          <input
            type="text"
            onChange={(e) => setYourName(e.target.value)}
            value={yourName}
            placeholder="ჯონ"
          />
        </div>
        <div className="form-item">
          <label>შენი გვარი</label>
          <input
            type="text"
            onChange={(e) => setYourSurname(e.target.value)}
            value={yourSurname}
            placeholder="დო"
          />
        </div>
      </div>
    </div>
  );
}

export default Sender;
