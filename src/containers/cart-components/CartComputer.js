import SelectQuantity from './SelectQuantity'
import CheckoutButton from './CheckoutButton'
import Subtotal from './Subtotal'
import RemoveProduct from './RemoveProduct'
import config from '../../config.json'
import { Link } from 'react-router-dom'


const CartComputer = ({cart}) => {

    const styles = {}

    return (

            <div className="ui horizontal segments grid">
                <div className="ui segment w66">
                {
                    cart.products.map((product, idx) => {
                        return (
                            <div className={`ui three column grid ${cart.lastRemoved == product.id ? 'animate__animated animate__fadeOut' : ''}`} key={product.id} style={styles}>
                                <div className="column">
                                    <RemoveProduct product={product}/>
                                    <Link to={`/product/${product.id}/${product.title.replace(/\s/g, "_").replace(/\//g, '')}`}>
                                        <img src={product.image} alt={product.title} style={{height:"78px"}}/>
                                    </Link>
                                </div>
                                <div  className="column">
                                    {product.title}
                                    <br/>
                                    ${product.price}
                                    <br/>
                                    <SelectQuantity product={product} />
                                </div>
                                <div  className="column">
                                    <Subtotal subtotal={product.qty * product.price} />
                                </div>
                            </div>
                        )
                    })
                }
                </div>
                <div className="ui segment">
                    <CheckoutButton total={cart.total} styles={styles} />
                </div>
            </div>
    )
}

export default CartComputer