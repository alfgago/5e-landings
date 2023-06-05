import React from "react"
import Image from "next/image"

import { TwoImagesStyles } from "./TwoImagesStyles"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const TwoImages = ({ block }: any) => {
  return (
    <TwoImagesStyles className="content">
      <div className="image1">
        <Image
          src={block.attrs.data.image_1.url[0]}
          alt="image 1"
          width={900}
          height={595}
        />
        <span>{block.attrs.data.image_1.caption}</span>
      </div>
      <div className="image2">
        <Image
          src={block.attrs.data.image_2.url[0]}
          alt="image 2"
          width={900}
          height={595}
        />
        <span>{block.attrs.data.image_2.caption}</span>
      </div>
    </TwoImagesStyles>
  )
}

export default TwoImages
