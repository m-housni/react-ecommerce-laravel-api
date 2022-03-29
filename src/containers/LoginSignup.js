import axios from 'axios'
import React, {useState, useEffect, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { login, logout } from '../redux/actions/loginActions'
import { useNavigate } from "react-router-dom";
import Loader from './Loader'

function LoginSignup() {

    const email = useRef()
    const password = useRef()
    const loginInfo = useSelector(state => state.login)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false)

    const handleLogin = () => {
        setLoader(true)
        axios.post('http://127.0.0.1:8000/api/login',{email: email.current.value, password: password.current.value}).then(res => {
            if(res.data){
                toast.success(res.data.message)
                dispatch(login(res.data))
                navigate('/admin')
                setLoader(false)
            } else {
                toast.error(res.data.message)
            }
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        if(Object.keys(loginInfo).length > 1){
            navigate('/admin')
        }
    },[])



    return (
        <>
        { loader && <Loader />}
        { <form>
            <div className="ui form" style={{maxWidth:300, margin:"auto"}}>
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
        </form>}
        </>
    )
}

export default LoginSignup