import { BrowserRouter as Router, Link } from "react-router-dom";
import $ from 'jquery'
import React, { useState } from 'react';

const Product = ({product}) => {

    return (
        <Link to={`/product/${product.id}/${product.title.replace(/\s/g, "_").replace(/\//g, '')}`} className="column">
        
            <div className="ui segment">
                <img src={product.image} alt={product.title} style={{width:"100%"}} />
                {/* <div className="ui top attached label bg-brown">{product.category}</div> */}
                <div className="ui bottom attached label big text center aligned fluid-container">${product.price}</div>
            </div>

        </Link>
    )

} 

export default Product