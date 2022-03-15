import axios from 'axios'
import React, {useState, useEffect, useRef} from 'react'

function LoginSignup() {

    const email = useRef()
    const password = useRef()

    const login = () => {
        axios.post('http://127.0.0.1:8000/api/login',{email: email.current.value, password: password.current.value}).then(res => {
            console.log(res)
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="ui placeholder segment">
            <div className="ui two column very relaxed stackable grid">
                <div className="column">
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
                        <div className="ui blue submit button" onClick={() => login()}>Login</div>
                    </div>
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
        </div>
    )
}

export default LoginSignup