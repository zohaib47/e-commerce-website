import React from 'react'
import { Route, Routes } from 'react-router-dom'

//  Components
import Header from '../../components/Header'
import Footer from '../../components/Footer'

//  Pages
import Home from './Home'
import Contact from './Contact'
import Product from './Product'
import ShopCategory from './ShopCatrgory'
import Blog from './Blog'
import SingleBlog from './SingleBlog'
import Confirmation from './Confirmation'
import Elements from './Elements'
import ProductCheckout from './ProductCheckout'
import ShoppingCart from './ShoppingCart'
import Tracking from './Tracking'

export default function index() {
  return (
    <>
   <Header />
    <main>
        <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/product' element={<Product />} />
           <Route  path='/shop-category' element={<ShopCategory/>}/>
           <Route  path='/blog' element={<Blog/>}/>
           <Route  path='/single-blog' element={<SingleBlog/>}/>
           <Route  path='/confirmation' element={<Confirmation/>}/>
           <Route  path='/elements' element={<Elements/>}/>
           <Route  path='/product-checkout' element={<ProductCheckout/>}/>
           <Route  path='/shopping-cart' element={<ShoppingCart/>}/>
           <Route  path='/tracking' element={<Tracking/>}/>
        </Routes>
    </main>
   <Footer />
    </>
  )
}
