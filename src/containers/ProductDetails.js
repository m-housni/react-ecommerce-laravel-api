import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ProductListing from './ProductListing'
import SimilarProduct from './SimilarProduct'
import $ from 'jquery'



const ProductDetails = () => {

    let [SimilarProducts, setSimilarProducts] = useState([])
    let product = useSelector(state => state.selectedProduct.product)
    let { productId } = useParams()
    let [pid, setPid] = useState(productId)

    const dispatch = useDispatch()

    // fech product from FakeStoreAPI
    const fetchProduct = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${pid}`).catch(err => console.log(err))
        if(response){
            dispatch(selectedProduct(response.data))
            fetchSimilarProducts(response.data.category)
        }
    }
    const fetchSimilarProducts = async (category) => {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`).catch(err => console.log(err))
        if(response) {
            setSimilarProducts(response.data)
        }
    }
   
    useEffect(() => {
        if(productId && productId!==""){
            fetchProduct()
        }
        return () => {
            dispatch(removeSelectedProduct())
        }
    },[pid])

    return (
        <div className="ui stackable two column grid container">
            {Object.keys(product).length === 0 ? 
                <div className="centerDiv">
                    <div className="ui active massive text centered inline loader"></div>
                </div> :
                <div className="row">
                    <div className="column">
                        <div className="ui raised segment">
                            {/* <a className={`ui yellow ribbon label`}>NEW<br/>Cooooool</a>
                            <a className={`ui yellow ribbon label`}>NEW<br/>Cooooool</a> 
                            <span>Account Details</span> */}
                            <a className="ui left corner label"><i className="cart icon"></i></a>
                            <a className="ui right corner label"><i className="heart icon"></i></a>
                            
                            <img src={product.image} width="100%"/>
                        </div>
                    </div>
                    <div className="column">
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <p><span className="ui large teal tag label">${product.price}</span></p>
                        <p>{product.category}</p>
                    </div>
                    <h1>Similar Products</h1>
                    <div className="ui doubling four column grid container">
                        {SimilarProducts.filter(p => p.id != pid).map(product => {
                            return ( 
                                <div className="column" key={product.id} onClick={() => setPid(product.id)}>
                                    <SimilarProduct 
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