import React from "react"
import Image from "next/image"
import Link from "next/link"

import CategoryTag from "../CategoryTag"

import { ListPostStyles } from "./ListPostStyles"

const ListPost = ({ post, isFeatured }: any) => {
  const width =
    post.featured_media.width ?? post.featured_media.media_details.width
  const height =
    post.featured_media.height ?? post.featured_media.media_details.height
  const src = post.featured_media.url ?? post.featured_media.source_url
  const alt = post.featured_media.alt ?? post.featured_media.caption?.rendered
  const responsiveHeightRatio = height / width

  return (
    <ListPostStyles className={isFeatured ? "article featured" : "article"}>
      <Link
        href={`/article/${post.slug}`}
        className="post"
        title={post.title.rendered}
      >
        <div className="post-image">
          {isFeatured ? (
            <Image
              src={src}
              alt={alt}
              width={900}
              height={900 * responsiveHeightRatio}
              placeholder="blur"
              blurDataURL="/assets/blur-pink.jpg"
            />
          ) : (
            <Image
              src={src}
              alt={alt}
              width={586}
              height={390}
              placeholder="blur"
              blurDataURL="/assets/blur-pink.jpg"
            />
          )}
        </div>
        <div className="post-content">
          <div className="post-categories">
            {post.categories.slice(0, 2).map((category: any) => (
              <CategoryTag
                key={category.id}
                name={category.name}
                color={category.main_color}
                slug={category.slug}
              />
            ))}
          </div>
          <h3
            className={`post-title ${isFeatured ? "h3" : "h6"}`}
            dangerouslySetInnerHTML={{
              __html: post.title.rendered,
            }}
          />
          <div
            className="post-excerpt text s"
            dangerouslySetInnerHTML={{
              __html: post.excerpt.rendered,
            }}
          />
        </div>
      </Link>
    </ListPostStyles>
  )
}

export default ListPost
