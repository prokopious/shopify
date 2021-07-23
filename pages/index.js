import StoreHeading from "@/components/StoreHeading"
import ProductListings from "@/components/ProductListings"
import MarqueeStuff from "@/components/MarqueeStuff"
import { getAllProductsInCollection } from "@/lib/shopify"
import Marquee from "react-fast-marquee"
import ReversedMarquee from "@/components/ReversedMarquee"

function IndexPage({ products }) {
  return (
    <div className="display">
      <div id="centered">All Products</div>
      <ProductListings products={products} />
      <Marquee>
        <MarqueeStuff products={products} />
      </Marquee>
    </div>
  )
}

export async function getStaticProps() {
  const products = await getAllProductsInCollection()

  return {
    props: {
      products,
    },
  }
}

export default IndexPage
