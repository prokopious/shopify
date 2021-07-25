import Layout from "@/components/Layout"
import SEO from "@/components/SEO"
import "../main.scss"
import "@/styles/globals.css"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>
      <body id="boody" className="has-navbar-fixed-top">
        <Layout>
          <SEO title="Hanover Farms" />
          <Component {...pageProps} />
        </Layout>
      </body>
      <style jsx>{`
        #boody {
          animation: fadeInAnimation ease 1s;
          animation-iteration-count: 1;
          animation-fill-mode: forwards;
        }
        @keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
     }
      `}</style>
    </>
  )
}

export default MyApp
