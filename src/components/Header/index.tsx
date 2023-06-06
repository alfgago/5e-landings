/* eslint-disable new-cap */
import React, { useEffect, useState } from "react"
import Link from "next/link"
import axios from "axios"

import { HeaderStyles } from "./HeaderStyles"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [toggleTopics, setToggleTopics] = useState(false)
  const [menu, setMenu] = useState([])

  /*
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
*/

  // Fetch the data in the useEffect hook
  useEffect(() => {
    // fetchMenu()
  }, [])

  return (
    <HeaderStyles id="navbar">
      <div className="content">
        <Link href="/" className="logo">
          <img src="/assets/LearningWell.svg" />
        </Link>
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
