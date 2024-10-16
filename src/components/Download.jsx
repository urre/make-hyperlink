import React, { useState } from "react";

function Download(props) {
  const [active, toggleActive] = useState(false);

  const toggleOptions = () => {
    if (active) {
      toggleActive(false);
      props.useAttribute("download", false);
    } else {
      props.useAttribute("download", true);
      toggleActive(true);
    }
  };

  return (
    <>
      <input
        type="checkbox"
        id="download"
        name="set-download"
        className="switch-input"
        onChange={(event) => {
          toggleOptions();
        }}
        aria-checked={active}
        aria-labelledby="target-label"
      />
      <label htmlFor="download" className="switch-label" tabIndex="0">
        <svg
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          style={{ marginRight: ".5rem" }}
        >
          <path
            d="M7.5 10.5l-3.25-3m3.25 3l3-3m-3 3V1m6 6v6.5h-12V7"
            stroke="currentColor"
          ></path>
        </svg>
        Download
      </label>
      <p>
        Indicates that the target should be downloaded instead of navigated to.
      </p>
    </>
  );
}

export default Download;
