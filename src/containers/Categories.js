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
        <div>
            {categories.map((category, idx) => {
                return ( 
                    <div style={{fontSize:"1.5rem", paddingBottom:15}} key={idx}>
                        {category}
                    </div> 
                )
            })}
        </div>
    )
}

export default Categories