import { useState } from "react"
import BackToProductButton from "@/components/BackToProductButton"
import ProductInfo from "@/components/ProductInfo"
import ProductForm from "@/components/ProductForm"

function ProductDetails({ productData }) {
  const [variantPrice, setVariantPrice] = useState(
    productData.variants.edges[0].node.price
  )

  return (
    <div id="det">
      <div>
        <BackToProductButton />
      </div>
      <div>
        <ProductInfo
          title={productData.title}
          description={productData.description}
          price={variantPrice}
        />
      </div>
      <div id="for">
        <ProductForm
          title={productData.title}
          handle={productData.handle}
          variants={productData.variants.edges}
          mainImg={productData.images.edges[0].node}
          setVariantPrice={setVariantPrice}
        />
      </div>

      <style jsx>{`
        #det {
          display: grid;
          width: 300px;
          height: 300px;
          text-align: center;
          text-align: center;
          align-items: center;
          justify-content: center;
        }

        #for {
          padding-top: 0px;
        }
      `}</style>
    </div>
  )
}

export default ProductDetails
