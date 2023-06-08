import React from "react"

import MirrorBackground from "../MirrorsBackground"

import { BannerStyles } from "./BannerStyles"

const Banner = ({ title, copy }: any) => {
  const contactUsText = "contact us"
  return (
    <BannerStyles>
      <MirrorBackground />
      <div className="content">
        <div className="flex">
          <h1>{title}</h1>
          <div className="copy" dangerouslySetInnerHTML={{ __html: copy }} />
          <a href="#contact-us" className="contact-text">
            {contactUsText}
          </a>
        </div>
      </div>
    </BannerStyles>
  )
}

export default Banner
