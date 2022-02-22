import React from "react";

function Degree() {
  return (
    <div class="form-section">
      <div class="radio-wrapper">
        <form>
          <div class="radio-item">
            <input type="radio" name="degree" id="low" value={0} />
            <label for="low">მარტივი შიფრი</label>
          </div>
          <div class="radio-item">
            <input type="radio" name="degree" id="mid" value={1} />
            <label for="mid">საშუალო შიფრი</label>
          </div>
          <div class="radio-item">
            <input type="radio" name="degree" id="high" value={2} />
            <label for="high">უძლიერესი შიფრი</label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Degree;
