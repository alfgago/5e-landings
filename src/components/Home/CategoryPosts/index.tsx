import React from "react"
import { CategoryPostsStyles } from "./CategoryPostsStyles"
import Link from "next/link"
import ListPost from "@/components/ListPost"

const CategoryPosts = ({ title, posts, categorySlug }: any) => {
  return (
    <CategoryPostsStyles>
      <div className="content">
        <h2 className="h4">{title}</h2>
        <Link className="see-all monument m" href={"/category/" + categorySlug}>
          See All
        </Link>
        <div className="posts-row">
          {posts.map((post: any) => (
            <ListPost post={post} key={"cat-" + categorySlug + post.id} />
          ))}
        </div>
      </div>
    </CategoryPostsStyles>
  )
}

export default CategoryPosts
