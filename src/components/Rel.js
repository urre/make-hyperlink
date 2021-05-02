import React, { useState } from "react";

import { notes } from "../constants";

function Rel(props) {
  const [items, setItems] = useState([]);

  const onChange = (event) => {
    let { id, checked } = event.target;

    if (checked) {
      const newItems = [...items, id];
      setItems([...items, id]);
      props.useAttribute("rel", newItems.join(" "));
    } else {
      setItems([...items, id]);
      const filteredItems = items.filter((item) => item !== id);
      setItems([...filteredItems]);
      props.useAttribute("rel", filteredItems.join(" "));
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
          Rel{" "}
        </summary>
        <ul>
          <li>
            <input
              type="checkbox"
              id="alternate"
              name="set-alternate"
              className="switch-input"
              onChange={(event) => {
                onChange(event);
              }}
              defaultChecked={false}
              aria-checked={false}
              aria-labelledby="target-label"
            />
            <label htmlFor="alternate" className="switch-label">
              <code>alternate</code>
            </label>
            <p>An alternative version of the current web page.</p>
          </li>
          <li>
            <input
              type="checkbox"
              id="author"
              name="set-author"
              className="switch-input"
              onChange={(event) => {
                onChange(event);
              }}
              aria-checked={false}
              aria-labelledby="target-label"
            />
            <label htmlFor="author" className="switch-label">
              <code>author</code>
            </label>
            <p>
              {notes.alternate} An alternative version of the current web page.
            </p>
          </li>
          <li>
            <input
              type="checkbox"
              id="bookmark"
              name="set-bookmark"
              className="switch-input"
              onChange={(event) => {
                onChange(event);
              }}
              aria-checked={false}
              aria-labelledby="target-label"
            />
            <label htmlFor="bookmark" className="switch-label">
              <code>bookmark</code>
            </label>
            <p>{notes.bookmark}</p>
          </li>
          <li>
            <input
              type="checkbox"
              id="help"
              name="set-help"
              className="switch-input"
              onChange={(event) => {
                onChange(event);
              }}
              aria-checked={false}
              aria-labelledby="target-label"
            />
            <label htmlFor="help" className="switch-label">
              <code>help</code>
            </label>
            <p>{notes.help}</p>
          </li>
          <li>
            <input
              type="checkbox"
              id="license"
              name="set-license"
              className="switch-input"
              onChange={(event) => {
                onChange(event);
              }}
              aria-checked={false}
              aria-labelledby="target-label"
            />
            <label htmlFor="license" className="switch-label">
              <code>license</code>
            </label>
            <p>{notes.license}</p>
          </li>
          <li>
            <input
              type="checkbox"
              id="next"
              name="set-next"
              className="switch-input"
              onChange={(event) => {
                onChange(event);
              }}
              aria-checked={false}
              aria-labelledby="target-label"
            />
            <label htmlFor="next" className="switch-label">
              <code>next</code>
            </label>
            <p>{notes.next}</p>
          </li>
          <li>
            <input
              type="checkbox"
              id="nofollow"
              name="set-nofollow"
              className="switch-input"
              onChange={(event) => {
                onChange(event);
              }}
              aria-checked={false}
              aria-labelledby="target-label"
            />
            <label htmlFor="nofollow" className="switch-label">
              <code>nofollow</code>
            </label>
            <p>{notes.nofollow}</p>
          </li>
          <li>
            <input
              type="checkbox"
              id="noreferrer"
              name="set-noreferrer"
              className="switch-input"
              onChange={(event) => {
                onChange(event);
              }}
              aria-checked={false}
              aria-labelledby="target-label"
            />
            <label htmlFor="noreferrer" className="switch-label">
              <code>noreferrer</code>
            </label>
            <p>{notes.noreferrer}</p>
          </li>
          <li>
            <input
              type="checkbox"
              id="noopener"
              name="set-noopener"
              className="switch-input"
              onChange={(event) => {
                onChange(event);
              }}
              aria-checked={false}
              aria-labelledby="target-label"
            />
            <label htmlFor="noopener" className="switch-label">
              <code>noopener</code>
            </label>
            <p>{notes.noreferrer}</p>
          </li>
          <li>
            <input
              type="checkbox"
              id="prefetch"
              name="set-prefetch"
              className="switch-input"
              onChange={(event) => {
                onChange(event);
              }}
              aria-checked={false}
              aria-labelledby="target-label"
            />
            <label htmlFor="prefetch" className="switch-label">
              <code>prefetch</code>
            </label>
            <p>{notes.prefetch}</p>
          </li>
          <li>
            <input
              type="checkbox"
              id="prev"
              name="set-prev"
              className="switch-input"
              onChange={(event) => {
                onChange(event);
              }}
              aria-checked={false}
              aria-labelledby="target-label"
            />
            <label htmlFor="prev" className="switch-label">
              <code>prev</code>
            </label>
            <p>{notes.prev}</p>
          </li>
          <li>
            <input
              type="checkbox"
              id="search"
              name="set-search"
              className="switch-input"
              onChange={(event) => {
                onChange(event);
              }}
              aria-checked={false}
              aria-labelledby="target-label"
            />
            <label htmlFor="search" className="switch-label">
              <code>search</code>
            </label>
            <p>{notes.prev}</p>
          </li>
          <li>
            <input
              type="checkbox"
              id="tag"
              name="set-tag"
              className="switch-input"
              onChange={(event) => {
                onChange(event);
              }}
              aria-checked={false}
              aria-labelledby="target-label"
            />
            <label htmlFor="tag" className="switch-label">
              <code>tag</code>
            </label>
            <p>{notes.tag}</p>
          </li>
        </ul>
      </details>
    </>
  );
}

export default Rel;
