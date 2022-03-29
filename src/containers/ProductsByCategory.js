import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { setProducts } from "../redux/actions/productActions"
import axios from 'axios'
import Product from './Product'
import toast from 'react-hot-toast';
import $ from 'jquery'
import { useParams } from 'react-router-dom'
import { Image } from 'semantic-ui-react'


const ProductsByCategory = () => {

    let [products, setProducts] = useState([])
    let { category } = useParams()

    // fech products from FakeStoreAPI
    const fetchProducts = async () => {
        const tst = toast.loading('Loading...',{
            position: 'bottom-left',
        })
        const response = await axios.get(`http://127.0.0.1:8000/api/products/category/${category}`)
                                    .catch(err => {
                                        toast.error("Something went wrong, please try again later")
                                        console.log(err)
                                    }).then(response => {
                                       setProducts([...response.data])
                                        $(window).scrollTop(0)
                                        toast.success("New Products and Offers ... ",{icon: "📢"})
                                        toast.dismiss(tst)
                                    })
    }

    useEffect(() => {
        fetchProducts()
        return () => {
            setProducts([])
        }
    },[category])


    return (
        <div className="row">
            {Object.keys(products).length === 0 ?
            <div className='center-on-screen'>
                <div className="ui massive active centered inline loader"></div>
            </div> :
             <>
             <Image
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5uxRYKXTVqt4JjrwC8RmlKMRPNs2JgPAJjQ&usqp=CAU'
                as='a'
                fluid
                href='http://example.com'
                target='_blank'
            />
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
            </>
        }
        </div>
    )
}

export default ProductsByCategory