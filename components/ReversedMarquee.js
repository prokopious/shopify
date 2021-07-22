export default function MarqueeStuff({ products }) {
const reversed = products.reverse();
    return (
      <div  className="marq">
        {reversed.map((product, index) => {
          const imageNode = product.node.images.edges[0].node.originalSrc
          return <div className="pic"><img src={imageNode} /></div>
        })}
      </div>
    )
  }
  