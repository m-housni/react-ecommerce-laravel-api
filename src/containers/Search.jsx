import React from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import $ from 'jquery'
import { useSelector, useDispatch } from "react-redux"
import { setProducts } from "../redux/actions/productActions"

const Search = () => {

  const show = useLocation().pathname == '/'
  const products = useSelector(state => state.products.products)
  const dispatch = useDispatch()

  const search = async (e) => {
      // search for the product in the database
      const url = e.target.value == '' ? 'http://127.0.0.1:8000/api/products' : `http://127.0.0.1:8000/api/products/search/${e.target.value}`
      const response = await axios.get(url)
                            .catch(err => {
                                console.log(err)
                            }).then(response => {
                                dispatch(setProducts(response.data))
                                $(window).scrollTop(0)
                            })

      // list the products
  }

  return (
    <>
    {show && <form className="ui form"   style={{marginBottom:"24px"}}>
        <div className="field">
            {/* <label htmlFor="productName">Search</label> */}
            <input 
                type="text" 
                id="productName" 
                name="productName" 
                placeholder="Search for product ..."  
                style={{border:"none", fontSize:"30px", textAlign:"center"}} autoFocus 
                onChange={(e) => search(e)}
            />
        </div>
    </form>}
    </>
  )
}

export default Search