import React from 'react'
import {BrowserRouter ,Routes , Route } from 'react-router-dom'

// import Frontend from './Frontend'
// import Auth from './Auth'
import Home from '../pages/Frontend/Home'
import Contact from '../pages/Frontend/Contact'
import Tracking from '../pages/Frontend/Tracking'
import Blog from '../pages/Frontend/Blog'
import Confirmation from '../pages/Frontend/Confirmation'
import Elements from '../pages/Frontend/Elements'
import Product from '../pages/Frontend/Product'
import ShoppingCart from '../pages/Frontend/ShoppingCart'
import SingleBlog from '../pages/Frontend/SingleBlog'
import ShopCatrgory from '../pages/Frontend/ShopCatrgory'
import ProductCheckout from '../pages/Frontend/ProductCheckout'
import Login from '../pages/Auth/Login'

import Navbar from '../components/Header/Navbar'
import Footer from '../components/Footer/Footer'

export default function Index() {
  return (

    // <Routes>
    //     <Route path='./*' element={< Frontend/>} />
    //     <Route path='./auth/*' element={<Auth />} />
    // </Routes>
    <BrowserRouter>
    <Navbar />
    <main>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/tracking' element={<Tracking/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/confirmation' element={<Confirmation/>} />
      <Route path='/elements' element={<Elements/>} />
      <Route path='/product' element={<Product/>} />
      <Route path='/shoping-cart' element={<ShoppingCart/>} />
      <Route path='/single-blog' element={<SingleBlog/>} />
      <Route path='/shop-category' element={<ShopCatrgory/>} />
      <Route path='/product-checkout' element={<ProductCheckout/>} />
      <Route path='/login' element={<Login />} />
      {/* <Route path='./auth/login' element={<Auth />} /> */}

      </Routes>
    </main>
    <Footer />
    </BrowserRouter>

  )
}
