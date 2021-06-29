import { useState, useEffect } from "react"
import { useUpdateCartQuantityContext } from "@/context/Store"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import Price from "@/components/Price"
import { getCartSubTotal } from "@/utils/helpers"

function BuggyTable({ cart }) {
  const updateCartQuantity = useUpdateCartQuantityContext()
  const [cartItems, setCartItems] = useState([])
  const [subtotal, setSubtotal] = useState(0)

  useEffect(() => {
    setCartItems(cart)
    setSubtotal(getCartSubTotal(cart))
  }, [cart])

  function updateItem(id, quantity) {
    updateCartQuantity(id, quantity)
  }

  return (
  
      <div>
        {cartItems.map(item => (
          <div
            key={item.variantId}
            className="buggy-table"
          >
            <div>
              {/* <img
                src={item.productImage.originalSrc}
                alt={item.productImage.altText}
                height={64}
                width={64}
                className={`hidden sm:inline-flex`}
              /> */}
              <Link passHref href={`/products/${item.productHandle}`}>
                <a className="pt-1 hover:text-palette-dark">
                  {item.productTitle}, {item.variantTitle}
                </a>
              </Link>
            </div>
            <div>
              <input
                type="number"
                inputMode="numeric"
                id="variant-quantity"
                name="variant-quantity"
                min="1"
                step="1"
                value={item.variantQuantity}
                onChange={e => updateItem(item.variantId, e.target.value)}
              
              />
            </div>
            <div>
              <Price currency="$" num={item.variantPrice} numSize="text-lg" />
            </div>
            <div>
              <button
                aria-label="delete-item"
                className=""
                onClick={() => updateItem(item.variantId, 0)}
              >
                <FontAwesomeIcon
                  icon={faTimes}
                  className="w-8 h-8 text-palette-primary border border-palette-primary p-1 hover:bg-palette-lighter"
                />
              </button>
            </div>
          </div>
        ))}
        {subtotal === 0 ? null : (
          <div className="text-center">
            <div className="font-primary text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4">
              Subtotal
            </div>
            <div className="font-primary text-lg text-palette-primary font-medium px-4 sm:px-6 py-4">
              <Price currency="$" num={subtotal} numSize="text-xl" />
            </div>
            <div></div>
          </div>
        )}
      </div>
 
  )
}

export default BuggyTable
