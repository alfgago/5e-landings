import Head from "next/head"

const Index = ({ page }: any) => {
  return (
    <>
      <Head>
        <title>Home - Learning Well</title>
      </Head>
      <section>
        <div className="content">Sample home page</div>
      </section>
      
    </>
  )
}

export const getStaticProps = async () => {

  return {
    props: {
      page: null,
    },
    revalidate: 30,
  }
}

export default Index
