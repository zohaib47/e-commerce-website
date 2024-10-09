import React from 'react'
import chair1 from '../../image/chair1.jpg'
import cart1 from '../../image/client-logo/cart-1.webp'
export default function ShoppingCart() {
  return (
    <>
      <section className='d-flex text-align-center'>
        <div className="container-fluid " style={{ backgroundColor: "#f0fcff" }}>
          <div className="container" >
            <div className="row mt-5">
              <div className="col-lg-7 col-md-8  text-center  ">
                <h1 style={{ fontSize: "35px", fontWeight: "700", marginTop: "80px" }}>Shoping Cart</h1>
                <p className='text-secondary '>Home - shoping cart</p>
              </div>
              <div className="col-lg-5 col-md-4">
                <img src={chair1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=' cart_area padding_top mb-5' >
        <div className="container">
          <div className="cart_inner">
            <div className="responsive-table">
              <table className='table mb-5'>
                <thead>
                  <tr>
                    <th scope='col'>Product</th>
                    <th scope='col'>Price</th>
                    <th scope='col'>Quantity</th>
                    <th scope='col'>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="media">
                        <div className="d-flex">
                          <img src={cart1} alt="" />
                        </div>
                        <div className="media-body">
                          <p>Minimalistic shop for multipurpose use</p>
                        </div>
                      </div>
                    </td>
                    <td><h5>
                      $360.00
                    </h5>
                    </td>
                    <td>
                      <div className="product_count ">
                        <input type="text" className='input-number' value={1} min={0} max={10} />
                      </div>
                    </td>
                    <td>
                      <h5>
                        $720.00
                      </h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="media">
                        <div className="d-flex">
                          <img src={cart1} alt="" />
                        </div>
                        <div className="media-body">
                          <p>Minimalistic shop for multipurpose use</p>
                        </div>
                      </div>
                    </td>
                    <td><h5>
                      $360.00
                    </h5>
                    </td>
                    <td>
                      <div className="product_count ">
                        <input type="text" className='input-number' value={1} min={0} max={10} />
                      </div>
                    </td>
                    <td>
                      <h5>
                        $720.00
                      </h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="media">
                        <div className="d-flex">
                          <img src={cart1} alt="" />
                        </div>
                        <div className="media-body">
                          <p>Minimalistic shop for multipurpose use</p>
                        </div>
                      </div>
                    </td>
                    <td><h5>
                      $360.00
                    </h5>
                    </td>
                    <td>
                      <div className="product_count ">
                        <input type="text" className='input-number' value={1} min={0} max={10} />
                      </div>
                    </td>
                    <td>
                      <h5>
                        $720.00
                      </h5>
                    </td>
                  </tr>
                  <tr className='bottom_button'>
                    <td>

                      <a href="/shoping-cart" className='btn_1'>Update Cart</a>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <div className="cupon_text float-right">
                        <a href="/shoping-cart" className='btn_1'> Close Coupon</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      <h5>Subtotal</h5>
                    </td>
                    <td>
                      <h5>$2160.00</h5>
                    </td>
                  </tr>
                  <tr className='shipping_area'>
                    <td></td>
                    <td></td>
                    <td>
                      <h5>Shipping</h5>
                    </td>
                    <td>
                      <div className="shipping_box">
                        <ul className="list">
                          <li>
                            <a href="/shoping-cart">
                              Flate Rate: $05.00
                            </a>
                          </li>
                          <li>
                            <a href="/shoping-cart">
                              Free Shipping
                            </a>
                          </li>
                          <li>
                            <a href="/shoping-cart">
                              Flate Rate: $10.00
                            </a>
                          </li>
                          <li className='active'>
                            <a href="/shoping-cart">
                              Local Delivery: $02.00
                            </a>
                          </li>
                        </ul>
                        <h6>
                          Calculate Shipping
                          <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                          </svg></i>
                        </h6>
                        <select  className="shipping_select ps-2" >
                          <option value="1">Pakistan</option>
                          <option value="2">China</option>
                          <option value="3">India</option>
                        </select>
                        {/* <div className="nice-select shipping_select">
                          <span className='list'>Pakistan</span>
                          <ul  className="shipping_select">
                          <li value="1" className='option selected'>Pakistan</li>
                          <li value="2" className='option'>China</li>
                          <li value="3" className='option'>India</li>
                        </ul>
                        </div> */}
                        <select  className="shipping_select ps-2" >
                          <option value="1">Select a State</option>
                          <option value="2">Select a State</option>
                          <option value="3">Select a State</option>
                        </select>
                        {/* <div className="nice-select shipping_select">
                          <span className='current'>Select a State</span>
                          <ul  className="list">
                          <li value="1" className='option selected'>Select a State</li>
                          <li value="2" className='option'>Select a State</li>
                          <li value="3" className='option'>Select a State</li>
                        </ul>
                        </div> */}
                        <input type="text" placeholder='Postcode/Zipcode' name="" id="" />
                        <a href="/shoping-cart" className='btn_1 tp_btn' >Update Details</a>
                      </div>
                    </td>
                  </tr>
                </tbody>

              </table>
              <div className="checkout_btn_inner float-right">
                <a href="/shoping-cart" className='btn_1 tp_btn me-2 mt-2'>Continue Shopping</a>
                <a href="/shoping-cart" className='btn_1 tp_btn mt-2'>Proceed Checkout</a>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}
