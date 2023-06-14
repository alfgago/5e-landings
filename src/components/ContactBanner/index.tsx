/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react"

import { ContactBannerStyles } from "./ContactBannerStyles"
import ContactForm from "./ContactForm"

const ContactBanner = () => {
  const or = "(or just want to chat about what we could do)"
  const shout = "give us a shout"
  const costarica =
    "We're always down (in Costa Rica) to help bring your </br>project to the next level."
  const contactUsText = "Contact us"

  return (
    <ContactBannerStyles>
      <div className="content">
        <div className="shout">
          <span dangerouslySetInnerHTML={{ __html: or }} />
          <span> </span>
          <span className="h2">{shout}</span>
        </div>
        <div className="down">
          <span dangerouslySetInnerHTML={{ __html: costarica }} />
        </div>
        <h2 className="font-din red" id="contact-us">
          {contactUsText}
        </h2>
        <ContactForm />
      </div>
    </ContactBannerStyles>
  )
}

export default ContactBanner
