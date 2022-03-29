import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import config from '../config.json'
import Categories from './Categories'
import { useSelector, useDispatch } from "react-redux"
import axios from 'axios'
import { logout } from '../redux/actions/loginActions'
import { useNavigate } from 'react-router-dom'
import Loader from './Loader'
import Navigation from './Navigation'
import Navbar from './Navbar'

const HeaderFixed = () => {

    const count = useSelector(state => state.cart.products.length)
    const loginInfo = useSelector(state => state.login)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loader, setLoader] = useState(false)

    const handleLogout = () => {
        const config = {
            headers: { Authorization: `Bearer ${loginInfo.token}` }
        }
    
        console.log(config)
            setLoader(true)
            axios.post('http://127.0.0.1:8000/api/logout',{},config).then(res => {
                navigate('/')
                setLoader(false)
                dispatch(logout({}))
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <>
        { loader && <Loader />}
        <Navbar config={config} count={count} />
        <Navigation loginInfo={loginInfo} handleLogout={handleLogout} count={count} />
        </>
    )
}

export default HeaderFixed