import React from "react"

export const Header = ({ appName }) => (
  <header>
    <nav>
      <a href="/">
        <h1>{appName}</h1>
      </a>
    </nav>
  </header>
)
