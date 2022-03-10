import React, {useState} from 'react'
import { useSelector, useDispatch } from "react-redux"
import SelectQuantity from './cart-components/SelectQuantity'
import CheckoutButton from './cart-components/CheckoutButton'
import CheckoutButtonMobile from './cart-components/CheckoutButtonMobile'
import Subtotal from './cart-components/Subtotal'
import RemoveProduct from './cart-components/RemoveProduct'
import config from '../config.json'


const Cart = () => {

    const cart = useSelector(state => state.cart)
    const customStyle = {border:`5px solid ${config.theme.PRIMARY_COLOR}`, marginBottom:"5px", borderRadius:"5px"}

    return (
        <div className="ui container">
            <CheckoutButton total={cart.total} />
            {/* COMPUTER */}
            {
                cart.products.map((product, idx) => {
                    return (
                        <div className="ui four column grid computer only" key={product.id} style={customStyle}>
                            <div className="column">
                                <RemoveProduct product={product} />
                                <img src={product.image} alt={product.title} style={{height:"128px"}}/>
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
            <CheckoutButton total={cart.total} />

            {/* MOBILE TABLET */}
            <CheckoutButtonMobile total={cart.total} />
           {
                cart.products.map(product => {
                    return (
                        <div className="ui three column grid mobile tablet only" key={product.id} style={customStyle}>
                            <div className="column ">
                                <RemoveProduct product={product} />
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
            <CheckoutButtonMobile total={cart.total} />
        </div>
    )
}

export default Cart