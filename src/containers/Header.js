import { Link } from 'react-router-dom'
import $ from 'jquery'

const Header = () => {
    return (
        <div className="ui menu">
            <div className="ui container">
                <Link to="/" className="header item">eToub</Link>
                <Link to="/about" className="item">About</Link>
                <span className="item" onClick={() => $('.ui.sidebar').toggleClass('visible')}>menu</span>
            </div>
        </div>
    )
}

export default Header