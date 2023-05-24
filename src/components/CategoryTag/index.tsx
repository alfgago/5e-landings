/* eslint-disable new-cap */
import React from "react"
import Link from "next/link"
import { decode } from "html-entities"
import { ReactSVG } from "react-svg"

import { CategoryTagStyles } from "./CategoryTagStyles"

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
