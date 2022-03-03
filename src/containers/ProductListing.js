import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { setProducts } from "../redux/actions/productActions"
import axios from 'axios'
import Product from './Product'
import Categories from './Categories'

const ProductListing = () => {
    
    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch()

    // fech products from FakeStoreAPI
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch(err => console.log(err))
        if(response) {
            dispatch(setProducts(response.data))
        }
    }

   

    useEffect(() => {
        fetchProducts()
    },[])

    return (
        <div className="ui grid container">
            <div className="three wide column">
                <Categories />
            </div>
            <div className="thirteen wide column">
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
            </div>
        </div>
    )
}

export default ProductListing