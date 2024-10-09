import React from 'react'
import chair1 from '../../image/chair1.jpg'
// import chair2 from '../../image/chair2.png'
import chair3 from '../../image/chair3.png'
import chair4 from '../../image/product1.webp'
import chair5 from '../../image/product2.webp'
import chair6 from '../../image/product3.webp'
import product1 from '../../image/product1.webp'
import product2 from '../../image/product2.webp'
import product3 from '../../image/product3.webp'
import product4 from '../../image/product4.webp'
export default function ShopCatrgory() {
  return (
    <>
    <section className='d-flex text-align-center'>
                <div className="container-fluid " style={{ backgroundColor: "#f0fcff" }}>
                    <div className="container" >
                        <div className="row mt-5">
                            <div className="col-lg-7 col-md-8  text-center  ">
                                <h1 style={{ fontSize: "35px", fontWeight: "700", marginTop: "80px" }}>Shop Category</h1>
                                <p className='text-secondary '>Home - Shop Category</p>
                            </div>
                            <div className="col-lg-5 col-md-4">
                                <img src={chair1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section_panding cat_product_area  '>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="left_sidebar">
                                <aside className=' left_widgets p_filter_widgets'>
                                    <div className="title">
                                        <h3>Browser Categories</h3>
                                    </div>
                                    <div className="widgets_inner" >
                                        <ul className='list'>
                                            <li><a  href="/shop-category">Frozen Fish</a>
                                            <span> (250)</span>
                                            </li>
                                            <li><a href="/shop-category">Dried Fish</a>
                                            <span> (250)</span>
                                            </li>
                                            <li><a href="/shop-category">Fresh Fish</a>
                                            <span> (250)</span>
                                            </li>
                                            <li><a href="/shop-category">Meat Fish</a>
                                            <span> (250)</span>
                                            </li>
                                            <li><a href="/shop-category">Altarnative Fish</a>
                                            <span> (250)</span>
                                            </li>
                                            <li><a href="/shop-category" >Meat</a>
                                            <span> (250)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                                <aside className='left_widgets p_filter_widgets'>
                                    <div className="title">
                                        <h3>Product filters</h3>
                                    </div>
                                    <div className="widgets_inner">
                                        <ul className='list'>
                                            <li ><a href="/shop-category">Asus</a>
                                            </li>
                                            <li><a href="/shop-category">Apple</a>
                                            </li>
                                            <li className='active'><a href="/shop-category">Goinee</a>
                                            </li>
                                            <li><a href="/shop-category">Micromax</a>
                                            </li>
                                            <li><a href="/shop-category">Samsung</a>
                                            </li>
                                        </ul>
                                        <ul className='list'>
                                            <li><a href="/shop-category">Asus</a>
                                            </li>
                                            <li><a href="/shop-category">Apple</a>
                                            </li>
                                            <li className='active'><a href="/shop-category">Goinee</a>
                                            </li>
                                            <li><a href="/shop-category">Micromax</a>
                                            </li>
                                            <li><a href="/shop-category">Samsung</a>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                                <aside className='left_widgets p_filter_widgets'>
                                    <div className="title">
                                        <h3>Color Filter</h3>
                                    </div>
                                    <div className="widgets_inner">
                                        <ul className='list'>
                                            <li><a href="/shop-category"> Black</a>
                                            </li>
                                            <li><a href="/shop-category"> Black Leather</a>
                                            </li>
                                            <li className='active'><a href="/shop-category">Black and red</a>
                                            </li>
                                            <li><a href="/shop-category"> Gold</a>
                                            </li>
                                            <li><a href="/shop-category">Spacegrey</a>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </aside>
                                <aside className='left_widgets p_filter_widgets'>
                                    <div className="title">
                                        <h3>Price Filter</h3>
                                    </div>
                                    <div className="widgets_inner">
                                        <div className="range_item">
                                            <input type="range" className='js-range-slider .irs-hidden-input' readOnly />
                                            <div className="d-flex">
                                                <div className="price_text">
                                                    <p>Price:</p>
                                                </div>
                                                <div className=" price_value d-flex justify-content-center">
                                                    <input type="text" className='js-input-from' id='amount' readOnly />
                                                    <span>to</span>
                                                    <input type="text" className='js-input-to' id='amount' readOnly />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            
                            </div>

                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-12 ">
                                    <div className="product_top_bar d-flex justify-content-between  align-items-center">
                                        <div className="single_product_menu ">
                                            <p>
                                                <span className='pe-1'>10000</span>
                                                Prodict found
                                            </p>
                                        </div>
                                        <div className="single_product_menu d-flex ">
                                            <h5 className=' d-flex justify-content-between align-items-center fs-6 '>short by :</h5>
                                            <select  style={{ display:"none"}}>
                                                <option data-display="select">name</option>
                                                <option value="1">price</option>
                                                <option value="2">product</option>
                                            </select>
                                            
                                            <div className="nice_select d-flex " tabIndex='0'>
                                                <span className='current ps-4 form-select border border-0' disable >Select</span>
                                                <ul className="list" style={{display:"none"}}>
                                                    <li data-value="name" data-display="select" className="option selected">name</li>
                                                    <li data-value="1" className="option ">price</li>
                                                    <li data-value="2" className="option ">product</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="single_product_menu d-flex ">
                                            <h5 className=' d-flex justify-content-between align-items-center fs-6 '>show: </h5>
                                            <div className="top_pageniation">
                                                <ul className='d-flex ' style={{ listStyle:"none" , letterSpacing:"20px"}}>
                                                    <li>1</li>
                                                    <li>2</li>
                                                    <li>3</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="single_product_menu d-flex ">
                                            <div className="input-group  ">
                                               <input type="text" className='form-control mt-3 ' placeholder='search' style={{ width:"80px" , height:"30px", border:"0px"} } />
                                               <div className="input-group-prepend " >
                                                <span className='input-group-text bg-white border border-0'  >
                                                    <i className='ti-search ' >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                                     <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                                     </svg>      
                                                    </i>

                                                </span>
                                               </div>
                                            </div>
                                        </div>
                                        

                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center latest_product_inner">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single_product_item">
                                        <img src={chair4} alt="" />
                                        <div className="single_product_text">
                                            <h4>Quartz Belt Watch</h4>
                                            <h3>$150.00</h3>
                                            <a href="/shop-category" className='add_card'>
                                                + add to cart
                                                <i className='ti-heart'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                 <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                                </svg>
                                                </i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single_product_item">
                                        <img src={chair3} alt="" />
                                        <div className="single_product_text">
                                            <h4>Quartz Belt Watch</h4>
                                            <h3>$150.00</h3>
                                            <a href="/shop-category" className='add_card'>
                                                + add to cart
                                                <i className='ti-heart'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                 <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                                </svg>
                                                </i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single_product_item">
                                        <img src={chair4} alt="" />
                                        <div className="single_product_text">
                                            <h4>Quartz Belt Watch</h4>
                                            <h3>$150.00</h3>
                                            <a href="/shop-category" className='add_card'>
                                                + add to cart
                                                <i className='ti-heart'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                 <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                                </svg>
                                                </i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single_product_item">
                                        <img src={chair5} alt="" />
                                        <div className="single_product_text">
                                            <h4>Quartz Belt Watch</h4>
                                            <h3>$150.00</h3>
                                            <a href="/shop-category" className='add_card'>
                                                + add to cart
                                                <i className='ti-heart'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                 <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                                </svg>
                                                </i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single_product_item">
                                        <img src={chair6} alt="" />
                                        <div className="single_product_text">
                                            <h4>Quartz Belt Watch</h4>
                                            <h3>$150.00</h3>
                                            <a href="/shop-category" className='add_card'>
                                                + add to cart
                                                <i className='ti-heart'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                 <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                                </svg>
                                                </i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single_product_item">
                                        <img src={chair4} alt="" />
                                        <div className="single_product_text">
                                            <h4>Quartz Belt Watch</h4>
                                            <h3>$150.00</h3>
                                            <a href="/shop-category" className='add_card'>
                                                + add to cart
                                                <i className='ti-heart'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                 <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                                </svg>
                                                </i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single_product_item">
                                        <img src={chair3} alt="" />
                                        <div className="single_product_text">
                                            <h4>Quartz Belt Watch</h4>
                                            <h3>$150.00</h3>
                                            <a href="/shop-category" className='add_card'>
                                                + add to cart
                                                <i className='ti-heart'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                 <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                                </svg>
                                                </i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single_product_item">
                                        <img src={chair5} alt="" />
                                        <div className="single_product_text">
                                            <h4>Quartz Belt Watch</h4>
                                            <h3>$150.00</h3>
                                            <a href="/shop-category" className='add_card'>
                                                + add to cart
                                                <i className='ti-heart'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                 <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                                </svg>
                                                </i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single_product_item">
                                        <img src={chair6} alt="" />
                                        <div className="single_product_text">
                                            <h4>Quartz Belt Watch</h4>
                                            <h3>$150.00</h3>
                                            <a href="/shop-category" className='add_card'>
                                                + add to cart
                                                <i className='ti-heart'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                 <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                                </svg>
                                                </i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="pageination">
                                        <nav>
                                            <ul className='pagination justify-content-center' >
                                                <li className='page-item'>
                                                    <a href="/shop-category" className='page-link'>
                                                        <i className='ti-angle-double-left'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                                       <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                                       </svg>
                                                  </i> 
                                                    </a>
                                                </li>
                                                <li className='page-item'>
                                                    <a href="/shop-category" className='page-link'>1</a>
                                                </li>
                                                <li className='page-item'>
                                                    <a href="/shop-category" className='page-link'>2</a>
                                                </li>
                                                <li className='page-item'>
                                                    <a href="/shop-category" className='page-link'>3</a>
                                                </li>
                                                <li className='page-item'>
                                                    <a href="/shop-category" className='page-link'>4</a>
                                                </li>
                                                <li className='page-item'>
                                                    <a href="/shop-category" className='page-link'>5</a>
                                                </li>
                                                <li className='page-item'>
                                                    <a href="/shop-category" className='page-link'>6</a>
                                                </li>
                                                <li className='page-item'>
                                                    <a href="/shop-category" className='page-link'>
                                                        <i className='ti-angle-double-left'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                                                        <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                                                        </svg>
                                                        </i> 
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='best_seller_shop' style={{marginBottom:"180px"}}>
            <div className="container bestseller">
            <div className="row mb-5">
              <div className="col-12 col-lg-12">
                <p className='' style={{ fontSize:"46px",fontWeight:"bold", marginTop:"98px" }}>Best sellers <span className='text-secondary' style={{ paddingLeft:"50px",fontSize:"22px",  }}>shop</span></p>
              </div>
              <div className="col-12  ">
               <p style={{ display:"flex", float:"right", fontSize:"14px" }}>
               <span><button className='bg-white border border-0 fw-bold' >Next</button> &nbsp;</span>
               <span>|</span>
                <span>&nbsp;<button className='bg-white border border-0 fw-bold' >Previous</button></span>
               </p>
              </div>
            </div>
            <div className="row ">
            <div className="col-3">
              <div className="card  border border-0 " >
                <div className="col-12" >
                  <img src={product1} alt="" width="100%" height="100%" />
                  <p className="card-title fs-5 fw-bold pt-5">Qurtaz Belt Watch </p>
                  <p className="card-text">$150.00</p>
                </div>
              </div>
            </div >

            <div className="col-3 ">
              <div className="card  border border-0">
                <img src={product2} alt="" />
                <p className="card-title fs-5 fw-bold pt-5">Qurtaz Belt Watch </p>
                <p className="card-text">$150.00</p>
              </div>
            </div>
            <div className="col-3 ">
              <div className="card  border border-0">
                <img src={product3} alt="" />
                <p className="card-title fs-5 fw-bold pt-5">Qurtaz Belt Watch </p>
                <p className="card-text">$150.00</p>
              </div>
            </div>
            <div className="col-3 ">
              <div className="card border border-0">
                <img src={product4} alt="" />
                <p className="card-title fs-5 fw-bold pt-5">Qurtaz Belt Watch </p>
                <p className="card-text">$150.00</p>
              </div>
            </div>
          </div>
            </div>
            </section>
    
    
    </>
  )
}
