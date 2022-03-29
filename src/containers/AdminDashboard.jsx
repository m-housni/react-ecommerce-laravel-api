import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {

  const loginInfo = useSelector(state => state.login)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <>
        <div className="ui horizontal segments grid">
            <div className="ui segment">
                <h3>Welcome {loginInfo.user.name} !</h3>
                <p>Happy Shopping </p>
            </div>    
            <div className="ui segment">
                <h3>Good news</h3>
                <p>USE "<i>{loginInfo.user.name}5</i>" to get 10% off your next order</p>  
            </div>
        </div>
    </>
  )
}

export default AdminDashboard