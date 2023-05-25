import Head from "next/head"
import axios from "axios"
import parse from "html-react-parser"

import Banner from "@/components/Category/Banner"
import { CategoryStyles } from "@/components/Category/CategoryStyles"
import Listing from "@/components/Category/Listing"
import { cleanYoast } from "@/utils/cleanYoast"

const Index = ({ page, posts, yoast }: any) => {
  return (
    <>
      <Head>{parse(yoast)}</Head>
      <CategoryStyles>
        <Banner category={page} posts={posts} />
        <Listing posts={posts} featuredPosts={page.featured_posts} />
      </CategoryStyles>
    </>
  )
}

export const getServerSideProps = async ({ params }: any) => {
  const { slug } = params
  const wpUrl =
    process.env.NEXT_PUBLIC_WORDPRESS_URL ??
    "https://dev-learningwell-wp.pantheonsite.io"
  const domain = process.env.NEXT_PUBLIC_DOMAIN ?? "https://learningwell.org"
  const res = await axios.get(`${domain}/api/categories?slug=${slug}`)

  const page = res.data

  const categoryId = page.id
  const postsRes = await axios.get(
    `${domain}/api/posts?categories=${categoryId}`
  )
  const posts = postsRes.data

  const yoast = cleanYoast(page.yoast, wpUrl, domain)
  return {
    props: {
      page,
      posts,
      yoast,
    },
  }
}

export default Index
