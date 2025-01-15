import React from "react"

export const Header = ({ appName, toggleSidebar }) => (
  <header>
    <nav>
      <a href="/">
        <h1>{appName}</h1>
      </a>
    </nav>
    <span>
      by <a href="https://x.com/urre">Urban Sandén</a>
    </span>
  </header>
)
