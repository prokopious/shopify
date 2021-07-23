import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCartContext } from '@/context/Store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {

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
    <nav id="nav"  style={{backgroundImage: `url('https://www.linkpicture.com/q/wheat_3.jpg')`}} className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a href='/' className='navbar-item'>
          <img
            src='/farm.png'
            alt='Logo'
            // width='112'
            // height='28'
          /> <span id="han">Hanover Farms</span>
        </a>

        <a
          role='button'
          className={'navbar-burger burger'}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
      <div id='navbarBasicExample' className='navbar-menu'>
        <div className='navbar-end'>
          <div id="item" className='navbar-item'>
          <div id="kart">
          <Link
            href="/cart"
            passHref
          >
            <a className=" relative" aria-label="cart">
              <FontAwesomeIcon id="ikon" className="w-6 m-auto" icon={faShoppingCart} />
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
        </div>
      </div>
      <style jsx>{`
          #han {
              font-size: 20px;
              color: white;
              padding-left: 5px;
              padding-top: 5px;
          }
          
          #nav {
              padding: 20px;
          }

          .ikon {
           color: white;
          }

          #kart {
              padding-top: 10px;
          }

          #item {
              padding-right: 30px;
          }
          
          
          
          `}</style>
    </nav>
  )
}