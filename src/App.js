import React from "react"
import Header from './containers/Header'
import HeaderFixed from "./containers/HeaderFixed"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductListing from './containers/ProductListing'
import ProductDetails from './containers/ProductDetails'
import About from './containers/About'
import Cart from './containers/Cart'
import Wishlist from './containers/Wishlist'
import ProductsByCategory from './containers/ProductsByCategory'
import './App.css'
import toast, { Toaster } from 'react-hot-toast';
import $ from 'jquery'


function App() {

  return (
    <>
    <div className="ui container">
        <HeaderFixed />
        <div className="mt" />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:productId/:productName" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/products/category/:category" element={<ProductsByCategory />} />
        </Routes>
        <Toaster 
            position="top-right"
            reverseOrder={false}
        />
    </div>
    </>
  );
}

export default App;