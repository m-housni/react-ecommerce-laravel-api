import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = ({loginInfo, handleLogout, count}) => {
  return (
    <div className="ui secondary pointing menu" style={{marginTop:50}}>
        <Link to='/' className={`ui item ${window.location.pathname == '/' ? 'active' : ''}`}>Shop</Link>
        { <Link to='/cart' className={`ui item ${window.location.pathname == '/cart' ? 'active' : ''}`}>Cart<sup>({count})</sup></Link>}
        { loginInfo.status && <Link to='/admin' className={`ui item ${window.location.pathname == '/admin' ? 'active' : ''}`}>Admin</Link>}
        <div className="right menu">
            
                { !loginInfo.status && <Link to='/login' className={`ui item ${window.location.pathname == '/login' ? 'active' : ''}`}>Login</Link> }
                { loginInfo.status && <Link to='/admin' onClick={() => handleLogout()} className="ui item">Logout</Link> }
            
        </div>
    </div>
  )
}

export default Navigation