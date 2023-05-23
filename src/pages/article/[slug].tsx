import { useEffect, useState } from "react"
import axios from "axios"
import Head from "next/head"
import parse from "html-react-parser"
import { SingleArticleStyles } from "@/components/SingleArticle/SingleArticleStyles"
import { cleanYoast } from "@/utils/cleanYoast"

const Article = ({ article, yoast }: any) => {
  console.log(article)
  console.log(yoast)
  return (
    <>
      <Head>{parse(yoast)}</Head>
      <SingleArticleStyles>
        <div className="content">
          <h1>{article.title.rendered}</h1>
        </div>
      </SingleArticleStyles>
    </>
  )
}

export const getServerSideProps = async ({ query }: any) => {
  const wpUrl =
    process.env.NEXT_PUBLIC_WORDPRESS_URL ??
    "https://dev-learningwell-wp.pantheonsite.io"
  const domain = process.env.DOMAIN ?? "http://localhost:3000"

  const res = await axios.get(`${domain}/api/posts?slug=${query.slug}`)

  const article = res.data[0]
  const yoast = cleanYoast(article.yoast_head, wpUrl, domain)

  return {
    props: {
      article,
      yoast,
    },
  }
}

export default Article
