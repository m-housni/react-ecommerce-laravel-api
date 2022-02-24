import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="ui menu">
            <div className="ui container">
                <Link to="/" className="header item">eToub</Link>
                <Link to="/about" className="item">A propos</Link>
            </div>
        </div>
    )
}

export default Header