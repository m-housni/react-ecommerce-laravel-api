import React from "react"
import HeaderFixed from "./containers/HeaderFixed"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductListing from './containers/ProductListing'
import ProductDetails from './containers/ProductDetails'
import About from './containers/About'
import Cart from './containers/Cart'
import Wishlist from './containers/Wishlist'
import ProductsByCategory from './containers/ProductsByCategory'
import LoginSignup from "./containers/LoginSignup"
import './App.css'
import './fontawesomepro/css/all.css'
import './media.css'
import toast, { Toaster } from 'react-hot-toast'
import OfflineAlert from "./containers/OfflineAlert"



function App() {
  return (
    <>
    <div className="ui container">
        <HeaderFixed />
        <div className="mt"></div>
        <OfflineAlert />
        {/* <LoginSignup /> */}
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:productId/:productName" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/products/category/:category" element={<ProductsByCategory />} />
        </Routes>
        <Toaster 
            position="bottom-center"
            reverseOrder={false}
        />
    </div>
    </>
  );
}

export default App;