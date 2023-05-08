
import Layout from "@/components/Layout"
import Meta from "@/components/Meta"

import "../styles/fonts/stylesheet.css"
import "../styles/hamburger.css"
import "../styles/globals.scss"

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <>
      <Meta />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
