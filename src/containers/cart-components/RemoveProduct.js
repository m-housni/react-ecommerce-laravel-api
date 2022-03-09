import React from 'react'
import { useDispatch } from "react-redux"
import { addToCart, removeFromCart } from "../../redux/actions/productActions"
import toast from 'react-hot-toast'

export default function RemoveProduct({product}) {

    const dispatch = useDispatch()

    const handleAddToCart = (product) => {
        toast.success("Cart updated successfully")
        dispatch(addToCart(product))
    }

    const handleRemoveFromCart = (product) => {
        toast.success("Cart updated successfully")
        dispatch(removeFromCart(product))
    }


    return (
        <>
            <div className="ui buttons fluid">
                <button className="ui button" onClick={() => handleRemoveFromCart(product)}>-</button>
                    <div className="or" data-text={product.qty}></div>
                <button className="ui positive button active" onClick={() => handleAddToCart(product)}>+</button>
            </div>
        </>
        
    )

}
