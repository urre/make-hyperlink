import React from "react";
import Darkmode from "./Darkmode";
export const Header = ({ appName }) => (
  <header className="header">
    <nav>
      <a href="/">
        <h1>{appName}</h1>
      </a>
    </nav>
    <div>
      <Darkmode />
    </div>
  </header>
);
