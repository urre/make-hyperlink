import React, { useState } from "react";

import { notes } from "../constants";

function Analytics(props) {
  const [options, showOptions] = useState(false);
  const [source, setSource] = useState("google");
  const [medium, setMedium] = useState("cpc");
  const [campaign, setCampaign] = useState("spring_sale");
  const [term, setTerm] = useState("cat+food");
  const [content, setContent] = useState("Campaign Content");

  const updateParams = () => {
    props.useAttribute("utm_source", `utm_source=${source}`);
    props.useAttribute("utm_medium", `utm_medium=${medium}`);
    props.useAttribute("utm_campaign", `utm_campaign=${campaign}`);
    props.useAttribute("utm_term", `utm_term=${term}`);
    props.useAttribute("utm_content", `utm_content=${encodeURI(content)}`);
    props.appendUTM();
  };

  const toggleOptions = (event) => {
    if (options) {
      showOptions(false);
      props.useAttribute("utm", false);
    } else {
      showOptions(true);
      props.useAttribute("utm", true);
      updateParams();
    }
  };

  const handleChange = (event) => {
    let { value, id } = event.target;

    id === "utm_source" && setSource(value);
    id === "utm_medium" && setMedium(value);
    id === "utm_campaign" && setCampaign(value);
    id === "utm_term" && setTerm(value);
    id === "utm_content" && setContent(value);

    value.length
      ? props.useAttribute(`${id}`, `${id}=${encodeURI(value)}`)
      : props.useAttribute(`${id}`, "");
    props.appendUTM();
  };

  return (
    <>
      <input
        type="checkbox"
        id="analytics"
        name="set-analytics"
        className="switch-input"
        onChange={(event) => {
          toggleOptions();
        }}
        aria-checked={options}
        aria-labelledby="analytics-label"
      />

      <label
        htmlFor="analytics"
        id="analytics-label"
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
            d="M.5 14.5H0v.5h.5v-.5zm1.5-3v.5h1v-.5H2zm13-9V2h-1v.5h1zM0 0v14.5h1V0H0zm.5 15H15v-1H.5v1zM3 11.5c0-1.454.244-2.88.707-3.922C4.177 6.52 4.798 6 5.5 6V5c-1.298 0-2.178.98-2.707 2.172C2.256 8.38 2 9.954 2 11.5h1zM5.5 6c.32 0 .642.158 1.005.492.366.338.713.798 1.095 1.308.368.49.77 1.03 1.217 1.442.45.416 1.004.758 1.683.758V9c-.32 0-.642-.158-1.005-.492C9.13 8.17 8.782 7.71 8.4 7.2c-.368-.49-.77-1.03-1.217-1.442C6.733 5.342 6.179 5 5.5 5v1zm5 4c1.223 0 2.363-.763 3.173-2.045C14.485 6.668 15 4.819 15 2.5h-1c0 2.18-.485 3.832-1.173 4.92C12.137 8.514 11.277 9 10.5 9v1z"
            fill="currentColor"
          ></path>
        </svg>
        Google Analytics UTM
      </label>
      <p>{notes.analyticsUTM}</p>

      {options && (
        <>
          <input
            type="text"
            id="utm_source"
            onChange={(event) => handleChange(event)}
            placeholder="Campaign Source"
            value={source}
          />
          <p>{notes.analyticsUTMCampaignSource}</p>
          <input
            type="text"
            id="utm_medium"
            onChange={(event) => handleChange(event)}
            placeholder="Campaign Medium"
            value={medium}
            onInput={(e) => setMedium(e.target.value)}
          />
          <p>{notes.analyticsUTMCampaignMedium}</p>
          <input
            type="text"
            id="utm_campaign"
            onChange={(event) => handleChange(event)}
            placeholder="Campaign Name"
            value={campaign}
            onInput={(e) => setCampaign(e.target.value)}
          />
          <p>{notes.analyticsUTMCampaignName}</p>
          <input
            type="text"
            id="utm_term"
            onChange={(event) => handleChange(event)}
            placeholder="Campaign Term"
            value={term}
            onInput={(e) => setTerm(e.target.value)}
          />
          <p>{notes.analyticsUTMCampaignTerm}</p>
          <input
            type="text"
            id="utm_content"
            onChange={(event) => handleChange(event)}
            placeholder="Campaign Content"
            value={content}
            onInput={(e) => setContent(encodeURIComponent(e.target.value))}
          />
          <p>{notes.analyticsUTMCampaignContent}</p>
        </>
      )}
    </>
  );
}

export default Analytics;
