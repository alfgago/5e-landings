/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable new-cap */
import React from "react"
import Image from "next/image"

import MoreFromPosts from "@/components/Article/MoreFrom"
import ShareIcons from "@/components/Article/ShareIcons"
import CategoryTag from "@/components/CategoryTag"

import { BlockStyles } from "./BlockStyles"

const Block = ({ block }: any) => {
  return (
    <BlockStyles
      className="content wp-content"
      dangerouslySetInnerHTML={{
        __html: block.innerHTML,
      }}
    />
  )
}

export default Block
