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
import Search from './containers/Search'
import AdminDashboard from "./containers/AdminDashboard"
import OrderSubmit from "./containers/OrderSubmit"
import ProductForm from "./containers/ProductForm"



function App() {
  return (
    <>
    <div className="ui container">
        <HeaderFixed />
        <div className="mt"></div>
        <OfflineAlert />
        <Search />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/new-product" element={<ProductForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
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