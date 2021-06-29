import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCartContext } from '@/context/Store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Nav() {
  const cart = useCartContext()[0]
  const [cartItems, setCartItems] = useState(0)

  useEffect(() => {
    let numItems = 0
    cart.forEach(item => {
      numItems += item.variantQuantity
    })
    setCartItems(numItems)
  }, [cart])


  return (
    <header id="header" className="border-b border-palette-lighter sticky top-0 z-20 bg-black">
      <div className="flex items-center justify-between mx-auto max-w-6xl px-6 pb-2 pt-4 md:pt-6">
        <Link href="/" passHref>
          <a className=" cursor-pointer">
            <h1 className="flex no-underline">
              <img id="pad" height="75" width="75" alt="logo" className="h-8 w-8 mr-1 object-contain" src="/farm.png" />
              <span className="text-xl font-primary font-bold tracking-tight pt-1">
                Hanover Farms
              </span>
            </h1>
          </a>
        </Link>
        <div>
          <Link
            href="/cart"
            passHref
          >
            <a className=" relative" aria-label="cart">
              <FontAwesomeIcon className="w-6 m-auto" icon={faShoppingCart} />
              {
                cartItems === 0 ?
                  null
                  :
                  <div
                    className="absolute top-0 right-0 text-xs bg-yellow-300 text-gray-900 font-semibold rounded-full py-1 px-2 transform translate-x-10 -translate-y-3"
                  >
                    {cartItems}
                  </div>
              }
            </a>
          </Link>
        </div>
      </div>
    </header >
  )
}

export default Nav