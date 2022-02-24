import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { setProducts } from "../redux/actions/productActions"
import axios from 'axios'
import { Card, Icon } from 'semantic-ui-react'
import { Link  } from 'react-router-dom'

const ProductListing = () => {
    
    const products = useSelector(state => state.allProducts.products)
    const dispatch = useDispatch()

    // fech products from FakeStoreAPI
    const fetchProducts = async () => {
        const products = await axios.get('https://fakestoreapi.com/products?limit=!)').catch(err => console.log(err))
        dispatch(setProducts(products.data))
    }

    useEffect(() => {
        fetchProducts()
    })

    return (
        <div class="ui doubling four column grid container">
            
                {products.map(product => {
                    return (                         
                       
                            <div class="column">
                                <div class="ui segment">
                                    <img src={product.image} alt={product.title} style={{width:"100%"}} />
                                    <div class="ui top attached label">{product.title}</div>
                                    <div class="ui bottom attached label">${product.price}</div>
                                </div>
                            </div>
                        
                    )
                })}
        </div>
    )
}

export default ProductListing