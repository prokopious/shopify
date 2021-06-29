import ProductCard from "@/components/ProductCard"

function ProductListings({ products }) {
  return (
    <div className="grid">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  )
}

export default ProductListings
