import SEO from "@/components/SEO"
import PageTitle from "@/components/PageTitle"
import CartTable from "@/components/CartTable"
import CheckOutButton from "@/components/CheckOutButton"
import BackToProductButton from "@/components/BackToProductButton"
import { useCartContext } from "@/context/Store"
import Navbar from "@/components/Navbar"

function CartPage() {
  const pageTitle = `Cart | ${process.env.siteTitle}`
  const [cart, checkoutUrl] = useCartContext()

  return (
    <div className="display">
      <div id="centered">Your Cart</div>
      <CartTable cart={cart} />
      <div className="max-w-sm mx-auto space-y-4 px-2">
        <CheckOutButton webUrl={checkoutUrl} />
        <BackToProductButton />
      </div>
    </div>
  )
}

export default CartPage
