import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

function BackToProductButton() {
  return (
    <>
      <Link href="/" passHref>
        <a aria-label="back-to-products">
          <span id="arrow2"> &larr;</span>
          Back To All Products
        </a>
      </Link>{" "}
      <style jsx>{`
        #arrow2 {
          padding-right: 5px;
        }
      `}</style>
    </>
  )
}

export default BackToProductButton
