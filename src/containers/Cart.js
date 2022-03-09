import React, {useState} from 'react'
import { useSelector, useDispatch } from "react-redux"
import SelectQuantity from './cart-components/SelectQuantity'
import CheckoutButton from './cart-components/CheckoutButton'
import Subtotal from './cart-components/Subtotal'
import config from '../config.json'


const Cart = () => {

    const cart = useSelector(state => state.cart)

    return (
        <div className="ui container">
            <CheckoutButton total={cart.total} />
            {/* COMPUTER */}
            {
                cart.products.map((product, idx) => {
                    return (
                        <div className="ui four column grid computer only" key={product.id} style={{border:`1px solid ${config.theme.PRIMARY_COLOR}`, marginBottom:"5px"}}>
                            <div className="column">
                                <div className="ui segment">
                                    <span className="ui left corner label"><i className="trash icon"></i></span>
                                    <img src={product.image} alt={product.title} style={{height:"128px"}}/>
                                </div>
                            </div>
                            <div  className="column">
                                {product.title}
                                <br/>
                                ${product.price}
                            </div>
                            <div  className="column">
                                <SelectQuantity product={product} />
                            </div>
                            <div  className="column">
                                <Subtotal subtotal={product.qty * product.price} />
                            </div>
                        </div>
                    )
                })
            }
            {/* MOBILE TABLET */}
           {
                cart.products.map(product => {
                    return (
                        <div className="ui three column grid mobile tablet only" key={product.id}>
                            <div className="column ">
                                <img src={product.image} alt={product.title} style={{width:"32px"}} />
                                <br />
                                {product.title}
                                <br />
                                ${product.price}
                            </div>
                            <div  className="column">
                                <SelectQuantity product={product} />
                            </div>
                            <div  className="column">
                                <Subtotal subtotal={product.qty * product.price} />
                            </div>
                        </div>
                    )
                })
            }
            <CheckoutButton total={cart.total} />
        </div>
    )
}

export default Cart