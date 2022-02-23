import React, { useContext, useState } from "react";

import { EverythingContext } from "../context/context";

function Output() {
  const { hashedMsg, copied, setCopied } = useContext(EverythingContext);

  return (
    <section>
      <div className="output-container">
        <p>ინებე შენი დაშიფრული შეტყობინება</p>
        <div className="output-wrapper">
          <p className="output">{hashedMsg}</p>
          <button
            className="btn btn-copy"
            onClick={() => {
              setCopied(true);
              navigator.clipboard.writeText(hashedMsg);
            }}
          >
            {copied ? "დაკოპირებულია ✅" : "დაკოპირება"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Output;
