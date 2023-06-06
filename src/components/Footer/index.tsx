import { useEffect, useState } from "react"
import Link from "next/link"
import axios from "axios"

import { FooterStyles } from "./FooterStyles"

const Footer = () => {
  return (
    <FooterStyles>
      <section className="footer">
        <div className="content">FOOTER</div>
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
