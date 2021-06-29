import { useState } from 'react'
import BackToProductButton from '@/components/BackToProductButton'
import ProductInfo from '@/components/ProductInfo'
import ProductForm from '@/components/Form2'

function ProductDetails({ productData }) {
  const [variantPrice, setVariantPrice] = useState(productData.node.variants.edges[0].node.price)
console.log(productData.node.variants.edges[0].node.price)
  return (
    <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
      <ProductForm 
        title={productData.node.title}
        handle={productData.node.handle}
        variants={productData.node.variants.edges} 
        mainImg={productData.node.images.edges[0].node}
        setVariantPrice={setVariantPrice}
      />
    </div>
  )
}

export default ProductDetails