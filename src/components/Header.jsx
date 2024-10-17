import React from "react"

export const Header = ({ appName }) => (
  <header>
    <nav>
      <a href="/">
        <h1>{appName}</h1>
      </a>
    </nav>
    <span>
      A small project by <a href="https://x.com/urre">Urban Sandén</a>
    </span>
  </header>
)
