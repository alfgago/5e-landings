/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable new-cap */
import React, { useEffect, useState } from "react"
import Image from "next/image"
import axios from "axios"

import CategoryTag from "@/components/CategoryTag"

import { MoreFromStyles } from "./MoreFromStyles"

const MoreFromPosts = ({ article }: any) => {
  const [moreFromPosts, setMoreFromPosts] = useState([]) as any

  useEffect(() => {
    getMoreFrom()
  }, [])

  const getMoreFrom = async () => {
    const domain = process.env.NEXT_PUBLIC_DOMAIN ?? "https://learningwell.org"
    const { data } = await axios.get(
      `${domain}/api/posts?categories=${article.categories[0].id}&&exclude=${article.id}&orderby=date&order=desc`
    )
    setMoreFromPosts(data)
  }

  return (
    <MoreFromStyles>
      <div className={`background ${article.categories[0].slug}`} />
      <div className="content more-from-content">
        <h2 className="title bradford">More from LearningWell</h2>
        <div className="posts">
          {moreFromPosts.slice(0, 2).map((data: any, index: Number) => (
            <div key={`post-${index}`} className="article">
              <div className="image">
                <Image
                  src={data.featured_media.link}
                  alt={`${data.title.rendered} Image`}
                  fill
                />
              </div>

              <div className="post-categories">
                {data.categories.map((category: any) => (
                  <CategoryTag
                    key={data.id + "-" + category.slug}
                    name={category.name}
                    color={category.main_color}
                    slug={category.slug}
                  />
                ))}
              </div>

              <h2
                className="bradford"
                dangerouslySetInnerHTML={{ __html: data.title.rendered }}
              />

              <div
                className="post-excerpt bradford"
                dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }}
              />
            </div>
          ))}
        </div>
      </div>
    </MoreFromStyles>
  )
}

export default MoreFromPosts
