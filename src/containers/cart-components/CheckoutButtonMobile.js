import React from 'react'
import config from '../../config.json'

function CheckoutButtonMobile({total,styles}) {
  return (
    <div className="ui one column grid mobile tablet only" style={styles}> 
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

export default CheckoutButtonMobile