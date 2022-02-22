import React, { useContext } from "react";

import { EverythingContext } from "../../../context/context";

function Degree() {
  const { setDegree } = useContext(EverythingContext);

  return (
    <div className="form-section">
      <div className="radio-wrapper">
        <form>
          <div className="radio-item">
            <input
              type="radio"
              name="degree"
              id="low"
              value={0}
              onClick={(e) => setDegree(e.target.value)}
            />
            <label htmlFor="low">მარტივი შიფრი</label>
          </div>
          <div className="radio-item">
            <input
              type="radio"
              name="degree"
              id="mid"
              value={1}
              onClick={(e) => setDegree(e.target.value)}
            />
            <label htmlFor="mid">საშუალო შიფრი</label>
          </div>
          <div className="radio-item">
            <input
              type="radio"
              name="degree"
              id="high"
              value={2}
              onClick={(e) => setDegree(e.target.value)}
            />
            <label htmlFor="high">უძლიერესი შიფრი</label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Degree;
