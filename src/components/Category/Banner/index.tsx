/* eslint-disable new-cap */
import React from "react"
import { decode } from "html-entities"
import { ReactSVG } from "react-svg"

import ListPost from "@/components/ListPost"

import GradientBackground from "../../GradientBackground"

import { BannerStyles } from "./BannerStyles"

const Banner = ({ category, posts }: any) => {
  const { name, description, main_color, color_2, color_3, hero_post } =
    category
  const heroPost = hero_post.id ? hero_post : posts[0]

  return (
    <BannerStyles>
      <div className="title">
        <GradientBackground
          color1={main_color}
          color2={color_2}
          color3={color_3}
        />
        <div className="content">
          <h1 className="h1">{decode(name)}</h1>
          <div
            className="text l"
            dangerouslySetInnerHTML={{
              __html: decode(description),
            }}
          />
        </div>
      </div>
      <div className="hero-post">
        <div className="content">
          {heroPost && <ListPost post={heroPost} isFeatured={true} />}
        </div>
      </div>
    </BannerStyles>
  )
}

export default Banner
