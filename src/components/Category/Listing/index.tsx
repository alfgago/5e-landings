/* eslint-disable new-cap */
import React from "react"

import { ListingStyles } from "./ListingStyles"
import ListPost from "@/components/ListPost"

const Listing = ({ posts, featured_posts }: any) => {
  const mergedArray = [...posts]
  if (featured_posts?.length) {
    const updatedFeaturedPosts = featured_posts.map((post: any) => ({
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
            <ListPost key={index} post={post} isFeatured={post.is_featured} />
          ))}
        </div>
      </div>
    </ListingStyles>
  )
}

export default Listing
