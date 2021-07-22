export default function MarqueeStuff({ products }) {

  return (
    <div  className="marq">
      {products.map((product, index) => {
        const imageNode = product.node.images.edges[0].node.originalSrc
        return <div className="pic"><img src={imageNode} /></div>
      })}
    </div>
  )
}
