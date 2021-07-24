import { CartProvider } from "@/context/Store"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

function Layout({ children }) {
  return (
    <CartProvider>
      <Navbar />
      <body className="has-navbar-fixed-top">
        <main>{children}</main>
      </body>
    </CartProvider>
  )
}

export default Layout
