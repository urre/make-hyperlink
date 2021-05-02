import React, { useState, useEffect } from "react";

import { notes } from "../constants";

import {
  DEFAULT_ACCESSKEY,
  DEFAULT_TABINDEX,
  DEFAULT_ARIA_LABEL,
} from "../constants";

/* CHECK */
// usability.yale.edu/web-accessibility/articles/links#disabilities

function A11y(props) {
  const [items, setItems] = useState([]);

  const [arialabelOptions, ShowArialabelOptions] = useState(false);
  const [accesskeyOptions, ShowAccesskeyOptions] = useState(false);
  const [tabindexOptions, ShowTabindexOptions] = useState(false);

  const [arialabel, SetArialabel] = useState(DEFAULT_ARIA_LABEL);
  const [accesskey, SetAccesskey] = useState(DEFAULT_ACCESSKEY);
  const [tabindex, SetTabindex] = useState(DEFAULT_TABINDEX);

  useEffect(() => {
    arialabelOptions
      ? props.useAttribute("arialabel", arialabel)
      : props.useAttribute("arialabel", false);
    accesskeyOptions
      ? props.useAttribute("accesskey", accesskey)
      : props.useAttribute("accesskey", false);
    tabindexOptions
      ? props.useAttribute("tabindex", tabindex)
      : props.useAttribute("tabindex", false);
  }, [
    arialabelOptions,
    accesskeyOptions,
    tabindexOptions,
    arialabel,
    accesskey,
    tabindex,
  ]);

  const addNote = (note) => {
    return { __html: note };
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
              d="M9.5 14.5H9a.5.5 0 00.8.4l-.3-.4zm2-1.5l.3-.4a.5.5 0 00-.6 0l.3.4zm2 1.5l-.3.4a.5.5 0 00.8-.4h-.5zm-2-3.5A2.5 2.5 0 019 8.5H8a3.5 3.5 0 003.5 3.5v-1zM14 8.5a2.5 2.5 0 01-2.5 2.5v1A3.5 3.5 0 0015 8.5h-1zM11.5 6A2.5 2.5 0 0114 8.5h1A3.5 3.5 0 0011.5 5v1zm0-1A3.5 3.5 0 008 8.5h1A2.5 2.5 0 0111.5 6V5zM9 10.5v4h1v-4H9zm.8 4.4l2-1.5-.6-.8-2 1.5.6.8zm1.4-1.5l2 1.5.6-.8-2-1.5-.6.8zm2.8 1.1v-4h-1v4h1zM15 5V1.5h-1V5h1zm-1.5-5h-12v1h12V0zM0 1.5v12h1v-12H0zM1.5 15H8v-1H1.5v1zM0 13.5A1.5 1.5 0 001.5 15v-1a.5.5 0 01-.5-.5H0zM1.5 0A1.5 1.5 0 000 1.5h1a.5.5 0 01.5-.5V0zM15 1.5A1.5 1.5 0 0013.5 0v1a.5.5 0 01.5.5h1zM3 5h5V4H3v1zm0 3h3V7H3v1z"
              fill="currentColor"
            ></path>
          </svg>
          Accessibility{" "}
        </summary>
        <ul>
          <li>
            <input
              type="checkbox"
              id="arialabel"
              name="set-arialabel"
              className="switch-input"
              onChange={() =>
                ShowArialabelOptions((arialabelOptions) => !arialabelOptions)
              }
              defaultChecked={false}
              aria-checked={false}
              aria-labelledby="target-arialabel"
            />
            <label
              htmlFor="arialabel"
              id="target-arialabel"
              className="switch-label"
            >
              <code>aria-label</code>
            </label>
            {arialabelOptions && (
              <input
                type="text"
                id="text-arialabel"
                onChange={(event) => SetArialabel(event.target.value)}
                value={arialabel}
              />
            )}
            <p dangerouslySetInnerHTML={addNote(notes.ariaLabel)} />

            <input
              type="checkbox"
              id="tabindex"
              name="set-tabindex"
              className="switch-input"
              onChange={() =>
                ShowTabindexOptions((tabindexOptions) => !tabindexOptions)
              }
              defaultChecked={false}
              aria-checked={false}
              aria-labelledby="target-tabindex"
            />
            <label
              htmlFor="tabindex"
              id="target-tabindex"
              className="switch-label"
            >
              <code>tabindex</code>
            </label>
            {tabindexOptions && (
              <input
                type="text"
                id="tabindex"
                onChange={(event) => SetTabindex(event.target.value)}
                value={tabindex}
              />
            )}
            <p dangerouslySetInnerHTML={addNote(notes.tabindex)} />
            <input
              type="checkbox"
              id="accesskey"
              name="set-accesskey"
              className="switch-input"
              onChange={() =>
                ShowAccesskeyOptions((accesskeyOptions) => !accesskeyOptions)
              }
              defaultChecked={false}
              aria-checked={false}
              aria-labelledby="target-accesskey"
            />
            <label
              htmlFor="accesskey"
              id="target-accesskey"
              className="switch-label"
            >
              <code>accesskey</code>
            </label>
            {accesskeyOptions && (
              <input
                type="text"
                id="text-accesskey"
                onChange={(event) => SetAccesskey(event.target.value)}
                value={accesskey}
              />
            )}
            <p dangerouslySetInnerHTML={addNote(notes.accesskey)} />
          </li>
        </ul>
      </details>
    </>
  );
}

export default A11y;
