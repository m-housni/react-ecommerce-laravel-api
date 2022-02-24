import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const ProductDetails = () => {
    const { productId } = useParams()
    return (
        <div className="ui container">
            <a href="/" className="">ProductDetails</a>
        </div>
    )
}

export default ProductDetails