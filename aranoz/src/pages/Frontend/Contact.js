import React from 'react'
import chair1 from '../../image/chair1.jpg'
import icon_error from '../../image/icon_error.png'
export default function Contact() {
    return (
        <>
            <section className='d-flex text-align-center'>
                <div className="container-fluid " style={{ backgroundColor: "#f0fcff" }}>
                    <div className="container" >
                        <div className="row mt-5">
                            <div className="col-lg-7 col-md-8  text-center  ">
                                <h1 style={{ fontSize: "35px", fontWeight: "700", marginTop: "80px" }}>Contact Us</h1>
                                <p className='text-secondary '>Home - contact us</p>
                            </div>
                            <div className="col-5 col-xsm-12">
                                <img src={chair1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* 'Map */}
            <div className="container-fluid">
                <div className="container bg-body-secondary" style={{ backgroundColor: "#e9ecef", marginTop: "100px", marginBottom: "60px" }}>
                    <div className="row" >
                        <div className="col-12 text-center" style={{ margin: "180px 0px" }}>
                            <div className="">
                                <img src={icon_error} alt="" style={{ height: "50px" }} />
                            </div>
                            <div className='pt-2 '>
                                <p className='fs-3 text-dark'>Sorry! Something went wrong</p>
                            </div>
                            <div className="map pt-2">
                                <p style={{ fontSize: "12px" }} className='pt-1 fw-normal'>
                                    This page didn't load Google Map correctly. See the JavaScript console for technical details.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className='mb-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 border border-0">
                            <h2>Get in touch</h2>
                            <div class="form-floating mt-3">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "200px" }}></textarea>
                                <label for="floatingTextarea2">Enter Message</label>
                                <div class=" row my-4">
                                    <div class="col-12 col-lg-6">
                                        <input type="text" class="form-control  bg-transparent" placeholder="First Name"
                                            id="firstname" />
                                    </div>
                                    <div class="col-12 col-lg-6 mt-3 mt-lg-0">
                                        <input type="text" class="form-control  bg-transparent" placeholder="Last Name"
                                            id="lastname" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div class="col-12 mt-3 mt-lg-0">
                                        <input type="text" class="form-control  bg-transparent" placeholder="Subject"
                                            id="subject" />
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-12 mt-5  mt-lg-0">
                                    
                                      <a href="/" className='rounded-pill text-white p-3 mt-5' style={{backgroundColor:"#ff3368" }} >SEND MESSAGE</a>
                                        </div>  
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4  border border-0 ">
                           <div className="row mt-5">
                           <div className="col-2">
                            <span className='float-end text-secondary pt-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                                </svg>
                                </span>
                                </div>
                                <div className="col-10">
                                <span className=' ps-0'>
                                <p className='fs-6'> ButtonWood, california.</p>
                                <p className='text-secondary lh-sm'>Rosemead, CA 91770</p>
                            </span>
                            </div>
                           </div>
                           <div className="row mt-3">
                           <div className="col-2">
                            <span className='float-end text-secondary pt-1'>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg>
                                </span>
                                </div>
                                <div className="col-10">
                                <span className=' ps-0'>
                                <p className='fs-6'>00 (415) 6598526</p>
                                <p className='text-secondary lh-sm'>Mon to fri 9am to 6pm</p>
                            </span>
                            </div>
                           </div>
                           <div className="row mt-3">
                           <div className="col-2">
                            <span className='float-end text-secondary pt-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                               <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                            </svg>
                                </span>
                                </div>
                                <div className="col-10">
                                <span className=' ps-0'>
                                <p className='fs-6'>support@colorlib.com</p>
                                <p className='text-secondary lh-sm'>Send us your query anytime!</p>
                            </span>
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
