import React from 'react'
import chair1 from '../../image/chair1.jpg'

export default function Tracking() {
  return (
    <>

<section className='d-flex text-align-center'>
        <div className="container-fluid " style={{ backgroundColor: "#f0fcff" }}>
          <div className="container" >
            <div className="row mt-5">
              <div className="col-lg-7 col-md-8 col-sm-8   text-center  ">
                <h1 style={{ fontSize: "35px", fontWeight: "700", marginTop: "80px" }}>Tracking Order</h1>
                <p className='text-secondary '>Home - Tracking Order</p>
              </div>
              <div className="col-lg-5 col-md-4 col-sm-4 ">
                <img src={chair1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=' tracking_box_area  padding_top' style={{ marginBottom:"100px"}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="tracking_box_inner">
                <p style={{ maxWidth:"870px", color:"#2a2a2a", marginBottom:"25px"}}>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
               <form action="/" className='row tracking_form' style={{ maxWidth:"645px"}}>
                <div className="col-md-12 form-group" style={{ marginBottom:"30px"}}>
                  <input type="text" className='form-control' placeholder='Order ID' />
                </div>
                <div className="col-md-12 form-group">
                  <input type="email" className='form-control' placeholder='Billing Email Address' />
                </div>
                <div className="col-md-12 form-group">
                  <button type='submit' className='btn_3'>Track Order</button>
                </div>
               </form>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}
