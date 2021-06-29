import ProductCard from '@/components/ProductCard'

function ProductListings({ products }) {
  return (
    <div><h3 className="hthree">All Products:</h3><div className="grid">
      {
        products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))
      }
    </div></div>
  )
}

export default ProductListings
