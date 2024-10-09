import React, { useState, useEffect} from 'react'
// import Buttons from '../../components/Buttons'
import chair1 from '../../image/chair1.jpg'
import chair2 from '../../image/chair2.png'
import chair3 from '../../image/chair3.png'
import sofa1 from '../../image/sofa1.png'
import sofa2 from '../../image/sofa2.png'
import product1 from '../../image/product1.webp'
import product2 from '../../image/product2.webp'
import product3 from '../../image/product3.webp'
import product4 from '../../image/product4.webp'
import product5 from '../../image/product5.webp'
import product6 from '../../image/product6.webp'
import product7 from '../../image/product7.webp' 
import offer from '../../image/offer.png'
import logo1 from '../../image/client-logo/logo1.webp'
import logo2 from '../../image/client-logo/logo2.webp'
import logo3 from '../../image/client-logo/logo3.webp'
import logo4 from '../../image/client-logo/logo4.webp'
import logo5 from '../../image/client-logo/logo5.webp'

export default function Home() {

  const shot = () => {

    // onmouseenter="Add me"
    alert("great shot");
  }

  // time
  const current = new Date();
  const second = current.toLocaleTimeString("en-US", {
    second: "2-digit"
  });
  const minute = current.toLocaleTimeString("en-US", {
    minute: "2-digit",
  });
  const hours = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    hour12: false
  });
 
  let time=new Date().toLocaleTimeString();
  
  const [ctime, setCtime]=useState(time);
  const UpdateTime=()=>{
    time = new Date().toLocaleTimeString();
    setCtime(time);
  }
  setInterval(UpdateTime, 1000)
  


  return (
    <>
      <main>
           <section>
            {/* first portion */}
<div className="container-fluid"  style={{ backgroundColor:"#f0fcff" }}>
<div className="container" >
<div className="row">
  <div className="col-lg-5 " style={{paddingTop:"85px",paddingLeft:"40px"}}>
    <h1 style={{ marginBottom: "40px",marginTop:"75px", fontSize: "70px", lineHeight:"72px", fontWeight:"800",fontFamily:"sans-serif", color:"black"  }}>Cloth & <br /> Wood Sofa</h1>
    <p style={{ fontSize:"15px", marginBottom:"70px",  }}>Dolore earum culpa qui quibusdam necessitatibus id ad inciduntItaque,
        perferendis quibusdam sapiente! commodo vivera</p>
      <a href="/" className='btn_2'>BUY NOW</a>
  </div>
  <div className="col-lg-7 ">
     <img src={sofa1} alt="" style={{margin:"198px 0px"}}  />
  </div>
</div>
</div>
</div>
           </section>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className='mb-0 text-center' style={{ color: "black", marginTop: "100px" }} >Featured Category</h1>

              <div class="row" style={{ marginTop: "100px" }}>
                <div class="col-sm-7 col-12">
                  <div class="card" style={{ backgroundColor: "#e3f2fd", border: "none" }}>
                    <div className="row" style={{ padding: "50px 40px 40px 40px" }}>
                      <div className="col-6">
                        <div class="card-body">
                          <p class="card-title">Premium Quality</p>
                          <h3 class="card-text">Latest Foam Sofa</h3>
                          {/* <a href="/" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                      </div>
                      <div className="col-6">
                        <img src={chair1} alt="" style={{ borderRadius: "20px" }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div class=" col-sm-5 col-12">
                  <div class="card" style={{ backgroundColor: "#edf2f4", border: "none", }}>
                    <div class="card-body">
                      <div className="row" style={{ padding: "50px 40px 40px 40px" }}>
                        <div className="col-6">
                          <p class="card-title">Premium Quality</p>
                          <h3 class="card-text">Latest Foam Sofa</h3>
                          {/* <a href="/" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                        <div className="col-6">
                          <img src={chair2} alt="" style={{ height: "340px", borderRadius: "25px" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>



              <div class="row" style={{ marginTop: "40px" }}>
                <div class="col-sm-5 col-12">
                  <div class="card" style={{ backgroundColor: "#e3f2fd", border: "none" }}>
                    <div className="row" style={{ padding: "50px 40px 40px 40px" }}>
                      <div className="col-12">
                        <div class="card-body">
                          <p class="card-title">Premium Quality</p>
                          <h3 class="card-text">Latest Foam Sofa</h3>
                          {/* <a href="/" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                      </div>
                      <div className="col-12">
                        <img src={chair3} alt="" style={{ height: "240px", borderRadius: "20px", float: "right" }} />

                      </div>
                    </div>
                  </div>
                </div>
                <div class=" col-sm-7 col-12">
                  <div class="card" style={{ backgroundColor: "#edf2f4", border: "none", }}>
                    <div class="card-body">
                      <div className="row" style={{ padding: "50px 40px 40px 40px" }}>
                        <div className="col-12">
                          <p class="card-title">Premium Quality</p>
                          <h3 class="card-text">Latest Foam Sofa</h3>
                          {/* <a href="/" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                        <div className="col-12">
                          <img src={sofa2} alt="" style={{ height: "240px", borderRadius: "20px", float: "right" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         

          {/*awesom shop*/}

          <div className="row my-5">
            <div className="col">
              <h1 className='fw-bolder'>Awesom <span className='fw-lighter'>Shop</span></h1>
              <div className='d-flex justify-content-end '>
                <button className='btn btn-light border-righr border-5'>Next</button>
                <button className='btn btn-light'>previous</button>
              </div>
            </div>
          </div>

          {/* first row */}
          <div className="row ">
            <div className="col-lg-3 col-sm-6 ">
              <div className="card  border border-0" >
                <div className="col-12 awesom" >
                  <img src={product1} alt="" width="100%" height="100%" />
                  <p className="card-title fs-5 fw-bold pt-5">Qurtaz Belt Watch </p>
                  <p className="card-text fs-3">$150.00</p>
                  {/* <a href="/" className='add_cart'>+ add to cart
                  <i className='ti-heart px-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                      </svg>
                  </i>
                  </a> */}
                </div>
              </div>
            </div >

            <div className="col-lg-3 col-sm-12">
              <div className="card  border border-0">
              <div className="col-12  awesom">
              <img src={product2} alt=""  width="100%" height="100%" />
              
               <p className="card-title fs-5 fw-bold pt-5">Qurtaz Belt Watch </p>
                <p className="card-text">$150.00</p>
           
              </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 ">
              <div className="card  border border-0">
              <div className="col-12  awesom">
                <img src={product3} alt=""  width="100%" height="100%" />
                <p className="card-title fs-5 fw-bold pt-5">Qurtaz Belt Watch </p>
                <p className="card-text">$150.00</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12">
              <div className="card border border-0">
              <div className="col-12  awesom">
                <img src={product4} alt=""  width="100%" height="100%" />
                <p className="card-title fs-5 fw-bold pt-5">Qurtaz Belt Watch </p>
                <p className="card-text">$150.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* second row */}

          <div className="row mt-5">
            <div className="col-lg-3 col-sm-12">
              <div className="card  border border-0 " >
                <div className="col-12  awesom" >
                  <img src={product5} alt="" width="100%" height="100%" />
                  <p className="card-title fs-5 fw-bold pt-5">Qurtaz Belt Watch </p>
                  <p className="card-text">$150.00</p>
                </div>
              </div>
            </div >

            <div className="col-lg-3 col-sm-12 ">
              <div className="card  border border-0">
              <div className="col-12  awesom">
                <img src={product6} alt="" width="100%" height="100%"  />
                <p className="card-title fs-5 fw-bold pt-5">Qurtaz Belt Watch </p>
                <p className="card-text">$150.00</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 ">
              <div className="card  border border-0">
              <div className="col-12  awesom">
                <img src={product1} alt="" width="100%" height="100%"  />
                <p className="card-title fs-5 fw-bold pt-5">Qurtaz Belt Watch </p>
                <p className="card-text">$150.00</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 ">
              <div className="card border border-0" onClick={shot}>
              <div className="col-12  awesom">
                <img src={product7} alt="" width="100%" height="100%"  />
                <p className="card-title fs-5 fw-bold pt-5">Qurtaz Belt Watch </p>
                <p className="card-text">$150.00</p>
                </div>
              </div>
            </div>
          </div>
          </div>



          <div className="container-fluid"  style={{ marginTop: "200px", backgroundColor: "#f0fcff" }} >
            <div className="container">
            <div className="row  ">
              <div className="col-lg-5  ">
                <img src={offer} alt="" style={{ padding: "150px 20px" }} />
              </div>
              <div className="col-lg-7 " >
                <div className="row" style={{ paddingTop: "150px" }}>
                  <div className="col-10 offset-1 ">
                    <h1 className='' style={{ fontSize: "56px", fontWeight: "bold", }}>Weekly Sale on 60% <br /> Off All Products</h1>
                    <div class="container d-flex py-5 ">
                      <div class="box px-4 border-end border-dark  "> <span style={{fontWeight:"bold",color:"grey", fontSize:"14px",}}>DAYS</span> <br /> <span style={{fontSize:" 30px" , fontWeight:"bolder" }}>-1390</span></div>
                      <div class="box px-4 border-end border-dark "> <span style={{fontWeight:"bold",color:"grey", fontSize:"14px",}}>HOURS</span> <br /> <span style={{fontSize:" 30px" , fontWeight:"bolder" }}>{hours}</span> </div>
                      <div class="box px-4 border-end border-dark ">  <span style={{fontWeight:"bold",color:"grey", fontSize:"14px",}}>MINUTES</span> <br /> <span style={{fontSize:" 30px" , fontWeight:"bolder" }}>{minute}</span></div>
                      <div class="box px-4 "> <span style={{fontWeight:"bold",color:"grey", fontSize:"14px",}}>SECOND</span> <br /> <span style={{fontSize:" 30px" , fontWeight:"bolder" }}> {second} </span> </div>
                      {/* <p>{time}</p>
                      <button onClick={UpdateTime}>time</button> */}
                    </div>
                  </div>  
                </div>
                <div className="input-group offer-text  mb-2">
                <input type="text " className='form-control border border-0' placeholder='enter email address'  />
                <div className="input-group-append">
                  <a href="/" className='input=group-text btn_2 '>book now</a>
                </div>
              </div>
              </div>
              </div>
            </div>
          </div>
        
                 {/*Bestsaller */}
          <div className="container bestsaller">
            <div className="row">
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

       

        <section className="subscribe-area section-padding">
          <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="subscribe-area-center text-center">
                <h5 style={{ fontSize:"14px", fontWeight:"400", color:"#ff3368", letterSpacing:"2px" }}>JOIN OUR NEWSLETTER</h5>
                <h2 style={{fontSize:"48px", fontWeight:"700", lineHeight:"60px" , margin:"35px 0 67px" }}>Subscribed to get updates with new offers</h2>
              
              <div className="input-group">
                <input type="text " className='form-control border border-0' placeholder='enter email address' />
                <div className="input-group-append">
                  <a href="/" className='input_group-text btn_2 ms-2'>subscribe now</a>
                </div>
              </div>
            </div>
            </div>
            </div>
          </div>
        </section>
        <section className='client_logo padding_top' >
          <div className="container">
            <div className="row align-item-center">
              <div className="col-lg-12">
                <div className="single_client_logo">
                  <img src={logo1} alt="" />
                </div>
                <div className="single_client_logo">
                  <img src={logo2} alt="" />
                </div> 
                <div className="single_client_logo">
                  <img src={logo3} alt="" />
                </div>
                 <div className="single_client_logo">
                  <img src={logo4} alt="" />
                </div>
                 <div className="single_client_logo">
                  <img src={logo5} alt="" />
                </div> 
                <div className="single_client_logo">
                  <img src={logo3} alt="" />
                </div>
                <div className="single_client_logo">
                  <img src={logo1} alt="" />
                </div> 
                <div className="single_client_logo">
                  <img src={logo2} alt="" />
                </div>
                 <div className="single_client_logo">
                  <img src={logo5} alt="" />
                </div>
                 <div className="single_client_logo">
                  <img src={logo4} alt="" />
                </div>


              </div>
            </div>
          </div>

        </section>
        
       
      </main>

    </>
  )
}
