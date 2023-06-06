import Head from "next/head"
import axios from "axios"
import parse from "html-react-parser"

import { AboutStyles } from "@/components/About/AboutStyles"
import PageHeader from "@/components/PageHeader"
import { PolicyStyles } from "@/components/Policy/PolicyStyles"
import { cleanYoast } from "@/utils/cleanYoast"

const Index = ({ page, yoast }: any) => {
  return (
    <>
      <Head>{parse(yoast)}</Head>

      <PolicyStyles>
        <div className="content">
          <h1 dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
          <div
            className="policy-text text m"
            dangerouslySetInnerHTML={{ __html: page.content.rendered }}
          />
        </div>
      </PolicyStyles>
    </>
  )
}

export const getStaticProps = async () => {
  const wpUrl =
    process.env.NEXT_PUBLIC_WORDPRESS_URL ??
    "https://dev-learningwell-wp.pantheonsite.io"
  const domain = process.env.NEXT_PUBLIC_DOMAIN ?? "https://learningwell.org"

  const url = `${wpUrl}/wp-json/wp/v2/pages?slug=privacy-policy`
  const res = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
  })

  const page = res.data[0]

  const yoast = cleanYoast(res.data[0].yoast_head, wpUrl, domain)

  return {
    props: {
      page,
      yoast,
    },
    revalidate: 30,
  }
}

export default Index
