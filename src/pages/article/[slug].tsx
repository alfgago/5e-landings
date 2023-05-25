import Head from "next/head"
import axios from "axios"
import parse from "html-react-parser"

import { ArticleStyles } from "@/components/Article/ArticleStyles"
import WordPressContent from "@/components/Article/WordPressContent"
import { cleanYoast } from "@/utils/cleanYoast"

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
        />

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
  const domain = process.env.NEXT_PUBLIC_DOMAIN ?? "https://learningwell.org"
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
