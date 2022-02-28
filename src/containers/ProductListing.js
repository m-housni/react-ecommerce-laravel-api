import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { setProducts } from "../redux/actions/productActions"
import axios from 'axios'
import { Link } from 'react-router-dom'
import Product from './Product'

const ProductListing = () => {
    
    const products = useSelector(state => state.allProducts.products)
    const dispatch = useDispatch()

    // fech products from FakeStoreAPI
    const fetchProducts = async () => {
        const products = await axios.get('https://fakestoreapi.com/products?limit=1)').catch(err => console.log(err))
        dispatch(setProducts(products.data))
    }

   

    useEffect(() => {
        fetchProducts()
    },[])

    return (
        <div className="ui doubling four column grid container">
            {products.map(product => {
                return ( 
                    <Product 
                        product={product} 
                        key={product.id}  
                    />   
                )
            })}
        </div>
    )
}

export default ProductListing