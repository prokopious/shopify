import ProductImage from "@/components/ProductImage"
import ProductDetails from "@/components/ProductDetails"

function ProductSection({ productData }) {
  return (
    <>
      {" "}
      <div id="felx">
        {" "}
        <div></div>
        <div></div>{" "}
        <div id="stuff">
          <div>
            {" "}
            <ProductImage images={productData.images.edges} />
          </div>

          <div>
            {" "}
            <ProductDetails productData={productData} />
          </div>
        </div>
        <div></div>
        <div></div>
        <style jsx>{`
          #felx {
            display: grid;

            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
          }

          #stuff {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          @media only screen and (max-width: 1000px) {
            #felx {
              display: grid;
              grid-template-rows: 1fr;
            }
            #stuff {
            display: grid;
            grid-template-columns: 1fr;
          }
          }
        `}</style>
      </div>
    </>
  )
}

export default ProductSection
