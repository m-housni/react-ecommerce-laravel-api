import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { addToCart } from '../redux/actions/productActions'


const Product = ({product}) => {

    const dispatch = useDispatch()

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    return (
        <Link to={`/product/${product.id}/${product.title.replace(/\s/g, "_").replace(/\//g, '')}`} className="column">
        <div className="column">
            <div className="ui segment">
                <span className="ui left corner label" onClick={() => handleAddToCart(product)}><i className="cart icon"></i></span>
                <span className="ui right corner label"><i className="heart icon"></i></span>
                <div className="img-hover-zoom">
                    <img src={product.image} alt={product.title} style={{width:"100%"}} />
                </div>
                <div className="ui bottom attached label big text center aligned fluid-container">
                    <div style={{fontSize:".7rem"}}>{product.title.substring(0,24)} ...</div>
                    ${product.price}
                </div>
                
            </div>
        </div>
        </Link>
    )

} 

export default Product