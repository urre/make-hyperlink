import React, { useState, useEffect } from "react";

import { notes } from "../constants";

function ReferrerPolicy(props) {
  const [items, setItems] = useState([]);

  const onChange = (event) => {
    let { id, checked } = event.target;

    if (checked) {
      const newItems = [...items, id];
      setItems([...items, id]);
      props.useAttribute("referrerpolicy", newItems.join(" "));
    } else {
      setItems([...items, id]);
      const filteredItems = items.filter((item) => item !== id);
      setItems([...filteredItems]);
      props.useAttribute("referrerpolicy", filteredItems.join(" "));
    }
  };

  return (
    <>
      <details>
        <summary>
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            style={{ marginRight: ".5rem" }}
          >
            <path
              d="M2.5 1.5a1 1 0 11-2 0 1 1 0 012 0zm0 0h5v12h5m0 0a1 1 0 102 0 1 1 0 00-2 0z"
              stroke="currentColor"
            ></path>
          </svg>
          Referrer Policy{" "}
          {items.length > 0 && <span className="count">{items.length}</span>}
        </summary>
        <p>
          The Referrer-Policy HTTP header controls how much referrer information
          (sent via the Referer header) should be included with requests. Aside
          from the HTTP header, you can set this policy in HTML.
        </p>
        <h4>Integrate with HTML</h4>
        <p>
          You can use a meta tag, or set it for individual requests with the
          referrerpolicy attribute. In this example I'm using it on the a tag.{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy#integration_with_html">
            Read more on HTMl integration
          </a>
        </p>
        <ul>
          <li>
            <input
              type="checkbox"
              id="no-referrer"
              name="set-no-referrer"
              className="switch-input"
              onChange={(event) => {
                onChange(event);
              }}
              aria-checked={false}
              aria-labelledby="target-label"
            />
            <label htmlFor="no-referrer" className="switch-label">
              <code>no-referrer</code>
            </label>
            <p>
              {notes.noreferrer}
              page.
            </p>
          </li>
        </ul>
      </details>
    </>
  );
}

export default ReferrerPolicy;
