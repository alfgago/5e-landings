/* eslint-disable new-cap */
import React, { useEffect, useState } from "react"
import { useWindowSize } from "usehooks-ts"

import { HeaderStyles } from "./HeaderStyles"
import Link from "next/link"
import axios from "axios"
import Socials from "../Socials"

const TopMenu = () => {
  return (
    <div className="top">
      <div className="content">
        <div className="pages-nav">
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="social-nav">
          <Socials />
        </div>
      </div>
    </div>
  )
}

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [categories, setCategories] = useState([])
  const { width } = useWindowSize()
  const isMobile = width < 1080

  // Fetch the data in the useEffect hook
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get("/api/categories")
        setCategories(data)
      } catch (err: any) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  return (
    <HeaderStyles id="navbar" className="monument m">
      {!isMobile && <TopMenu />}
      <div className={`content main-menu ${showMenu ? "is-active" : ""}`}>
        <Link legacyBehavior href="/">
          <a className="logo">
            <img src="/assets/LearningWell.svg" />
          </a>
        </Link>
        <nav className="nav">
          <ul>
            {categories &&
              categories.map((category: any) => {
                if (category.name === "Uncategorized") {
                  return null // Skip rendering the "Uncategorized" category
                }

                return (
                  <li key={category.id}>
                    <Link href={`/category/${category.slug}`}>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: category.name,
                        }}
                      />
                    </Link>
                  </li>
                )
              })}
          </ul>
          {isMobile && <TopMenu />}
        </nav>
        <button
          className={`hamburger hamburger--squeeze ${
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

export default Header
