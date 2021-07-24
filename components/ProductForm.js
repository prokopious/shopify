import { useState } from "react"
import { useCartContext, useAddToCartContext } from "@/context/Store"

function ProductForm({ title, handle, variants, setVariantPrice, mainImg }) {
  const [quantity, setQuantity] = useState(1)
  const [variantId, setVariantId] = useState(variants[0].node.id)
  const [variant, setVariant] = useState(variants[0])
  const isLoading = useCartContext()[2]
  const addToCart = useAddToCartContext()

  const atcBtnStyle = isLoading
    ? `pt-3 pb-2 bg-palette-primary text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex 
                      justify-center items-baseline  hover:bg-palette-dark opacity-25 cursor-none`
    : `pt-3 pb-2 bg-palette-primary text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex 
                      justify-center items-baseline  hover:bg-palette-dark`

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
      <div className="w-full">
        <div className="flex justify-start space-x-2 w-full">
          <div className="flex flex-col items-start space-y-1 flex-grow-0">
            <label className="text-gray-500 text-base">Qty.</label>
            <input
              type="number"
              inputMode="numeric"
              id="quantity"
              name="quantity"
              min="1"
              step="1"
              value={quantity}
              onChange={e => updateQuantity(e.target.value)}
              className="form-input"
              id="inp"
            />
          </div>
        </div>
        <div className="buttonn">
        <button
          onClick={handleAddToCart}
        >
          Add To Cart
        </button></div>
      </div>
    </>
  )
}

export default ProductForm
