import React from 'react'
import { useDispatch } from "react-redux"
import { removeFromCart } from "../../redux/actions/productActions"
import toast from 'react-hot-toast'
import config from '../../config.json'

export default function RemoveFromCart({product}) {

    const dispatch = useDispatch()

    const handleRemoveFromCart = (product) => {
        toast.success("Product removed from cart!")
        dispatch(removeFromCart(product))
    }


    return (
        <span onClick={() => handleRemoveFromCart(product)} className={`ui left corner label`} style={{cursor:"pointer"}}>
            <i className="trash icon"></i>
        </span>
    )

}
