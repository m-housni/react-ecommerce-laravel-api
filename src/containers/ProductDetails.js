import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { selectedProducts } from '../redux/actions/productActions'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductDetails = () => {

    const product = useSelector(state => state.selectedProduct.product)
    const { productId } = useParams()
    const dispatch = useDispatch()

    // fech product from FakeStoreAPI
    const fetchProduct = async () => {
        const product = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err => console.log(err))
        console.log(product.data)
        dispatch(selectedProducts(product.data))
    }
   
    useEffect(() => {
        fetchProduct()
    },[])

    return (
        <div className="ui container">
            <a href="/" className="">{product.title}</a>
        </div>
    )
}

export default ProductDetails