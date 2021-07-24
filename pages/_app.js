import Layout from "@/components/Layout"
import SEO from "@/components/SEO"
import "../main.scss"
import "@/styles/globals.css"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
     <Head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
</Head>
      <Layout>
        <SEO title="Hanover Farms" />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
