import Price from "@/components/Price"

function ProductInfo({ title, description, price }) {
  return (
    <div>
      <h2 id="ti">{title}</h2>
      {/* <p>
        {description}
      </p> */}
      <div>
        <Price currency="$" num={price} numSize="text-2xl" />
      </div>
      <style jsx>{`
        #ti {
          font-size: 25px;
        }
      `}</style>
    </div>
  )
}

export default ProductInfo
