import React, { useContext } from "react";

import { EverythingContext } from "../context/context";

function Output() {
  const { hashedMsg } = useContext(EverythingContext);

  return (
    <section>
      {hashedMsg.length > 0 && (
        <div className="output-container">
          <p>ინებე შენი დაშიფრული შეტყობინება</p>
          <div className="output-wrapper">
            <p className="output">{hashedMsg}</p>
            <button className="btn btn-copy">დაკოპირება</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Output;
