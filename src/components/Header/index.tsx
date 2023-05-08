/* eslint-disable new-cap */
import React, { useEffect, useState } from "react"
import Link from "next/link"

import { HeaderStyles } from "./HeaderStyles"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <HeaderStyles id="navbar">
      <div className={`content ${showMenu ? "is-active" : ""}`}>
        <Link legacyBehavior href="/">
          <a className="logo">
            LOGO
          </a>
        </Link>
        <nav className="nav">
          <ul>
            <li>
              Home
            </li>
          </ul>
        </nav>
        <button
          className={`hamburger hamburger--elastic ${
            showMenu ? "is-active" : ""
          }`}
          type="button"
          onClick={() => {
            setShowMenu(!showMenu)
          }}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </div>
    </HeaderStyles>
  )
}

export default Navbar
