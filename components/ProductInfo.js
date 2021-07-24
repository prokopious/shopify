import Price from '@/components/Price'

function ProductInfo({ title, description, price }) {
  return (
    <div className=" font-primary">
      <h2 className="leading-relaxed font-extrabold text-3xl py-2 sm:py-4">
        {title}
      </h2>
      <p className="font-medium text-lg">
        {description}
      </p>
      <div className="text-xl font-medium py-4 px-1">
        <Price
          currency="$"
          num={price}
          numSize="text-2xl"
        />
      </div>
    </div>
  )
}

export default ProductInfo
