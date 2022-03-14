import SelectQuantity from './SelectQuantity'
import CheckoutButtonMobile from './CheckoutButtonMobile'
import Subtotal from './Subtotal'
import RemoveProduct from './RemoveProduct'
import config from '../../config.json'
import { Link } from 'react-router-dom'


const CartMobile = ({cart}) => {

    const styles = {border:`5px solid ${config.theme.PRIMARY_COLOR}`, marginBottom:"5px", borderRadius:"5px"}

    return (
        <div className="ui container">
            {/* MOBILE TABLET */}
            <CheckoutButtonMobile total={cart.total} styles={styles} />
           {
                cart.products.map(product => {
                    return (
                        <div className={`ui three column grid mobile tablet only ${cart.lastRemoved == product.id ? 'animate__animated animate__zoomOut' : ''}`} key={product.id} style={styles}>
                            <div className="column ">
                                <RemoveProduct product={product} />
                                <Link to={`/product/${product.id}/${product.title.replace(/\s/g, "_").replace(/\//g, '')}`}>
                                    <img src={product.image} alt={product.title} style={{width:"64px"}} />
                                </Link>
                                <br />
                                {product.title}
                                <br />
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
            <CheckoutButtonMobile total={cart.total} styles={styles} />
        </div>
    )
}

export default CartMobile