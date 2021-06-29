import { useState } from "react"
import { useCartContext, useAddToCartContext } from "@/context/Store"

function ProductForm({ title, handle, variants, mainImg }) {
  const [quantity, setQuantity] = useState(1)
  const [variant, setVariant] = useState(variants[0])
  const addToCart = useAddToCartContext()
  const cart = useCartContext()

  let item;
  item = cart[0].find(item => item.productTitle === `${title}`)

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
        variantQuantity: 1,
      })
    }
  }

  async function handleRemoveOne() {
    const varId = variant.node.id

    if (item === undefined || item.variantQuantity === 0) {
      alert("You have 0 units of this item in your cart.")
    } else {
      addToCart({
        productTitle: title,
        productHandle: handle,
        productImage: mainImg,
        variantId: varId,
        variantPrice: variant.node.price,
        variantTitle: variant.node.title,
        variantQuantity: -1,
      })
    }
  }

  return (
    <>
      <div className="butt-box">
        <button className="butt" onClick={handleAddOne}>
          +
        </button>
        <button className="butt" onClick={handleRemoveOne}>
          -
        </button>
      </div>
    </>
  )
}

export default ProductForm
