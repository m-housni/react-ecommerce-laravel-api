import React from 'react'
import { useDispatch } from "react-redux"
import { removeFromCart } from "../../redux/actions/productActions"
import toast from 'react-hot-toast'
import config from '../../config.json'

export default function RemoveProduct({product}) {

    const dispatch = useDispatch()

    const handleRemoveFromCart = (product) => {
        toast.success("Cart updated successfully")
        dispatch(removeFromCart(product))
    }


    return (
        <span className={`ui left corner label ${config.theme.PRIMARY_COLOR}`} style={{cursor:"pointer"}}><i className="trash icon"></i></span>
    )

}
