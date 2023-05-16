import React from "react"
import Image from "next/image"

import { ListPostStyles } from "./ListPostStyles"
import Link from "next/link"
import CategoryTag from "../CategoryTag"

const ListPost = ({ post }: any) => {
  return (
    <ListPostStyles>
      <Link href={`/article/${post.slug}`} className="post">
        <div className="post-image">
          <Image
            src={post.featured_media.url}
            alt={post.featured_media.alt}
            width={586}
            height={390}
            placeholder="blur"
            blurDataURL="/assets/blur-pink.jpg"
          />
        </div>
        <div className="post-content">
          <div className="post-categories">
            {post.categories.map((category: any) => (
              <CategoryTag
                key={category.id}
                name={category.name}
                color={category.main_color}
                slug={category.slug}
              />
            ))}
          </div>
          <h3
            className="post-title h6"
            dangerouslySetInnerHTML={{
              __html: post.title.rendered,
            }}
          ></h3>
          <div
            className="post-excerpt text s"
            dangerouslySetInnerHTML={{
              __html: post.excerpt.rendered,
            }}
          ></div>
        </div>
      </Link>
    </ListPostStyles>
  )
}

export default ListPost
