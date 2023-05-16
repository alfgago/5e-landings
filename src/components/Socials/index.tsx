/* eslint-disable new-cap */
import React from "react"
import { ReactSVG } from 'react-svg'

import { SocialsStyles } from "./SocialsStyles"
import Link from "next/link"

const Socials = () => {

  return (
    <SocialsStyles>
      <Link href="/">
        <ReactSVG src="/assets/facebook.svg"/>
      </Link>
      <Link href="/">
        <ReactSVG src="/assets/twitter.svg"/>
      </Link>
      <Link href="/">
        <ReactSVG src="/assets/linkedin.svg"/>
      </Link>
    </SocialsStyles>
  )
}

export default Socials
