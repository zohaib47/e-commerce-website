import React from 'react'
import chair1 from '../../image/chair1.jpg'
import card from '../../image/client-logo/card.webp' 
export default function ProductCheckout() {
  return (
    <>
      <section className='d-flex text-align-center'>
        <div className="container-fluid " style={{ backgroundColor: "#f0fcff" }}>
          <div className="container" >
            <div className="row mt-5">
              <div className="col-lg-7 col-md-8 col-sm-8  text-center  ">
                <h1 style={{ fontSize: "35px", fontWeight: "700", marginTop: "80px" }}>Product Checkout</h1>
                <p className='text-secondary '>Home - product Checkout</p>
              </div>
              <div className="col-lg-5 col-md-4 col-sm-4  ">
                <img src={chair1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="checkout_area padding_top" style={{marginBottom:"120px"}}>
        <div className="container">
          <div className="customer">
            <div className="check_title">
              <h2>
                Returning Customer?
                <a href="/product-checkout"> Click here to login</a>
              </h2>
            </div>
            <p>
              If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing & Shipping section.
            </p>
            <form action="/" className='row contact_form'>
              <div className="col-md-6 form-group p_start">
                <input type="text" className='form-control' placeholder='Username or Email' />
              </div>
              <div className="col-md-6 form-group p_start">
                <input type="password" className='form-control' placeholder='Password' />
              </div>
              <div className="col-md-12 form-group">
                <button className='btn_3' >Log in</button>
                <div className="creat_account">
                  <input type="checkbox" />
                  <label >Remember me</label>
                </div>
                <a href="/product-checkout" className='lost_pass'> Lost your password</a>
              </div>
            </form>
          </div>
          <div className="cupon_area">
            <div className="check_title">
              <h2>Have a cupon?
                <a href="/product-checkout">Click here to enetr your code</a>
              </h2>
            </div>
            <input type="text" placeholder='Enter cupon code' />
            <a href="/product-checkout" className='tp_btn'>apply coupon</a>
          </div>
          <div className="billing_details">
            <div className="row">
              <div className="col-lg-8">
                <h3>Billing Details</h3>
                <form action="" className='row contact_form' method='post'>
                  <div className="col-md-6 form-group p_star">
                    <input type="text" placeholder='First Name' className='form-control' />
                  </div>
                  <div className="col-md-6 form-group p_star">
                    <input type="text" placeholder='First Name' className='form-control' />
                  </div>
                  <div className="col-md-12 form-group">
                    <input type="text" placeholder='Company Name' className='form-control' />
                  </div>
                  <div className="col-md-6 form-group p_star">
                    <input type="number" placeholder='Phone Number' className='form-control' />
                  </div>
                  <div className="col-md-6 form-group p_star">
                    <input type="email" placeholder='Email Address' className='form-control' />
                  </div>
                  <div className="col-md-12 form-group">
                    <select style={{ display: "none" }} className='country_select'>
                      <option value="1">Country</option>
                      <option value="2">Country</option>
                      <option value="3">Country</option>
                    </select>
                    <div className="nice-select country_select">
                      <span className='current'>Country</span>
                      <ul className='list'>
                        <li className='option selected'>Country</li>
                        <li className='option'>Country</li>
                        <li className='option'>Country</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <input type="text" placeholder='Address line 01' className='form-control' />
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <input type="text" placeholder='Address line 02' className='form-control' />
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <input type="text" placeholder='Address line 01' className='form-control' />
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <input type="text" placeholder='Town/City' className='form-control' />
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <select style={{ display: "none" }} className='country_select'>
                      <option value="1">District</option>
                      <option value="2">District</option>
                      <option value="3">District</option>
                    </select>
                    <div className="nice-select country_select">
                      <span className='current'>District</span>
                      <ul className='list'>
                        <li className='option selected'>District</li>
                        <li className='option'>District</li>
                        <li className='option'>District</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-12 form-group ">
                    <input type="text" placeholder='Postcode/ Zip' className='form-control' />
                  </div>
                  <div className="col-md-12 form-group ">
                    <div className="creat-account">
                      <input type="checkbox" />
                      <label className='ms-2' > Create an account?</label>
                    </div>
                    {/* <input type="email" placeholder='Email' className='form-control' />       */}
                  </div>
                  <div className="col-md-12 form-group ">
                    <div className="creat-account">
                      <h2>Shipping Details</h2>
                      <input type="checkbox" />
                      <label id='f-option3' className='ms-2' > Ship to a difference address?</label>
                    </div>
                    <textarea className='form-control w-100' rows="10" cols='30' placeholder='Order Notes'></textarea>
                  </div>


                </form>
              </div>
              <div className="col-lg-4">
                <div className="order_box">
                  <h2>Your Order</h2>
                  <ul className="list">
                    <li>
                      <a href="/product-checkout">
                        Product
                        <span>Total</span>
                      </a>
                    </li>
                    <li>
                      <a href="/product-checkout">
                        Fresh Blackberry
                        <span className='middle'>x 02</span>
                        <span className='last'>$720.00</span>
                      </a>
                    </li>
                    <li>
                      <a href="/product-checkout">
                      Fresh tomatoes
                        <span className='middle'>x 02</span>
                        <span className='last'>$720.00</span>
                     
                      </a>
                    </li>
                    <li>
                      <a href="/product-checkout">
                      Fresh Brocoli
                        <span className='middle'>x 02</span>
                        <span className='last'>$720.00</span>
                      </a>
                    </li>
                  </ul>

                  <ul className="list list_2">
                    <li>
                      <a href="/product-checkout">
                        Subtotal
                        <span>$2160</span>
                      </a>
                    </li>
                    <li>
                      <a href="/product-checkout">
                        Shipping
                        <span>Flate rate: $50.00</span>
                      </a>
                    </li>
                    <li>
                      <a href="/product-checkout">
                      Total
                        <span>$2210.00</span>
                     
                      </a>
                    </li>
                  </ul>
                  <div className="payment_item">
                    <div className="radion_btn">
                      <input type="radio" />
                      <label htmlFor="/" className='ps-2'>Check Payment</label>
                      <div className="check">
                        
                      </div>
                      </div>
                      <p>
                      Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                      </p>
                  </div>
                  <div className="payment_item active">
                    <div className="radion_btn">
                      <input type="radio" />
                      <label htmlFor="/" className='ps-2'>Paypal</label>
                      <img src={card} alt="" />
                      <div className="check">
                        
                      </div>
                      </div>
                      <p>
                      Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                      </p>
                  </div>
                  <div className="creat_account">
                    <input type="checkbox" id='fa-option4' />
                    <label htmlFor="/">I have read and accept </label>
                    <a href="/product-checkout"> terms and condition</a>
                  </div>
                  <a href="/product-checkout" className='btn_3'>Proceed to Paypal</a>

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
