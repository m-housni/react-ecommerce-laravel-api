import React from 'react'
import { Offline, Online, Detector } from "react-detect-offline"
import toast from 'react-hot-toast'

function OfflineAlert() {

    const nowifi = require('../img/no-wifi.png')
    const customStyles = {}

    return (
    <Offline onChange={(online) => online ? toast.success('Back online!') : toast.error('You are offline :(',{position:"top-left"})}>
    <div className="ui container mb" style={customStyles}>
        <h1><i className="fas fa-wifi-slash"></i> You are Offline</h1>
        <p>Please check your internet connexion</p>
        <div style={{textAlign:"center"}}>
            {/* <i class="fas fa-wifi-slash fa-4x"></i> */}
            <img src={nowifi} height="100" />
        </div>
    </div> 
    </Offline>
    )
}

export default OfflineAlert

