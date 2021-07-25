import { useState, useEffect } from "react"
import { useUpdateCartQuantityContext } from "@/context/Store"
import Link from "next/link"
import { getCartSubTotal } from "@/utils/helpers"
import CheckOutButton from "@/components/CheckOutButton"
import { useCartContext } from "@/context/Store"


function CartTable() {
  const updateCartQuantity = useUpdateCartQuantityContext()
  const [cartItems, setCartItems] = useState([])
  const [subtotal, setSubtotal] = useState(0)
  const [cart, checkoutUrl] = useCartContext()

  useEffect(() => {
    setCartItems(cart)
    setSubtotal(getCartSubTotal(cart))
  }, [cart])

  function updateItem(id, quantity) {
    updateCartQuantity(id, quantity)
  }
  
  const x = JSON.stringify(cartItems)

if (x !== `[]`) {
  return (
   <div className="display"> <div className="min-h-80 max-w-2xl my-4 sm:my-8 mx-auto w-full">
      <div className="mx-auto">
        <h2 id="kart">YOUR CART</h2>
        <div>
          <div id="grid">
            <div>Product</div>
            <div>Quantity</div>

            <div>Remove</div>
          </div>
        </div>
        <div>
          {cartItems.map(item => (
            <div className="grid2" key={item.variantId}>
              <div>
                <Link passHref href={`/products/${item.productHandle}`}>
                  <a>{item.productTitle}</a>
                </Link>
              </div>
              <div className="inp">
                <input
                  type="number"
                  inputMode="numeric"
                  id="variant-quantity"
                  name="variant-quantity"
                  min="1"
                  step="1"
                  value={item.variantQuantity}
                  onChange={e => updateItem(item.variantId, e.target.value)}
                  className="inp2"
                />
              </div>

              <div>
                <button
                  aria-label="delete-item"
                  className="bt"
                  onClick={() => updateItem(item.variantId, 0)}
                >
                x
                </button>
              </div>
            </div>
          ))}
          {subtotal === 0 ? null : (
            <div className="grid3">
              <div className="su">Subtotal:</div>
              <div></div>
              <div className="end"><b>${subtotal}</b></div>
            </div>
          )}
        </div>
        <div id="but"><CheckOutButton webUrl={checkoutUrl} /></div>
      </div>
      <style jsx>{`
    
.su {
  font-weight: 900;
}
        .inp2 {
          width: 60px;
          border: 1px solid silver;
 
          border-radius: 3px;
        }

        #kart {
          font-size: 17px;
          padding-bottom: 30px;
          text-align: center;
          font-weight: 900;
          margin-top: 0;
          padding-top: 0;
        }
        .bt {
          padding: 3px;
          color: red;
          font-weight: 900;
        }
        .inp {
          padding-top: 5px;
        }
        #grid {
          display: grid;
          grid-template-columns: 1fr 1fr 70px;
          margin-bottom: 20px;
          padding-bottom: 5px;
          border-bottom: 1px solid silver;
        }
#but {
  margin-top: 20px;

width: 100px;
font-weight: 900;
justify-content: center;
}
        .grid2 {
          display: grid;
          grid-template-columns: 1fr 1fr 70px;
        }
        .grid3 {
          display: grid;
          grid-template-columns: 1fr 1fr 70px;
          margin-top: 10px;
        }

        .end {
          width: 40px;
        }

      
        @media only screen and (max-width: 640px) {
     
        }
      `}</style>
    </div></div>
  )} else {
    return (
      <div id="centered2"><img src="/images/empty6.png"/></div>
    )
  }
}

export default CartTable
