import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { setProducts } from "../redux/actions/productActions"
import axios from 'axios'
import Product from './Product'
import toast from 'react-hot-toast';
import $ from 'jquery'
import Loader from './Loader'


const ProductListing = () => {
    
    const products = useSelector(state => state.products.products)
    let product = useSelector(state => state.selectedProduct.product)
    const dispatch = useDispatch()

    // fech products from FakeStoreAPI
    const fetchProducts = async () => {
        const tst = toast.loading('Loading...',{
            position: 'bottom-left',
        })
        const response = await axios.get('http://127.0.0.1:8000/api/products')
                                    .catch(err => {
                                        toast.error("Something went wrong, please try again later")
                                        console.log(err)
                                    }).then(response => {
                                        dispatch(setProducts(response.data))
                                        $(window).scrollTop(0)
                                        toast.success("New Products and Offers ... ",{icon: "📢"})
                                        toast.dismiss(tst)
                                    })
    }

   

    useEffect(() => {
        fetchProducts()
        return () => {
            dispatch(setProducts([]))
        }
    },[])

    return (
        <div className="row">
            {
                Object.keys(products).length === 0 ?
                <Loader />
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