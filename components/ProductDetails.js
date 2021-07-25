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
      <div></div>
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
      <div></div>
      <style jsx>{`
        #det {
        
          display: grid;
          grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
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
