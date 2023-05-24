/* eslint-disable new-cap */
import React from "react"
import { ReactSVG } from "react-svg"
import { decode } from "html-entities"

import { CategoryTagStyles } from "./CategoryTagStyles"
import Link from "next/link"

const CategoryTag = ({ name, slug, color }: any) => {
  const textColor = color == "#ffcf24" ? "#000" : "#fff"

  return (
    <CategoryTagStyles text={textColor} background={color} className="tag">
      <Link href={"/category/" + slug}>
        <span>{decode(name)}</span>
      </Link>
    </CategoryTagStyles>
  )
}

export default CategoryTag
