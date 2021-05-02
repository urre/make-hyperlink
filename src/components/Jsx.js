import React, { useState } from "react";

function Jsx(props) {
  const [options, showOptions] = useState(false);

  const toggleOptions = () => {
    if (options) {
      showOptions(false);
      props.useAttribute("jsx", false);
    } else {
      props.useAttribute("jsx", true);
      showOptions(true);
    }
  };

  return (
    <>
      <input
        type="checkbox"
        id="jsx"
        name="set-jsx"
        className="switch-input"
        onChange={(event) => {
          toggleOptions();
        }}
        aria-checked={options}
        aria-labelledby="jsx-label"
      />

      <label htmlFor="jsx" id="jsx-label" className="switch-label" tabIndex="0">
        <svg
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          style={{ marginRight: ".5rem" }}
        >
          <path
            d="M14.5 7.584c0 1.657-3.134 3-7 3s-7-1.343-7-3 3.134-3 7-3 7 1.343 7 3z"
            stroke="currentColor"
          ></path>
          <path
            d="M4.166 13.739c1.457.79 4.13-1.327 5.972-4.726 1.841-3.4 2.153-6.795.696-7.584-1.457-.79-4.13 1.327-5.972 4.726-1.841 3.4-2.153 6.795-.696 7.584z"
            stroke="currentColor"
          ></path>
          <path
            d="M10.834 13.739c-1.457.79-4.13-1.327-5.972-4.726-1.841-3.4-2.153-6.795-.696-7.584 1.457-.79 4.13 1.327 5.972 4.726 1.841 3.4 2.153 6.795.696 7.584z"
            stroke="currentColor"
          ></path>
          <path
            d="M6.5 7.584a1 1 0 102 0 1 1 0 00-2 0z"
            stroke="currentColor"
          ></path>
        </svg>
        Internal &lt;Link&gt; (JSX)
      </label>
      <p>
        The primary way to allow users to navigate around your application.
        &lt;Link&gt; will render a fully accessible anchor tag with the proper
        href. JSX is a syntax extension to JavaScript often used with React
      </p>
    </>
  );
}

export default Jsx;
