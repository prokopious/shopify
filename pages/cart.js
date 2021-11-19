import CartTable from "@/components/CartTable"
import { useCartContext } from "@/context/Store"

function CartPage() {
  const pageTitle = `Cart | ${process.env.siteTitle}`
  const [cart, checkoutUrl] = useCartContext()

  return (
    <>
      <CartTable cart={cart} />
    </>
  )
}

export default CartPage
