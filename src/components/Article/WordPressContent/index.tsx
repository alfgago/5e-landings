/* eslint-disable new-cap */
import React from "react"
import Image from "next/image"

import CategoryTag from "@/components/CategoryTag"

import { WordPressContentStyles } from "./WordPressContentStyles"

const WordPressContent = ({ content }: any) => {
  const { highlight } = content.acf
  console.log("content", content)

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

      <section
        className="content"
        dangerouslySetInnerHTML={{
          __html: content.content.rendered,
        }}
      />

      <section className="more-from">
        <div className="background" />
        <div className="content">
          <h2 className="title bradford">More from LearningWell</h2>
        </div>
      </section>
    </WordPressContentStyles>
  )
}

export default WordPressContent
