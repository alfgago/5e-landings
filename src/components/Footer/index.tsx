import Link from "next/link"

import { FooterStyles } from "./FooterStyles"
import { useEffect, useState } from "react"
import axios from "axios"
import Socials from "../Socials"

const Footer = () => {
  const [socialLinks, setSocialLinks] = useState([])
  const [publishedBy, setPublishedBy] = useState([])
  const [menu, setMenu] = useState([])

  async function fetchMenu() {
    try {
      const { data } = await axios.get("/api/menus")
      const footerMenu = data.find((menu: any) => menu.slug === "footer") // Find the menu with slug "footer"
      if (footerMenu) {
        setMenu(footerMenu.items) // Set the items of the main menu as the state variable
      }
    } catch (err: any) {
      console.log(err)
    }
  }

  async function fetchLinks() {
    try {
      const { data } = await axios.get("/api/footer")
      setSocialLinks(data.social_links)
      setPublishedBy(data.published_by)
    } catch (err: any) {
      console.log(err)
    }
  }

  // Fetch the data in the useEffect hook
  useEffect(() => {
    fetchMenu()
    fetchLinks()
  }, [])

  return (
    <FooterStyles>
      <section className="footer">
        <div className="content">
          <div className="flex monument m">
            <div className="col">
              <Link href="/" className="logo">
                <img src="/assets/LearningWell.svg" />
              </Link>
            </div>
            <ul className="col footer-menu">
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
            <div className="col published-by">
              <div>Published by</div>
              <div className="publishers">
                {publishedBy.map((item: any) => (
                  <a target="_blank" href={item.link} key={item.link}>
                    <img src={item.image.url} alt={item.image.title} />
                  </a>
                ))}
              </div>
            </div>
            <div className="col social-links">
              <Socials links={socialLinks} />
            </div>
          </div>
          <div className="bottom monument s">
            <div className="flex">
              <div className="col bottom-menu">
                <span>© 2023 LearningWell</span>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </div>
              <div className="col siteby">
                Site by{" "}
                <a target="_blank" href="https://decimalstudios.com">
                  Decimal
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FooterStyles>
  )
}
export default Footer

const getRelativeURL = (absoluteURL: string) => {
  const wpUrl =
    process.env.NEXT_PUBLIC_WORDPRESS_URL ??
    "https://dev-learningwell-wp.pantheonsite.io"
  return absoluteURL.replace(wpUrl, "")
}
