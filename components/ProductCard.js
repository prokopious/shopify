import Link from "next/link"
import Price from "@/components/Price"
import ProductSection from "@/components/Section2"


function ProductCard({ product }) {
  const handle = product.node.handle

  const title = product.node.title

  const price = product.node.variants.edges[0].node.price
  const imageNode = product.node.images.edges[0].node

  return (
    <div className="card">

      <Link href={`/products/${handle}`} passHref>
        <a>
          <div className="border-b-0 border-palette-lighter relative">
            <img id="x"
              src={imageNode.originalSrc}
              alt={imageNode.altText}
              layout="fill"
              className="transform duration-500 ease-in-out"
            />
          </div>
          </a>
      </Link>
      <div id="thegrid">
          <div className="info">
            <div>{title}</div>

            <div>
              <Price currency="$" num={price} numSize="text-lg" />
            </div>
          </div>

          <div className="test">  <ProductSection productData={product} /></div>

          </div>
    </div>
  )
}

export default ProductCard
