import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { addToCart } from "../redux/actions/productActions"
import Product from './Product'

const Cart = () => {

    const cart = useSelector(state => state.cart)

    return (
        <table className="ui sortable table">
            <thead>
                <tr>
                    <th className="computer only">Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.products.map(product => {
                        return (
                            <tr className="top aligned" key={product.id}>
                                <td className="computer only">
                                    <img src={product.image} alt={product.title} style={{width:"100px"}} />
                                </td>
                                <td>${product.price}</td>
                                <td className="top aligned">
                                    <div className="ui mini input">
                                        <input type="number" placeholder="Qty" value={product.qty} />    
                                    </div>
                                </td>
                                <td>
                                    ${product.qty * product.price}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="3">
                        <div style={{textAlign:"right"}}><span>Total</span></div>
                    </td>
                    <td>{cart.total}</td>
                </tr>
            </tfoot>
        </table>
    )
}

export default Cart