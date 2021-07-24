function Subtotal({currency, num, numSize }) {
    return (
      <>
       <div id="sub"> {currency}<span className={numSize}>{num}</span></div>
      </>
    )
  }
  
  export default Subtotal