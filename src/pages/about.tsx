import Head from "next/head"
import axios from "axios"
import parse from "html-react-parser"

import { AboutStyles } from "@/components/About/AboutStyles"
import PageHeader from "@/components/PageHeader"
import { cleanYoast } from "@/utils/cleanYoast"

interface headerModel {
  title: string
  paragraph: string
}

const Index = ({ page, yoast }: any) => {
  const headerContent = {
    title: "About the Magazine",
    paragraph: `Positioned at the intersection of life and learning, LearningWell
                magazine is published by the Mary Christie Institute and the Coalition
                for Transformative Learning, organizations dedicated to examining how
                higher education experiences can lead to improved wellbeing both on
                campus and throughout one’s lifetime. Through news and research
                reporting, expert opinion, and storytelling, LearningWell provides
                readers with information, evidence, and inspiration to help young
                people live and learn well.`,
  } as headerModel

  return (
    <>
      <Head>{parse(yoast)}</Head>

      <AboutStyles>
        <PageHeader
          title={headerContent.title}
          paragraph={headerContent.paragraph}
          location="about"
        />
        <div
          className="content team-members-container"
          dangerouslySetInnerHTML={{ __html: page[0].content.rendered }}
        />
      </AboutStyles>
    </>
  )
}

export const getStaticProps = async () => {
  const wpUrl =
    process.env.NEXT_PUBLIC_WORDPRESS_URL ??
    "https://dev-learningwell-wp.pantheonsite.io"
  const domain = process.env.NEXT_PUBLIC_DOMAIN ?? "https://learningwell.org"

  const url = `${wpUrl}/wp-json/wp/v2/pages?slug=learningwell-about`
  const res = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
  })

  const page = res.data

  const yoast = cleanYoast(res.data[0].yoast_head, wpUrl, domain)

  return {
    props: {
      page,
      yoast,
    },
    revalidate: 10,
  }
}

export default Index
