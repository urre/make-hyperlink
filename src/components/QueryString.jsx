import React, { useState, useEffect } from "react";

import { notes } from "../constants";


function QueryString(props) {
  const [options, showOptions] = useState(false);
  const [queryKey, setQueryKey] = useState("ref");
  const [queryValue, setQueryValue] = useState("producthunt");

  const toggleOptions = (event) => {
    if (options) {
      showOptions(false);
    } else {
      showOptions(true);
    }
  };

  const handleChange = (event) => {
    let { value, id } = event.target;

    id === "querykey" && setQueryKey(value);
    id === "queryvalue" && setQueryValue(value);
  };

  useEffect(() => {
    options
      ? props.appendQueryString(true, queryKey, queryValue)
      : props.appendQueryString(false, "", "");
  }, [options, queryKey, queryValue]);

  return (
    <>
      <input
        type="checkbox"
        id="querystring"
        name="set-querystring"
        className="switch-input"
        aria-checked={options}
        aria-labelledby="querystring-label"
        onChange={(event) => toggleOptions(event)}
      />

      <label
        htmlFor="querystring"
        id="querystring-label"
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
            d="M7.5 12v-1.264c0-1.37.774-2.623 2-3.236a3.65 3.65 0 002-3.257C11.5 2.195 9.84.5 7.792.5h-.207c-1.335 0-2.615.53-3.56 1.474L3.5 2.5m3.5 12h1"
            stroke="currentColor"
          ></path>
        </svg>
        Query String
      </label>
      <p>{notes.querystring_example}</p>

      {options && (
        <>
          <input
            type="text"
            id="querykey"
            onChange={(event) => handleChange(event)}
            placeholder="Ref"
            value={queryKey}
          />

          <input
            type="text"
            id="queryvalue"
            onChange={(event) => handleChange(event)}
            placeholder="Identifier"
            value={queryValue}
          />
        </>
      )}
    </>
  );
}

export default QueryString;
