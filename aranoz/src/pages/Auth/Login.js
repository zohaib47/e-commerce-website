import React from 'react'
import chair1 from '../../image/chair1.jpg'

export default function Login() {
  return (
    <>
     <section className='d-flex text-align-center'>
        <div className="container-fluid " style={{ backgroundColor: "#f0fcff" }}>
          <div className="container" >
            <div className="row mt-5">
              <div className="col-lg-7  text-center  ">
                <h1 style={{ fontSize: "35px", fontWeight: "700", marginTop: "80px" }}>Tracking Order</h1>
                <p className='text-secondary '>Home - Login</p>
              </div>
              <div className="col-lg-5 ">
                <img src={chair1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='login_part padding_top' style={{marginBottom:"0px"}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 ">
            <div className="login_part_text text-center  " >
            <div className="login_part_text_iner " >
              <h2>New to our Shop?</h2>
              <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
              <a href="/login" className='btn_3'> Create An Account </a>
            </div>
           </div>
            </div>
        
          <div className="col-lg-6 col-md-6">
            <div className="login_part_form">
              <div className="login_part_form_inner">
                <h3>Welcom Back ! <br />
                Please Sign in now
                </h3>
                <form action="/" className='row contact_form'>
                <div className="col-md-12 form-group p_star mb-2">
                    <input type="text" className='form-control' placeholder='Username' />
                  </div>
                   <div className="col-md-12 form-group p_star">
                    <input type="password" className='form-control mb-2' placeholder='Password' />
                  </div>
           
                  <div className="col-md-12 form-group">
                    <div className="creat_account d-flex align-items-center">
                      <input type="checkbox" />
                      <label> Remember me</label>
                    </div>
                    <button type='submit' className='btn_3'>Log in</button>
                    <a href="/login" className='lost_pass'>forget password?</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    
    </>
  )
}
