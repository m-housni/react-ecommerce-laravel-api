import axios from 'axios'
import React, {useState, useEffect, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { login, logout } from '../redux/actions/loginActions'

function LoginSignup() {

    const email = useRef()
    const password = useRef()
    const loginInfo = useSelector(state => state.login)
    const dispatch = useDispatch()

    const handleLogin = () => {
        axios.post('http://127.0.0.1:8000/api/login',{email: email.current.value, password: password.current.value}).then(res => {
            if(res.data.user){
                toast.success(res.data.message)
                dispatch(login(res.data))
            } else {
                toast.error(res.data.message)
            }
        }).catch(err => {
            console.log(err)
        })
    }

    const handleLogout = () => {
        const config = {
            headers: { Authorization: `Bearer ${loginInfo.token}` }
        }
        axios.post('http://127.0.0.1:8000/api/logout',{},config).then(res => {
            if(res.data){
                toast.success(res.data.message)
                dispatch(logout({}))
            } else {
                toast.error(res.data.message)
            }
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <>
        {!loginInfo.status && <div className="ui placeholder segment">
            <div className="ui two column very relaxed stackable grid">
                <div className="column">
                    <form>
                    <div className="ui form">
                        <div className="field">
                        <label>Username</label>
                        <div className="ui left icon input">
                            <input type="text" ref={email} placeholder="Username"/>
                            <i className="user icon"></i>
                        </div>
                        </div>
                        <div className="field">
                        <label>Password</label>
                        <div className="ui left icon input">
                            <input type="password" ref={password} />
                            <i className="lock icon"></i>
                        </div>
                        </div>
                        <div className="ui blue submit button" onClick={ () => handleLogin() }>Login</div>
                    </div>
                    </form>
                </div>
                <div className="middle aligned column">
                    <div className="ui button red">
                        <i className="signup icon"></i>
                        Sign Up
                    </div>
                </div>
            </div>
            <div className="ui vertical divider mobile-hide tablet-hide">
                Or
            </div>
        </div>}
        {loginInfo.status && <div className="ui horizontal segments grid">
            <div className="ui segment">
                <h3>Welcome {loginInfo.user.name} ! (<span onClick={() => handleLogout()}>logout</span>)</h3>
                <p>Happy Shopping </p>
            </div>    
            <div className="ui segment">
                <h3>Good news</h3>
                <p>USE "<i>{loginInfo.user.name}5</i>" to get 10% off your next order</p>  
            </div>   
        </div>}
        </>
    )
}

export default LoginSignup