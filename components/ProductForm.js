import { useState } from "react"
import { useCartContext, useAddToCartContext } from "@/context/Store"

function ProductForm({ title, handle, variants, setVariantPrice, mainImg }) {
  const [quantity, setQuantity] = useState(1)
  const [variantId, setVariantId] = useState(variants[0].node.id)
  const [variant, setVariant] = useState(variants[0])
  const isLoading = useCartContext()[2]
  const addToCart = useAddToCartContext()


  function handleSizeChange(e) {
    setVariantId(e)
    // send back size change
    const selectedVariant = variants.filter(v => v.node.id === e).pop()
    setVariantPrice(selectedVariant.node.price)

    // update variant
    setVariant(selectedVariant)
  }

  async function handleAddToCart() {
    const varId = variant.node.id
    // update store context
    if (quantity !== "") {
      addToCart({
        productTitle: title,
        productHandle: handle,
        productImage: mainImg,
        variantId: varId,
        variantPrice: variant.node.price,
        variantTitle: variant.node.title,
        variantQuantity: quantity,
      })
    }
  }

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

  function updateQuantity(e) {
    if (e === "") {
      setQuantity("")
    } else {
      setQuantity(Math.floor(e))
    }
  }

  return (
    <>
      <div></div>
      <div id="box">
        <div>
          <div>
         
            <input
              type="number"
              inputMode="numeric"
              id="quantity"
              name="quantity"
              min="1"
              step="1"
              value={quantity}
              onChange={e => updateQuantity(e.target.value)}
              id="inpu"
        
            />
          </div>
        </div>
        <div className="buttonn">
        <button
          onClick={handleAddToCart}
        >
          Add
        </button></div>
      </div>
      <style jsx>{`
      .buttonn {
    border: transparent;


margin-left: 5px;
border-radius: 3px;
 

    font-weight: 900;
    text-transform: uppercase;
    text-align: center;
    font-size: 16px;

}

        #inpu {
          border-radius: 3px;
  width: 70px;
          margin-right: 10px;
          box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.212);
     padding-left: 10px;
     
        }
        #box {
          display: grid;
          grid-template-columns: 70px 90px;
          grid-gap: 10px;
          

        }
        `}
      </style>
    </>
  )
}

export default ProductForm
