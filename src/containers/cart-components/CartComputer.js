import SelectQuantity from './SelectQuantity'
import CheckoutButton from './CheckoutButton'
import Subtotal from './Subtotal'
import RemoveProduct from './RemoveProduct'
import config from '../../config.json'
import { Link } from 'react-router-dom'


const CartComputer = ({cart}) => {

    const styles = {border:`5px solid ${config.theme.PRIMARY_COLOR}`, marginBottom:"5px", borderRadius:"5px"}

    return (
        <div className="ui container">
            <CheckoutButton total={cart.total} styles={styles} />
            {/* COMPUTER */}
            {
                cart.products.map((product, idx) => {
                    return (
                        <div className={`ui four column grid computer only ${cart.lastRemoved == product.id ? 'animate__animated animate__zoomOut' : ''}`} key={product.id} style={styles}>
                            <div className="column">
                                <RemoveProduct product={product}/>
                                <Link to={`/product/${product.id}/${product.title.replace(/\s/g, "_").replace(/\//g, '')}`}>
                                    <img src={product.image} alt={product.title} style={{height:"128px"}}/>
                                </Link>
                            </div>
                            <div  className="column">
                                {product.title}
                                <br/>
                                ${product.price}
                            </div>
                            <div  className="column">
                                <SelectQuantity product={product} />
                            </div>
                            <div  className="column">
                                <Subtotal subtotal={product.qty * product.price} />
                            </div>
                        </div>
                    )
                })
            }
            <CheckoutButton total={cart.total} styles={styles} />
        </div>
    )
}

export default CartComputer