import axios from "axios"
import Head from "next/head"
import parse from "html-react-parser"
import { cleanYoast } from "@/utils/cleanYoast"
import KeepLearning from "@/components/Home/KeepLearning"
import FeaturedPosts from "@/components/Home/FeaturedPosts"
import { HomeStyles } from "@/components/Home/HomeStyles"
import CategoryPosts from "@/components/Home/CategoryPosts"

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
    process.env.WORDPRESS_URL ?? "https://dev-learningwell-wp.pantheonsite.io"
  const domain = process.env.DOMAIN ?? "http://localhost:3000"
  const res = await axios.get(`${domain}/api/home`)
  const page = res.data

  const yoast = cleanYoast(page.yoast, wpUrl, domain)

  return {
    props: {
      page,
      yoast,
    },
    revalidate: 30,
  }
}

export default Index
