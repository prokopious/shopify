import { CartProvider } from '@/context/Store'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

function Layout({ children }) {
  
  return (
    <CartProvider>
      <div className="flex flex-col justify-between min-h-screen">
    
        <Navbar />

        <main>
          {children}
        </main>

      
      </div>
    </CartProvider>
  )
}

export default Layout
