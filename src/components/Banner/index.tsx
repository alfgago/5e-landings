import React from "react"

import MirrorBackground from "../MirrorsBackground"

import { BannerStyles } from "./BannerStyles"

const Banner = ({ title, copy }: any) => {
  const contactUsText = "contact us"

  const scrollToContact = (event: any) => {
    event.preventDefault()
    const contactSection = document.getElementById("contact-us")
    if (contactSection) {
      const topOffset = contactSection.getBoundingClientRect().top
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      })
    }
  }

  return (
    <BannerStyles>
      <MirrorBackground />
      <div className="content">
        <div className="flex">
          <h1>{title}</h1>
          <div className="copy" dangerouslySetInnerHTML={{ __html: copy }} />
          <a
            href="#contact-us"
            className="contact-text"
            onClick={scrollToContact}
          >
            {contactUsText}
          </a>
        </div>
      </div>
    </BannerStyles>
  )
}

export default Banner
