/* eslint-disable new-cap */
import React from "react"

import ListPost from "@/components/ListPost"

import { ListingStyles } from "./ListingStyles"

const Listing = ({ posts, featuredPosts }: any) => {
  const mergedArray = [...posts]
  if (featuredPosts?.length) {
    const updatedFeaturedPosts = featuredPosts.map((post: any) => ({
      ...post,
      is_featured: true,
    }))
    mergedArray.splice(3, 0, updatedFeaturedPosts[0])
    mergedArray.splice(7, 0, updatedFeaturedPosts[1])
  }

  return (
    <ListingStyles>
      <div className="content">
        <div className="posts-list">
          {mergedArray.map((post, index) => (
            <ListPost
              key={index}
              post={post}
              isFeatured={post.is_featured}
              index={index}
            />
          ))}
        </div>
      </div>
    </ListingStyles>
  )
}

export default Listing
