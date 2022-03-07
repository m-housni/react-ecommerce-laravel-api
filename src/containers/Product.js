import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";


const Product = ({product}) => {

    return (
        <Link to={`/product/${product.id}/${product.title.replace(/\s/g, "_").replace(/\//g, '')}`} className="column">
        <div className="column">
            <div className="ui segment">
                <a className="ui left corner label" onClick={() => alert()}><i className="cart icon"></i></a>
                <a className="ui right corner label"><i className="heart icon"></i></a>
                <div className="img-hover-zoom">
                    <img src={product.image} alt={product.title} style={{width:"100%"}} />
                </div>
                <div className="ui bottom attached label big text center aligned fluid-container">
                    <div style={{fontSize:".7rem"}}>{product.description.substring(0,24)} ...</div>
                    ${product.price}
                </div>
                
            </div>
        </div>
        </Link>
    )

} 

export default Product