import CartTable from "@/components/CartTable"
import CheckOutButton from "@/components/CheckOutButton"
import BackToProductButton from "@/components/BackToProductButton"
import { useCartContext } from "@/context/Store"

function CartPage() {
  const pageTitle = `Cart | ${process.env.siteTitle}`
  const [cart, checkoutUrl] = useCartContext()

  return (
    <div className="display">
   
      <CartTable cart={cart} />
      <div className="max-w-sm mx-auto space-y-4 px-2">
  
      </div>
    </div>
  )
}

export default CartPage
