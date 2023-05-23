import axios from "axios"
import { cleanYoast } from "@/utils/cleanYoast"
import { ArticleStyles } from "@/components/Article/ArticleStyles"
import Head from "next/head"
import parse from "html-react-parser"
import WordPressContent from "@/components/Article/WordPressContent"

const Index = ({ post, yoast }: any) => {
  console.log(post)
  return (
    <>
      <Head>{parse(yoast)}</Head>
      <ArticleStyles>
        <h1
          dangerouslySetInnerHTML={{
            __html: post.title.rendered,
          }}
        ></h1>

        <WordPressContent content={post.content.rendered} />
      </ArticleStyles>
    </>
  )
}

export const getServerSideProps = async ({ params }: any) => {
  const { slug } = params
  const wpUrl =
    process.env.NEXT_PUBLIC_WORDPRESS_URL ??
    "https://dev-learningwell-wp.pantheonsite.io"
  const domain = process.env.DOMAIN ?? "http://localhost:3000"
  const res = await axios.get(`${domain}/api/posts?slug=${slug}`)
  const post = res.data[0]

  const yoast = cleanYoast(post.yoast_head, wpUrl, domain)
  return {
    props: {
      post,
      yoast,
    },
  }
}

export default Index
