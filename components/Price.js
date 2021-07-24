function Price({currency, num, numSize }) {
  return (
    <>
     <div id="pri"> {currency}<span className={numSize}>{num}</span></div>
    </>
  )
}

export default Price
