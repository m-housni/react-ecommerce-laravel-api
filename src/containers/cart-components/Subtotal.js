import React from 'react'

function Subtotal({subtotal}) {
  return (
    <div className="ui container right aligned" style={{fontWeight:"bold", fontSize:"1.2rem"}}>
        ${parseFloat(subtotal).toFixed(2)}
    </div>
  )
}

export default Subtotal