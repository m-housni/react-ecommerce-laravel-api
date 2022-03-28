import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import $ from 'jquery'
import config from '../config.json'
import Product from './Product'
import { Link } from 'react-router-dom'
import Cart from './Cart'



const ProductDetails = () => {

    let [SimilarProducts, setSimilarProducts] = useState([])
    let product = useSelector(state => state.selectedProduct.product)
    let { productId } = useParams()
    let [pid, setPid] = useState(productId)

    const dispatch = useDispatch()

    // fech product from FakeStoreAPI
    const fetchProduct = async () => {
        const response = await axios.get(`http://127.0.0.1:8000/api/products/${pid}`).catch(err => console.log(err))
        if(response){
            dispatch(selectedProduct(response.data))
            fetchSimilarProducts(response.data.category)
        }
    }
    const fetchSimilarProducts = async (category) => {
        const response = await axios.get(`http://127.0.0.1:8000/api/products/category/${category}`).catch(err => console.log(err))
        if(response) {
            setSimilarProducts(response.data)
        }
    }
   
    useEffect(() => {
        if(productId && productId!==""){
            fetchProduct()
            $(window).scrollTop(0)
        }
        return () => {
            dispatch(removeSelectedProduct())
        }
    },[pid])

    

    return (
        <div className="ui stackable two column grid container">
            {Object.keys(product).length === 0 ? 
                <div className='center-on-screen'>
                    <div className="ui massive active centered inline loader"></div>
                </div> :
                <div className="row">
                    <Product 
                        product={product}
                    />
                    <div className="column">
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <p><span className={`ui ${config.theme.PRIMARY_COLOR} inverted large teal tag label ${config.theme.PRIMARY_COLOR} inverted`}>${product.price}</span></p>
                        {/* <button className="ui right labeled icon button red">
                            <i className="right arrow icon"></i>
                            Buy Now
                        </button>
                        <button className="ui right labeled icon button">
                            <i className="cart icon"></i>
                            Add to cart
                        </button> */}
                        <p style={{marginTop:"20px"}}><Link to={`/products/category/${product.category}`}>{product.category}</Link></p>
                    </div>
                    <h1>Similar Products</h1>
                    <div className="ui doubling four column grid container">
                        {SimilarProducts.filter(p => p.id != pid).map(product => {
                            return ( 
                                <div className="column" key={product.id} onClick={() => setPid(product.id)}>
                                    <Product 
                                        product={product}
                                    /> 
                                </div>

                            )
                        })}
                    </div>
                </div>
        }
        </div>
    )
}

export default ProductDetails