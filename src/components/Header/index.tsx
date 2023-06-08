import React from "react"

import { HeaderStyles } from "./HeaderStyles"

const Header = () => {
  return (
    <HeaderStyles id="navbar">
      <div className="content flex">
        <a href="#" className="logo">
          <img src="/assets/5e-logo.svg" alt="5e Labs Logo SVG" />
        </a>
        <img
          className="alternative-logos"
          src="/assets/5e-logoset.svg"
          alt="5e Labs alternative-logos SVG"
        />
      </div>
    </HeaderStyles>
  )
}

export default Header
