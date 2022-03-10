import { Link } from 'react-router-dom'
import config from '../config.json'
import Categories from './Categories'
 import { useSelector, useDispatch } from "react-redux"

const SideIcons = () => {

    const count = useSelector(state => state.cart.products.length)
    const total = useSelector(state => state.cart.total)

    return (
        <div className="ui grid">
            <div style={{position:"fixed",top:"60px", left:"10px"}} className="column computer only">
                <i className="cart icon big pink "></i>
                <sup>{count}</sup><sub>{total}</sub>
            </div>
        </div>
    )
}

export default SideIcons