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
    <div id="pic">
      <div></div>
      <div id="pic2">
        <img src={mainImg.originalSrc} alt={mainImg.altText} />
      </div>
      <div></div>
      <style jsx>{`
          #pic {

          }

     
          
          `}</style>
    </div>
  )
}

export default ProductImage
