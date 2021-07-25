import ProductImage from '@/components/ProductImage'
import ProductDetails from '@/components/ProductDetails'

function ProductSection({ productData }) {
  return (
    <div id="felx">
      <ProductImage images={productData.images.edges} />
      <ProductDetails productData={productData} />
      <style jsx>{`
        #felx {
        margin-left: 20%;
        margin-right: 20%;
    
          display: grid;
          grid-template-columns: 1fr 1fr;
        
        }
        @media only screen and (max-width: 1000px) {
          #felx {
        margin-left: 15%;
        margin-right: 15%;
          display: grid;
          grid-template-columns: 1fr;
        }


        }
        
        `}</style>
    </div>
  )
}

export default ProductSection
