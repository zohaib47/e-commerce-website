import React from 'react'
import chair1 from '../../image/chair1.jpg'

export default function Confirmation() {

  return (
   <>
     <section className='d-flex text-align-center'>
        <div className="container-fluid " style={{ backgroundColor: "#f0fcff" }}>
          <div className="container" >
            <div className="row mt-5">
              <div className="col-lg-7 col-md-8  text-center  ">
                <h1 style={{ fontSize: "35px", fontWeight: "700", marginTop: "80px" }}>Shoping Cart</h1>
                <p className='text-secondary '>Home - Confirmation</p>
              </div>
              <div className="col-lg-5 col-md-4">
                <img src={chair1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="confirmation_part padding_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="confirmation_tittle">
                <span style={{color:"#ff3368"}}>Thank you. Your order has been received.</span>
              </div>
            </div>
            <div className="col-lg-6 col-lx-4">
              <div className="single_confirmation_details">
                <h4>Order Info</h4>
                <ul>
                  <li>
                    <p>Order Number</p>
                    <span>:60456</span>
                  </li>
                  <li>
                    <p>Date</p>
                    <span>:Aug 04,2023</span>
                  </li>
                  <li>
                    <p>Total</p>
                    <span>:PKR 92298</span>
                  </li>
                  <li>
                    <p>Payment Method</p>
                    <span>:Check Payment</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-lx-4">
              <div className="single_confirmation_details">
                <h4>Billing Address</h4>
                <ul>
                  <li>
                    <p>Street</p>
                    <span>:34/2</span>
                  </li>
                  <li>
                    <p>City</p>
                    <span>:Fasialabad</span>
                  </li>
                  <li>
                    <p>Country</p>
                    <span>:Pakistan</span>
                  </li>
                  <li>
                    <p>Postal Code</p>
                    <span>:34586 </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-lx-4">
              <div className="single_confirmation_details">
                <h4>Shipping Address</h4>
                <ul>
                  <li>
                    <p>Street</p>
                    <span>:34/2</span>
                  </li>
                  <li>
                    <p>City</p>
                    <span>:Fasialabad</span>
                  </li>
                  <li>
                    <p>Country</p>
                    <span>:Pakistan</span>
                  </li>
                  <li>
                    <p>Postal Code</p>
                    <span>:34586 </span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="order_details_iner">
                <h3>Order details</h3>
                <table className='table-borderless  '>
                  <thead>
                    <tr>
                      <th scope='col' colSpan={2}>Product</th>
                      <th scope='col'>Quantity</th>
                      <th scope='col'>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th colSpan={2}>
                        <span>PixelStore fresh Blackberry</span>
                      </th>
                      <th>x02</th>
                      <th>
                        <span>$720.00</span>
                      </th>
                    </tr>
                    <tr>
                      <th colSpan={2}>
                        <span>PixelStore fresh Blackberry</span>
                      </th>
                      <th>x02</th>
                      <th>
                        <span>$720.00</span>
                      </th>
                    </tr>
                    <tr>
                      <th colSpan={2}>
                        <span>PixelStore fresh Blackberry</span>
                      </th>
                      <th>x02</th>
                      <th>
                        <span>$720.00</span>
                      </th>
                    </tr>
                    <tr>
                      <th colSpan={3}>
                        <span>Subtotal  </span>
                      </th>
                      <th>
                        <span>$6458.00</span>
                      </th>
                    </tr>
                    <tr>
                      <th colSpan={3}>
                        <span>Shipping  </span>
                      </th>
                      <th>
                        <span> flate rate :$50.00</span>
                      </th>
                    </tr>
                  </tbody>
                  <tfoot>
                    
                    <tr>
                      <th colSpan={3}>
                        Quantity 
                      </th>
                      <th>
                        Total
                      </th>
                    </tr>
                  </tfoot>

                </table>

              </div>
            </div>
          </div>
        </div>
      </section>
   
   </>
  )
}
