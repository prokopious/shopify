import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

function BackToProductButton() {
  return (
    <Link href="/" passHref>
      <a aria-label="back-to-products" className="bbt">
        <span id="arrow">  &larr;</span>
        Back To All Products
      </a>
    </Link>
  )
}

export default BackToProductButton
