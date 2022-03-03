import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import $ from 'jquery'


const Product = ({product}) => {

    let [toggleInfo, setToggleInfo] = useState("hideInfo")

    return (
        <Link to={`/product/${product.id}/${product.title.replace(/\s/g, "_").replace(/\//g, '')}`} className="column">
        <div className="column" onMouseOver={() => setToggleInfo("showInfo")} onMouseOut={() => setToggleInfo("hideInfo")}>
            <div className="ui segment">
                <img src={product.image} alt={product.title} style={{width:"100%"}} />
                <div className={`ui top attached label bg-brown ${toggleInfo}`}>{product.description.substring(0,64)}...</div>
                <div className="ui bottom attached label big text center aligned fluid-container">
                    ${product.price}
                    <div style={{fontSize:".8rem"}}>{product.category}</div>
                </div>
                
            </div>
        </div>
        </Link>
    )

} 

export default Product