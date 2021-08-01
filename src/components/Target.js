import React, { useState } from "react";

import ChevronIcon from "./ChevronIcon";

function Target(props) {
  const [options, showOptions] = useState(false);

  const toggleOptions = () => {
    if (options) {
      showOptions(false);
      props.useAttribute("target", false);
    } else {
      props.useAttribute("target", "_blank");
      showOptions(true);
    }
  };

  const handleChange = (event) => {
    let { value } = event.target;
    props.useAttribute("target", value);
  };

  return (
    <>
      <input
        type="checkbox"
        id="target"
        name="set-target"
        className="switch-input"
        onChange={(event) => {
          toggleOptions();
        }}
        aria-checked={options}
        aria-labelledby="target-label"
      />

      <label
        htmlFor="target"
        id="target-label"
        className="switch-label"
        tabIndex="0"
      >
        <svg
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          style={{ marginRight: ".5rem" }}
        >
          <path
            d="M.5 7.5a7 7 0 1014 0 7 7 0 00-14 0z"
            stroke="currentColor"
          ></path>
          <path
            d="M3.5 7.5a4 4 0 108 0 4 4 0 00-8 0z"
            stroke="currentColor"
          ></path>
          <path
            d="M6.5 7.5a1 1 0 102 0 1 1 0 00-2 0z"
            stroke="currentColor"
          ></path>
        </svg>
        Target
      </label>
      <p>The browsing context in which the target destination should open.</p>

      {options && (
        <>
          <div className="relative">
            <select onChange={handleChange}>
              <option value="_blank">_blank</option>
              <option value="_self">_self</option>
              <option value="_parent">_parent</option>
              <option value="_top">_top</option>
            </select>
            <ChevronIcon size={20} direction="up" />
          </div>
          <ul>
            <li>
              <code>_self</code> Load the URL into the same browsing context as
              the current one. This is the default behavior.
            </li>
            <li>
              <code>_blank</code> Load the URL into a new browsing context. This
              is usually a tab, but users can configure browsers to use new
              windows instead.
            </li>
            <li>
              <code>_parent</code> Load the URL into the parent browsing context
              of the current one. If there is no parent, this behaves the same
              way as _self.
            </li>
            <li>
              <code>_top</code> Load the URL into the top-level browsing context
              (that is, the "highest" browsing context that is an ancestor of
              the current one, and has no parent). If there is no parent, this
              behaves the same way as _self.
            </li>
          </ul>
        </>
      )}
    </>
  );
}

export default Target;
