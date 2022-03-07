import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { addToCart } from "../redux/actions/productActions"
import Product from './Product'

const Cart = () => {

    const products = useSelector(state => state.cart.products)

    return (
        <table className="ui sortable table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product => {
                        return (
                            <tr className="top aligned" key={product.id}>
                                <td>
                                    <img src={product.image} alt={product.title} style={{width:"100px"}} />
                                </td>
                                <td>{product.title}</td>
                                <td className="top aligned">
                                    <div className="ui mini input">
                                        <input type="number" placeholder="Qty" value={product.qty} />    
                                    </div>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Cart