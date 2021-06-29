import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import ProductDetails from '@/components/Details2'
import Price from "@/components/Price"
import ProductSection from '@/components/Section2'
import { useCartContext } from '@/context/Store'

function ProductCard({ product }) {
  const handle = product.node.handle
  const [quantity, setQuantity] = useState(1)
  const title = product.node.title
  const variant = product.node.variant
  const price = product.node.variants.edges[0].node.price
  const imageNode = product.node.images.edges[0].node
  const cart = useCartContext()

  
  var item = cart[0].find(item => item.productTitle === `${title}`);
  console.log(item)



  async function handleAddOne() {
    const varId = variant.node.id
    // update store context
    if (quantity) {
      addToCart({
        productTitle: title,
        productHandle: handle,
        productImage: mainImg,
        variantId: varId,
        variantPrice: variant.node.price,
        variantTitle: variant.node.title,
        variantQuantity: 90,
      })
    }
  }





  return (
    <div className="card"><ProductSection productData={product} />
      <Link href={`/products/${handle}`} passHref>
        <a>
          <div className="h-72 border-b-2 border-palette-lighter relative">
            <Image
              src={imageNode.originalSrc}
              alt={imageNode.altText}
              layout="fill"
              className="transform duration-500 ease-in-out hover:scale-110"
            />
          </div>

          <button onClick={handleAddOne}>Add One</button>

          <div className="info">
            <div>{title}</div>

            <div>
              <Price currency="$" num={price} numSize="text-lg" />
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default ProductCard
