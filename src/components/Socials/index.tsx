/* eslint-disable new-cap */
import React from "react"
import { ReactSVG } from "react-svg"

import { SocialsStyles } from "./SocialsStyles"

const Socials = ({ links }: any) => {
  return (
    <SocialsStyles>
      {links.map((item: any) => {
        if (item.icon.startsWith("http")) {
          // Render image if the icon is a URL
          return (
            <a href={item.link} key={item.icon} target="_blank">
              <img src={item.icon} alt={item.icon} />
            </a>
          )
        }
        // Render SVG icon if the icon is not a URL
        return (
          <a href={item.link} key={item.icon} target="_blank">
            <ReactSVG src={`/assets/${item.icon}.svg`} />
          </a>
        )
      })}
    </SocialsStyles>
  )
}

export default Socials
