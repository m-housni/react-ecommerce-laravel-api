import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { addToCart } from "../redux/actions/productActions"
import Product from './Product'

const Cart = () => {

    const cart = useSelector(state => state.cart)

    return (
        <div className="ui container">     
            {
                cart.products.map(product => {
                    return (
                        <div className="ui four column grid computer only" key={product.id}>
                            <div className="column ">
                                <img src={product.image} alt={product.title} style={{width:"100px"}} />
                            </div>
                            <div  className="column">
                                {product.title}
                            </div>
                            <div  className="column">
                                <div className="ui mini input">
                                    <input type="number" value={product.qty} style={{width:"100%"}} />    
                                </div>
                            </div>
                            <div  className="column">
                                ${product.qty * product.price}
                            </div>
                        </div>
                    )
                })
            }
            <div className="ui four column grid computer only">
                <div className="column"></div>  
                <div className="column"></div>    
                <div className="column">Total</div>    
                <div className="column">${cart.total}</div>    
            </div>
           {
                cart.products.map(product => {
                    return (
                        <div className="ui three column grid mobile tablet only" key={product.id}>
                            <div className="column ">
                                <img src={product.image} alt={product.title} style={{width:"32px"}} />
                                <br />
                                {product.title}
                            </div>
                            <div  className="column">
                                <div className="ui mini input">
                                    <input type="number" value={product.qty} style={{width:"100%"}} />    
                                </div>
                            </div>
                            <div  className="column">
                                ${product.qty * product.price}
                            </div>
                        </div>
                    )
                })

            }
            <div className="ui three column grid mobile tablet only"> 
                <div className="column"></div>    
                <div className="column">Total</div>    
                <div className="column">${cart.total}</div>    
            </div>
        </div>
    )
}

export default Cart