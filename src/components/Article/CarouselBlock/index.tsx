/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable new-cap */
import React, { useEffect } from "react"
import Image from "next/image"
import { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import { CarouselBlockStyles } from "./CarouselBlockStyles"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const CarouselBlock = ({ block }: any) => {
  return (
    <CarouselBlockStyles>
      <Swiper
        slidesPerView={1.3}
        centeredSlides={true}
        spaceBetween={20}
        loop={true}
        navigation={true}
        breakpoints={{
          767: {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 2,
            spaceBetween: 42,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {block.attrs.data.gallery.map(
          ({ url, alt, caption }: any, index: number) => (
            <SwiperSlide key={"slide-" + index}>
              <Image src={url[0]} alt={alt} priority width={896} height={593} />
              <span className="caption monument">{caption}</span>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </CarouselBlockStyles>
  )
}

export default CarouselBlock
