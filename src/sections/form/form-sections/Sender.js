import React from "react";

function Sender() {
  return (
    <div class="form-section">
      <div class="form-section-header">
        <h4>შენ</h4>
      </div>
      <div class="form-items">
        <div class="form-item">
          <label>შენი სახელი</label>
          <input type="text" />
        </div>
        <div class="form-item">
          <label>შენი გვარი</label>
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

export default Sender;
