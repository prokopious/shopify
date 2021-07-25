import { CartProvider } from "@/context/Store"
import Navbar from "@/components/Navbar"

function Layout({ children }) {
  return (
    <CartProvider>
      <Navbar />
      <main>{children}</main>
    </CartProvider>
  )
}

export default Layout
