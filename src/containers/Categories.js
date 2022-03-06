import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Categories = () => {
    
    let [categories, setCategories] = useState([])

    // fech products from FakeStoreAPI
    const fetchCategories = async () => {
        const response = await axios.get('https://fakestoreapi.com/products/categories').catch(err => console.log(err))
        if(response) {
            setCategories(response.data)
        }
    }

    useEffect(() => {
        fetchCategories()
    },[categories])


    return (
        <>
            {categories.map((category, idx) => {
                return ( 
                    <a className='item' href="#" key={idx}>
                        {category}
                    </a> 
                )
            })}
        </>
    )
}

export default Categories