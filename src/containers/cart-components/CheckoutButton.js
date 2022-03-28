import React from 'react'
import { Link } from 'react-router-dom'

function CheckoutButton({total, styles}) {
  return (

        <div>
          <h1>TOTAL</h1>
          <h2 style={{marginBottom:"20px"}}>${ parseFloat(total).toFixed(2) }</h2>
          <Link to="/checkout">
          <button className="ui right labeled icon button red">
              <i className="right arrow icon"></i>
              Checkout
          </button>
          </Link>
          <Link to="/">
          <button className="ui right labeled icon button">
              <i className="right arrow icon"></i>
              Continue Shopping
          </button>
          </Link>
        </div>  
    
  )
}

export default CheckoutButton