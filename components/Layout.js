import { CartProvider } from "@/context/Store"
import Navbar from "@/components/Navbar"

function Layout({ children }) {
  return (
    <CartProvider>
      <html className="has-navbar-fixed-top">
        <Navbar/>
        <main>{children}</main>
      </html>
    </CartProvider>
  )
}

export default Layout
