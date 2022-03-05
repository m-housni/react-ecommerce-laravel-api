import { Link } from 'react-router-dom'
import $ from 'jquery'

const HeaderFixed = () => {
    return (
        <div className="ui fixed violet inverted menu">
            <div className="ui container">
            <Link to="/" className="header item"><span className="logo-text">eToub</span></Link>
            <Link to="/about" className="item">About</Link>
            <div className="ui simple dropdown item">
                Dropdown <i className="dropdown icon"></i>
                <div className="menu">
                <a className="item" href="#">Link Item</a>
                <a className="item" href="#">Link Item</a>
                <div className="divider"></div>
                <div className="header">Header Item</div>
                <div className="item">
                    <i className="dropdown icon"></i>
                    Sub Menu
                    <div className="menu">
                    <a className="item" href="#">Link Item</a>
                    <a className="item" href="#">Link Item</a>
                    </div>
                </div>
                <a className="item" href="#">Link Item</a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HeaderFixed