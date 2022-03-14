import React from 'react'
import config from '../../config.json'

function CheckoutButton({total, styles}) {
  return (

        <div>
          <h1>TOTAL</h1>
          <h2 style={{marginBottom:"20px"}}>${ parseFloat(total).toFixed(2) }</h2>
          <button class="ui right labeled icon button red">
              <i class="right arrow icon"></i>
              Checkout
          </button>
          <button class="ui right labeled icon button">
              <i class="right arrow icon"></i>
              Continue Shopping
          </button>
        </div>  
    
  )
}

export default CheckoutButton