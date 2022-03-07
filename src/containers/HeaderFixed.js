import { Link } from 'react-router-dom'
import config from '../config.json'
import Categories from './Categories'

const HeaderFixed = () => {
    return (
        <div className={`ui fixed ${config.theme.PRIMARY_COLOR} inverted menu`}>
            <div className="ui container">
                <Link to="/" className="header item"><span className="logo-text">{config.APP_NAME}</span></Link>
                <Link to="/" className="item">Shop</Link>
                <div className="ui simple dropdown item">
                    <i className="filter icon"></i>
                    <div className="menu">
                        <Categories />
                    </div>
                </div>
                <Link to="/cart" className="item">
                    <i className="cart icon"></i>
                    <sup>9</sup>
                </Link>
                <Link to="/wishlist" className="item">
                    <i className="heart icon"></i>
                    <sup>9</sup>
                </Link>
            </div>
        </div>
    )
}

export default HeaderFixed