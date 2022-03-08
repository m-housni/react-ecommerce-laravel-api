import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { setProducts } from "../redux/actions/productActions"
import axios from 'axios'
import Product from './Product'
import toast, { Toaster } from 'react-hot-toast';
import $ from 'jquery'


const ProductListing = () => {
    
    const products = useSelector(state => state.products.products)
    let product = useSelector(state => state.selectedProduct.product)
    const dispatch = useDispatch()

    // fech products from FakeStoreAPI
    const fetchProducts = async () => {
        toast.error("Wait for the sauce!")
        const response = await axios.get('https://fakestoreapi.com/products').catch(err => console.log(err))
        if(response) {
            dispatch(setProducts(response.data))
            toast.success("Products loaded successfully!")
            $(window).scrollTop(0)
        }
    }

   

    useEffect(() => {
        fetchProducts()
        return () => {
            dispatch(setProducts([]))
        }
    },[])

    return (
        <div className="row">
            {Object.keys(products).length === 0 ?
            <div className='center-on-screen'>
                <div className="ui massive active centered inline loader"></div>
            </div>
             :
            <div className="ui doubling four column grid"> 
                {products.map(product => {
                    return ( 
                        <Product 
                            product={product} 
                            key={product.id}  
                        />   
                    )
                })}
            </div>
        }
        </div>
    )
}

export default ProductListing