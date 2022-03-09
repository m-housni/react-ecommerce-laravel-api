import React from 'react'
import config from '../../config.json'

function CheckoutButton({total}) {
  return (
    <div className="ui two column grid computer only" style={{border:`1px solid ${config.theme.PRIMARY_COLOR}`, marginBottom:"5px"}}> 
      <div className="column"><h1>TOTAL</h1></div>
      <div className="column">
        <div className="ui left labeled button" tabIndex="0">
          <a className="ui basic right pointing label">
              <span style={{fontSize:20}}>${ parseFloat(total).toFixed(2) }</span>
          </a>
          <div className={`ui button massive ${config.theme.PRIMARY_COLOR}`}>
              Checkout
          </div>
        </div>  
      </div>
    </div>
    
  )
}

export default CheckoutButton