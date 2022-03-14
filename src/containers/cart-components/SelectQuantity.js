import React from 'react'
import { useDispatch } from "react-redux"
import { addToCart, decrementQty } from "../../redux/actions/productActions"
import toast from 'react-hot-toast'
import config from '../../config.json'

export default function SelectQuantity({product}) {

    const dispatch = useDispatch()

    const handleAddToCart = (product) => {
        toast.success("Cart updated successfully")
        dispatch(addToCart(product))
    }

    const handleDecrementQty = (product) => {
        toast.success("Cart updated successfully")
        dispatch(decrementQty(product))
    }


    return (
        <>
            <div className="ui buttons">
                <button className="ui button" onClick={() => handleDecrementQty(product)}>-</button>
                    <div className="or" data-text={product.qty}></div>
                <button className={`ui button ${config.theme.PRIMARY_COLOR}`} onClick={() => handleAddToCart(product)}>+</button>
            </div>
        </>
        
    )

}
