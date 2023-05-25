import Head from "next/head"
import axios from "axios"
import parse from "html-react-parser"

import CategoryPosts from "@/components/Home/CategoryPosts"
import FeaturedPosts from "@/components/Home/FeaturedPosts"
import { HomeStyles } from "@/components/Home/HomeStyles"
import KeepLearning from "@/components/Home/KeepLearning"
import { cleanYoast } from "@/utils/cleanYoast"

const Index = ({ page, yoast }: any) => {
  return (
    <>
      <Head>{parse(yoast)}</Head>
      <HomeStyles>
        <FeaturedPosts posts={page.featured_posts} />
        <KeepLearning />
        <CategoryPosts
          title="College Mental Health"
          categorySlug="college_mental_health"
          posts={page.college_mental_health}
        />
        <CategoryPosts
          title="Teaching & Learning"
          categorySlug="teaching_learning"
          posts={page.teaching_learning}
        />
        <CategoryPosts
          title="Equity & Access"
          categorySlug="equity_access"
          posts={page.equity_access}
        />
        <CategoryPosts
          title="Human Flourishing"
          categorySlug="human_flourishing"
          posts={page.human_flourishing}
        />
        <CategoryPosts
          title="Perspectives"
          categorySlug="perspectives"
          posts={page.perspectives}
        />
      </HomeStyles>
    </>
  )
}

export const getStaticProps = async () => {
  const wpUrl =
    process.env.NEXT_PUBLIC_WORDPRESS_URL ??
    "https://dev-learningwell-wp.pantheonsite.io"
  const domain = process.env.DOMAIN ?? "learningwell.org"
  const res = await axios.get(`${domain}/api/home`)
  const page = res.data

  const yoast = cleanYoast(page.yoast, wpUrl, domain)

  return {
    props: {
      page,
      yoast,
    },
    revalidate: 10,
  }
}

export default Index
