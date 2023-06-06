import Head from "next/head"
import axios from "axios"
import parse from "html-react-parser"

import { SolicitudesStyles } from "@/components/Solicitudes/SolicitudesStyles"
import { cleanYoast } from "@/utils/cleanYoast"

const Index = ({ page, yoast }: any) => {
  console.log(page)
  return (
    <>
      <Head>{parse(yoast)}</Head>
      <SolicitudesStyles>EJEMPLO HOME</SolicitudesStyles>
    </>
  )
}

export const getStaticProps = async () => {
  const wpUrl =
    process.env.NEXT_PUBLIC_WORDPRESS_URL ?? "https://consisa.5e.cr/"
  const domain = process.env.NEXT_PUBLIC_DOMAIN ?? "http://consisa.com"

  const url = `${wpUrl}/wp-json/wp/v2/pages?slug=solicitudes`
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
