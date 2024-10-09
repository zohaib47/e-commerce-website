import React from 'react'
import { Link } from 'react-router-dom'



export default function Navbar() {
  

 

  return (
    <nav className="navbar navbar-expand-lg  header1 ">
  <div className="container">
    <Link to='/'    className="navbar-brand" style={{ fontSize:"30px" , fontWeight:"bold" }}>Aranoz.</Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0  col-12 col-md-6  offset-md-3 col-lg-8 offset-lg-2 ps-5 "  >
        <li className="nav-item pe-4 ">
          <Link to="/"  className="nav-link navhome">Home</Link>
        </li>
        
       
        <li className="nav-item dropdown pe-4" >
          <button className="nav-link dropdown-toggle  "  data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </button>
          <ul className="dropdown-menu">
            <li><Link to='/shop-category'  className="dropdown-item ">Shop Category</Link></li>
            <li><Link to='/product'  className="dropdown-item">Product Details</Link></li>
          </ul>
        </li> 
        <li className="nav-item dropdown pe-4">
          <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </a>
          <ul className="dropdown-menu ">
            <li><Link to='/login'className="dropdown-item" >Login</Link></li>
            <li><Link to='/tracking'className="dropdown-item" >Tracking</Link></li>
            <li><Link to='/product-checkout'className="dropdown-item" >Product Checkout</Link></li>
            <li><Link to='/shoping-cart'className="dropdown-item" >Shoping Cart</Link></li>
            <li><Link to='/confirmation'className="dropdown-item" >Confirmation</Link></li>
            <li><Link to='/elements'className="dropdown-item" >Elements</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown text-dark pe-4">
          <a className="nav-link dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Blogs
          </a>
          <ul className="dropdown-menu">
            <li><Link to='/blog' className="dropdown-item">Blog</Link></li>
            <li><Link to='/single-blog' className="dropdown-item">Single Blog</Link></li>
          </ul>
        </li>
        <li className="nav-item text-dark">
          <Link to='/contact' className="nav-link"  >Contact</Link>
        </li>   
      </ul>
      <a  className='d-flex' style={{ color:"black"}}>
        <i className='mx-3'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
        </i>
        </a>
        <a className='d-flex' style={{ color:"black"}}>
        <i className='mx-3'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
        </svg>
        </i>
        </a>
        <a className='d-flex' style={{ color:"black"}}>
        <i className='mx-3'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
        </svg>
        </i>
      </a>    
    </div>
  </div> 
</nav>

  )
}
