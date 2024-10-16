import React from "react";

const ChevronIcon = ({
  size = 55,
  color = "currentColor",
  direction = "down",
}) => {
  const rotation = direction === "up" ? "0deg" : "180deg";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="chevron"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width={size}
      height={size}
      direction={direction}
      style={{ transform: `rotate(${rotation})` }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
};
export default ChevronIcon;
