import Head from "next/head"
import axios from "axios"
import parse from "html-react-parser"

import ContactForm from "@/components/Contact/ContactoForm"
import { ContactStyles } from "@/components/Contact/ContactStyles"
import PageHeader from "@/components/PageHeader"
import { cleanYoast } from "@/utils/cleanYoast"

interface headerModel {
  title: string
  paragraph: string
}

const Index = ({ page, yoast }: any) => {
  const headerContent = {
    title: `We’d Love to Hear from You`,
    paragraph: `The LeaningWell team is always looking to expand and energize its coverage.
                We encourage you to reach out to us at any time with article tips, submissions, feedback, 
                or just to say hi...`,
  } as headerModel

  return (
    <>
      <Head>{parse(yoast)}</Head>

      <ContactStyles>
        <PageHeader
          title={headerContent.title}
          paragraph={headerContent.paragraph}
          location="contact"
        />
        <ContactForm />
      </ContactStyles>
    </>
  )
}

export const getStaticProps = async () => {
  const wpUrl =
    process.env.NEXT_PUBLIC_WORDPRESS_URL ??
    "https://dev-learningwell-wp.pantheonsite.io"
  const domain = process.env.NEXT_PUBLIC_DOMAIN ?? "https://learningwell.org"

  const url = `${wpUrl}/wp-json/wp/v2/pages?slug=learningwell-contact`
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
