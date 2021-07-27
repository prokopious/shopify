import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

function CheckOutButton({ webUrl }) {
  return (
    <div id="">
      <a href={webUrl} aria-label="checkout-products">
        Checkout
        <span id="arrow">&rarr;</span>
      </a>
      <style jsx>{`
        #arrow {
          padding-left: 5px;
          font-size: 20px;
        }

        @media only screen and (max-width: 700px) {

          #arrow {
          padding-left: 5px;
          font-size: 14px;
        }



        }
      `}</style>
    </div>
  )
}

export default CheckOutButton
