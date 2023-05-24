/* eslint-disable new-cap */
import React, { useEffect, useState } from "react"
import Link from "next/link"
import axios from "axios"
import { useWindowSize } from "usehooks-ts"

import useScrollDirection from "@/utils/useScrollDirection"

import Socials from "../Socials"

import { HeaderStyles } from "./HeaderStyles"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [toggleTopics, setToggleTopics] = useState(false)
  const [menu, setMenu] = useState([])
  const { width } = useWindowSize()
  const isMobile = width < 1080
  const scrollDown = useScrollDirection()
  const [socialLinks, setSocialLinks] = useState([])

  async function fetchMenu() {
    try {
      const { data } = await axios.get("/api/menus")
      const mainMenu = data.find((menu: any) => menu.slug === "main") // Find the menu with slug "main"
      if (mainMenu) {
        setMenu(mainMenu.items) // Set the items of the main menu as the state variable
      }
    } catch (err: any) {
      console.log(err)
    }
  }

  async function fetchLinks() {
    try {
      const { data } = await axios.get("/api/footer")
      setSocialLinks(data.social_links)
    } catch (err: any) {
      console.log(err)
    }
  }

  // Fetch the data in the useEffect hook
  useEffect(() => {
    fetchMenu()
    fetchLinks()
  }, [])

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
            <span className="topics" onMouseEnter={() => setToggleTopics(true)}>
              Topics
            </span>
            <Socials links={socialLinks} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <HeaderStyles
      id="navbar"
      className={`monument m ${scrollDown ? "scrolling" : ""} ${
        toggleTopics ? "toggle-topics" : ""
      }`}
      onMouseLeave={() => setToggleTopics(false)}
    >
      {!isMobile && <TopMenu />}
      <div className={`content main-menu ${showMenu ? "is-active" : ""}`}>
        <Link href="/" className="logo">
          <img src="/assets/LearningWell.svg" />
        </Link>
        <nav className="nav">
          <ul>
            {menu.map((item: any) => (
              <li key={"main-menu-" + item.ID}>
                <Link href={getRelativeURL(item.url)}>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item.title,
                    }}
                  />
                </Link>
              </li>
            ))}
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

const getRelativeURL = (absoluteURL: string) => {
  const wpUrl =
    process.env.NEXT_PUBLIC_WORDPRESS_URL ??
    "https://dev-learningwell-wp.pantheonsite.io"
  return absoluteURL.replace(wpUrl, "")
}
