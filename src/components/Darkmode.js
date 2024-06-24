import React, { useState } from "react";

function Darkmode(props) {
  const [Mode, toggleMode] = useState(false);
  const [modeType] = useState("Dark");

  const toggleOptions = () => {
    if (Mode) {
      toggleMode(false);
      document.querySelector("body").classList.remove("dark");
    } else {
      toggleMode(true);
      document.querySelector("body").classList.add("dark");
    }
  };

  return (
    <>
      <input
        type="checkbox"
        id="darkmode"
        name="set-darkmode"
        className="switch-input switch-input-dark"
        onChange={(event) => {
          toggleOptions();
        }}
        aria-checked={Mode}
        aria-labelledby="target-label"
      />
      <label htmlFor="darkmode" className="switch-label">
        {modeType} UI
      </label>
    </>
  );
}

export default Darkmode;
