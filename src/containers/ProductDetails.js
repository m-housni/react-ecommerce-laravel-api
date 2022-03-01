import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions'
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
        dispatch(selectedProduct(product.data))
    }
   
    useEffect(() => {
        if(productId && productId!==""){
            fetchProduct()
        }
        return () => {
            dispatch(removeSelectedProduct())
        }
    },[])

    
    return (
        <div className="ui stackable two column grid container">
            {Object.keys(product).length === 0 ? 
                <div>Loading...</div> :
                <div className="row">
                    <div className="column">
                        <img src={product.image} />
                    </div>
                    <div className="column">
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <p>{product.category}</p>
                    </div>
                </div>
        }
        </div>
    )
}

export default ProductDetails