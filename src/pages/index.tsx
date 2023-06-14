import Head from "next/head"
import parse from "html-react-parser"

import Banner from "@/components/Banner"
import Button from "@/components/Button"
import ContactBanner from "@/components/ContactBanner"
import { HomeStyles } from "@/components/Home/HomeStyles"
import LPContent from "@/components/LPContent"
import VideoScrollBanner from "@/components/VideoScrollBanner"

const Index = () => {
  const siteTitle = "Pixel Perfect Web Sites - 5e Labs"
  const bannerTitle = "Hey there"
  const bannerCopy = `We're a team of software </br>
    engineers who love nothing </br>
    more than creating <strong><span>pixel perfect</span></strong> </br>
    sites and apps.`

  const lpText1 = `We're talking about the </br>kind of stuff that makes </br>designers faint and users </br>
  say <strong><span>"wow, this is so easy&nbsp;</br>&nbsp; to use!".</span></strong>`
  const lpText2 = `and strive to deliver top-notch solutions for our </br>
  clients. We're not just about code either - we love </br>
  getting to know our clients and figuring out how to turn </br>
  their ideas into reality.`
  const textSide = `web sites and apps, pixel perfect`

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HomeStyles>
        <Banner title={bannerTitle} copy={bannerCopy} />
        <LPContent text1={lpText1} text2={lpText2} textSide={textSide} />
        <VideoScrollBanner />
        <ContactBanner />
      </HomeStyles>
    </>
  )
}

export default Index
