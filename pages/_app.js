import Layout from "@/components/Layout"
import SEO from "@/components/SEO"
import "../main.scss"
import "@/styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <SEO title="Hanover Farms" />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
