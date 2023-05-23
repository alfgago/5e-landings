import axios from "axios"
import { cleanYoast } from "@/utils/cleanYoast"
import { CategoryStyles } from "@/components/Category/CategoryStyles"
import Head from "next/head"
import parse from "html-react-parser"

const Index = ({ page, posts, yoast }: any) => {
  console.log(page)
  console.log(posts)
  return (
    <>
      <Head>{parse(yoast)}</Head>
      <CategoryStyles></CategoryStyles>
    </>
  )
}

export const getServerSideProps = async ({ params }: any) => {
  const { slug } = params
  const wpUrl =
    process.env.NEXT_PUBLIC_WORDPRESS_URL ??
    "https://dev-learningwell-wp.pantheonsite.io"
  const domain = process.env.DOMAIN ?? "http://localhost:3000"
  const res = await axios.get(`${domain}/api/categories?slug=${slug}`)
  const page = res.data[0]

  const categoryId = page.id
  const postsRes = await axios.get(
    `${domain}/api/posts?categories=${categoryId}`
  )
  const posts = postsRes.data

  const yoast = cleanYoast(page.yoast_head, wpUrl, domain)
  return {
    props: {
      page,
      posts,
      yoast,
    },
  }
}

export default Index
