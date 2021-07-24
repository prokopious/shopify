import { useState, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"

function ProductImage({ images }) {
  const [mainImg, setMainImg] = useState(images[0].node)
  const ref = useRef()

  function scroll(scrollOffset) {
    ref.current.scrollLeft += scrollOffset
  }

  return (
    <div className="plant">
      <div className="relative h-96">
        <img
          src={mainImg.originalSrc}
          alt={mainImg.altText}
          layout="fill"
          className="transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
      <div></div>
    </div>
  )
}

export default ProductImage
