import { useSelector } from "react-redux"
import CartComputer from "./cart-components/CartComputer"
import CartMobile from "./cart-components/CartMobile"


const Cart = () => {

    const cart = useSelector(state => state.cart)

    return (
        <>
        {
            cart.products.length === 0 ?
            <div className="ui message">
                <div className="header">Cart is Empty</div>
                <p>You have no items in your cart</p>
            </div> :
            <div className="ui container">
                <CartComputer cart={cart} />    
                {/* <CartMobile cart={cart} /> */}
            </div>
        }
        </>
    )
}

export default Cart