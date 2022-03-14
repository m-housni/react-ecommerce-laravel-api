import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Categories = () => {
    
    let [categories, setCategories] = useState([])

    // fech products from FakeStoreAPI
    const fetchCategories = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/product/categories').catch(err => console.log(err))
        if(response) {
            setCategories(response.data)
        }
    }

    useEffect(() => {
        fetchCategories()
    },[])


    return (
        <>
            {categories.map((category, idx) => {
                return ( 
                    <Link to={`/products/category/${category}`} key={idx}>
                    <span className='item' style={{color:"#000"}}>
                        {category}
                    </span> 
                    </Link>
                )
            })}
        </>
    )
}

export default Categories