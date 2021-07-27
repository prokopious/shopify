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
 
      <div>
        <img src={mainImg.originalSrc} alt={mainImg.altText} />
      </div>

      <style jsx>{`
          #pic {
width: 300px;
height: 300px;
          }

     
          
          `}</style>
    </div>
  )
}

export default ProductImage
