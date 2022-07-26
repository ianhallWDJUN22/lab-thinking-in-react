

function ProductRow(props){
    
    const { name, price, inStock } = props

    return(
    <div className="ProductRow">
        <tr>
          <td style={{
              color: inStock ? 'black' : 'red'
          }}>
            {name}
          </td>
          <td>
            {price}
         </td>
        </tr>
    </div>
    )
}



export default ProductRow