import React from "react"
import Header from './containers/Header'
import HeaderFixed from "./containers/HeaderFixed"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductListing from './containers/ProductListing'
import ProductDetails from './containers/ProductDetails'
import About from './containers/About'
import './App.css'
import $ from 'jquery'

function App() {

  return (
    <div className="ui container">
        <HeaderFixed />
        <div className="mt" />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:productId/:productName" element={<ProductDetails />} />
        </Routes>
    </div>
  );
}

export default App;