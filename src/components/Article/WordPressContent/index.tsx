/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable new-cap */
import React from "react"
import Image from "next/image"

import MoreFromPosts from "@/components/Article/MoreFrom"
import ShareIcons from "@/components/Article/ShareIcons"
import CategoryTag from "@/components/CategoryTag"

import Block from "../Block"
import CarouselBlock from "../CarouselBlock"
import ImageText from "../ImageText"
import TwoImages from "../TwoImages"
import VideoBlock from "../Video"

import { WordPressContentStyles } from "./WordPressContentStyles"

const WordPressContent = ({ content }: any) => {
  const { highlight } = content.acf

  return (
    <WordPressContentStyles highlight={highlight}>
      <section className={`content text m ${highlight}`}>
        <div className="article-hero-image">
          <Image
            src={content.featured_media.link}
            alt={`${content.title.rendered} Image`}
            fill
            priority
          />
        </div>
        <div className="article-title">
          <div className="post-categories">
            {content.categories.map((category: any) => (
              <CategoryTag
                key={content.id + "-" + category.slug}
                name={category.name}
                color={category.main_color}
                slug={category.slug}
              />
            ))}
          </div>

          <h1
            className="h1"
            dangerouslySetInnerHTML={{
              __html: content.title.rendered,
            }}
          />

          <div
            className="post-excerpt text l"
            dangerouslySetInnerHTML={{
              __html: content.excerpt.rendered,
            }}
          />

          <span className="author text xs monument">
            By {content.author.name}
          </span>
        </div>
      </section>

      <ShareIcons article={content} />

      {content.blocks.map((block: any, index: number) => {
        if (block.blockName === "acf/lw-carousel") {
          return <CarouselBlock key={"block-" + index} block={block} />
        } else if (block.blockName === "acf/lw-twoimages") {
          return <TwoImages key={"block-" + index} block={block} />
        } else if (block.blockName === "acf/lw-imagetext") {
          return <ImageText key={"block-" + index} block={block} />
        } else if (block.blockName === "core/embed") {
          return <VideoBlock key={"block-" + index} block={block} />
        }
        return <Block key={"block-" + index} block={block} />
      })}

      <MoreFromPosts article={content} />
    </WordPressContentStyles>
  )
}

export default WordPressContent
