import React from "react"
import Image from "next/image"

import { ImageTextStyles } from "./ImageTextStyles"

const ImageText = ({ block }: any) => {
  const { attrs } = block
  const { data } = attrs
  return (
    <ImageTextStyles className="content">
      <div className="image">
        <Image
          src={data.image_1.url[0]}
          alt={data.image_1.alt ? data.image_1.alt : "image"}
          width={552}
          height={600}
        />
        <span className="monument">{data.image_1.caption}</span>
      </div>
      <div className="text">
        <p>{data.text}</p>
      </div>
    </ImageTextStyles>
  )
}

export default ImageText
