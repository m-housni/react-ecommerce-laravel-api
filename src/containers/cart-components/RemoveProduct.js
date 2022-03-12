import React from 'react'
import { useDispatch } from "react-redux"
import { removeFromCart, updateLastRemoved } from "../../redux/actions/productActions"
import toast from 'react-hot-toast'

export default function RemoveFromCart({product}) {

    const dispatch = useDispatch()

    const handleRemoveFromCart = (product) => {
        dispatch(updateLastRemoved(product))
        setTimeout(() => {
            toast.success("Product removed from cart!")
            dispatch(removeFromCart(product))
        },500)
    }

    return (
        <span className={`ui left corner label`}>
            <i className="trash icon" onClick={() => handleRemoveFromCart(product)} style={{cursor:"pointer"}}></i>
        </span>
    )

}
