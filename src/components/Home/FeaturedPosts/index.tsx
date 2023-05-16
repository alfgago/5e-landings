import React from "react"
import Image from "next/image"
import { FeaturedPostsStyles } from "./FeaturedPostsStyles"
import CategoryTag from "@/components/CategoryTag"
import Link from "next/link"

const FeaturedPosts = ({ posts }: any) => {
  const highlightedPost = posts[0]
  const remainingPosts = posts.slice(1)
  const groupedPosts = []
  while (remainingPosts.length > 0) {
    groupedPosts.push(remainingPosts.splice(0, 2))
  }

  return (
    <FeaturedPostsStyles>
      <div className="content">
        <Link
          href={`/article/${highlightedPost.slug}`}
          className="post highlighted"
        >
          <div className="post-image">
            <Image
              src={highlightedPost.featured_media.url}
              alt={highlightedPost.featured_media.alt}
              width={900}
              height={675}
              placeholder="blur"
              blurDataURL="/assets/blur-pink.jpg"
            />
          </div>
          <div className="post-content">
            <div className="post-categories">
              {highlightedPost.categories.map((category: any) => (
                <CategoryTag
                  key={highlightedPost.id + "-" + category.slug}
                  name={category.name}
                  color={category.main_color}
                  slug={category.slug}
                />
              ))}
            </div>
            <h3
              className="post-title h3"
              dangerouslySetInnerHTML={{
                __html: highlightedPost.title.rendered,
              }}
            ></h3>
            <div
              className="post-excerpt  text s"
              dangerouslySetInnerHTML={{
                __html: highlightedPost.excerpt.rendered,
              }}
            ></div>
          </div>
        </Link>
        {groupedPosts.map((group, index) => (
          <div className={"posts-column col-" + index} key={`column-${index}`}>
            {group.map((post: any) => (
              <Link
                href={`/article/${post.slug}`}
                key={`post-${post.id}`}
                className="post"
              >
                <div className="post-image">
                  <Image
                    src={post.featured_media.url}
                    alt={post.featured_media.alt}
                    width={430}
                    height={285}
                    placeholder="blur"
                    blurDataURL="/assets/blur-pink.jpg"
                  />
                </div>
                <div className="post-content">
                  <div className="post-categories">
                    {post.categories.map((category: any) => (
                      <CategoryTag
                        key={post.id + "-" + category.slug}
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
                    className="post-excerpt  text s"
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt.rendered,
                    }}
                  ></div>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </FeaturedPostsStyles>
  )
}

export default FeaturedPosts
