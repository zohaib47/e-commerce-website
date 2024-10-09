import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.css'
import chair1 from '../../image/chair1.jpg'
import product8 from '../../image/product8.png'
import 'react-multi-carousel/lib/styles.css';
import img1 from '../../image/product1.webp'
import img2 from '../../image/product2.webp'
import img3 from '../../image/product3.webp'
import myimg from '../../image/review1.png'
import myimg1 from '../../image/review2.png'
import myimg2 from '../../image/review3.png'

export default function Product() {
    // counter
    let [count, setCount]= useState(0)
    const handleIncrement = ()=>{
    
        setCount(count +1)
    }
    const handleDecrement = ()=>{
       count >0 && setCount(count -1)
      
    }
    const startInterval =()=>{
        setInterval(() => {
            setCount(c=> (c + 1))
        }, 1000);
    }



  const [currentDiv, setCurrentDiv] = useState(1);
    
  const showDiv = (divNumber) => {
    setCurrentDiv(divNumber);
  };

    return (
        <>
            <section className='d-flex text-align-center'>
                <div className="container-fluid " style={{ backgroundColor: "#f0fcff" }}>
                    <div className="container" >
                        <div className="row mt-5">
                            <div className="col-lg-7 col-md-8  text-center  ">
                                <h1 style={{ fontSize: "35px", fontWeight: "700", marginTop: "80px" }}>Product Details</h1>
                                <p className='text-secondary '>Home - Shop Single</p>
                            </div>
                            <div className="col-lg-5 col-md-4">
                                <img src={chair1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section  style={{ marginTop:"100px"}}> */}
            <div className="section_padding" style={{ padding: " 140px 0" }}>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-7 col-xl-7 d-flex ">
                            <div className="product_slider" >
                                <img src={product8} alt="" />
                            </div>
                            <ul style={{ listStyle: "none", float: "right", marginLeft: "100px" }}>
                                <li style={{ width: '100px', height: '146px', marginBottom: '5px', border: "1px" }}>
                                    <a href="/product">
                                        <img src={product8} alt="" className='border p-1' />
                                    </a>
                                </li>
                                <li style={{ width: '100px', height: '146px', marginBottom: '5px' }}>
                                    <a  href="/product">
                                        <img src={product8} alt="" className='border p-1' />
                                    </a>
                                </li>
                                <li style={{ width: '100px', height: '146px', marginBottom: '5px' }}>
                                    <a href="/product">
                                        <img src={product8} alt="" className='border p-1' />
                                    </a>
                                </li>

                            </ul>
                        </div>
                        <div className="col-lg-4 ms-5">
                            <div className="product_text" >
                                <h5 className='pt-3' style={{ fontWeight: "800", marginBottom: "40px", textTransform: "capitalize", fontSize: "16px" }}>previous
                                    <span style={{ margin: "0px 10px" }}>|</span>
                                    next
                                </h5>
                                <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "10px", color: "#2a2a2a", textTransform: "capitalize" }}>faded sky blue danim jeans</h3>
                                <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "15px", color: "#ff3368" }}>$149.99</h2>
                                <ul style={{ listStyle: "none", }}>
                                    <li className='mb-3 '>
                                        <a href="/product" style={{ color: "#ff3368", fontSize: "14px", textDecoration: "none" }}>
                                            <span style={{ color: "#555", width: "90px", display: "inline-block" }}> Category </span>
                                            :   Houshold
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/product" style={{ color: "#555", fontSize: "14px", textDecoration: "none" }}>
                                            <span style={{ width: "90px", display: "inline-block" }}> Availibility </span>
                                            :   In Stock
                                        </a>
                                    </li>
                                </ul>
                                <p style={{ paddingTop: "20px", margin: "20px 0", borderTop: "1px dotted #d5d5d5" }}>First replinsh Living. Creepth image image. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, molestiae error. </p>

                                <div className="card_area d-flex justify-content-between align-items-center" style={{ borderTop: "1px solid #dddddd", borderBottom: "1px solid #dddddd", padding: "20px 0" }}>
                                    <div className="product_count" style={{ border: "1px solid #ddd", borderRadius: "50px", display: "flex", alignItems: "center", padding: "12px 15px" }}>
                                        <span className='inumber-decrement'>
                                            <i>
                                                <svg  onClick={handleDecrement} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" /></svg>
                                            </i>
                                        </span>
                                        <span>
                                        <input type= " text"className='input-number text-center' value={count} min={'0'} max={'10'} style={{ border: "0px solid transparent", width: "60px", display: "inline-block" }} />

                                        </span>
                                        <span className='inumber-increment'>
                                            <i>
                                                <svg onClick={handleIncrement} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" /></svg>
                                            </i>
                                        </span>
                                    </div>
                                    <a href="/product" className='btn_3' style={{ padding: "13px 36px", border: "1px solid #ff3368", backgroundColor: "#ff3368", borderRadius: "50px", fontSize: "15px", color: "#fff", textTransform: "uppercase", fontWeight: '400', boxShadow: "#ff3368" }}>
                                        add to cart</a>
                                    <a href="/product" style={{ borderRadius: "50%", backgroundColor: "#f8f9fa", width: "50px", height: "50px", lineHeight: "46px", color: "#7f7f7f", textAlign: "center", textDecoration: "none" }}>
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                            </svg>
                                        </i>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-xlg-7 col-sm-8 md-sm-2">
                        <div className="button bg-white border-0">
                            <button className='button_product mt-2' onClick={() => showDiv(1)} style={{ backgroundColor: currentDiv === 1 ? '#ff3368' : 'transparent' , color: currentDiv === 1 ? "white" : "black"  }}>Description</button>
                            <button className='button_product mt-2' onClick={() => showDiv(2)} style={{ backgroundColor: currentDiv === 2 ? '#ff3368' : 'transparent' , color: currentDiv === 2 ? "white" : "black"  }}>Specification</button>
                            <button className='button_product mt-2' onClick={() => showDiv(3)} style={{ backgroundColor: currentDiv === 3 ? '#ff3368' : 'transparent' , color: currentDiv === 3 ? "white" : "black"  }}>Comments</button>
                            <button className='button_product mt-2' onClick={() => showDiv(4)} style={{ backgroundColor: currentDiv === 4 ? '#ff3368' : 'transparent' , color: currentDiv === 4 ? "white" : "black"  }}>Review</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Description */}
            <div className="container" style={{ display: currentDiv === 1 ? 'block' : 'none' }}>
            <div className="row">
                    <div className="paragraph mt-5">
                        <p style={{color:'#353535;', backgroundColor:'bgcolor'}}>
                            Beryl Cook is one of Britain’s most talented and amusing artists .Beryls pictures feature women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. 
                            He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work,
                             a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband andIt is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for 
                             college are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less
                         <i className='bi bi-android2'>icon</i>
                        </p>
                    </div>
                </div>
            </div>
            {/*   specification */}
            <div className=" tab-pan  container my-5 " style={{ display: currentDiv === 2 ? 'block' : 'none' }}>
                <div className="table-responsive">
                    <table className='table'>
                        <tbody>
                            <tr>
                                <td>
                                    <h5>width</h5>
                                </td>
                                <td>
                                    <h5>128mm</h5>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h5>height</h5>
                                </td>
                                <td>
                                    <h5>508mm</h5>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h5>depth</h5>
                                </td>
                                <td>
                                    <h5>85mm</h5>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h5>weight</h5>
                                </td>
                                <td>
                                    <h5>54mm</h5>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h5>quality checking</h5>
                                </td>
                                <td>
                                    <h5>yes</h5>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h5>freshness duration</h5>
                                </td>
                                <td>
                                    <h5>03days</h5>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h5>when packting</h5>
                                </td>
                                <td>
                                    <h5>without touch of hand</h5>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h5>each box contains</h5>
                                </td>
                                <td>
                                    <h5>60pcs</h5>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* comment */}
            <div className="container mt-5" style={{ display: currentDiv === 3 ? 'block' : 'none' }}>
                <div className="row">
                    <div className="col-lg-6 ">
                        <div className="comment_list">
                            <div className="review_item " >
                                <div className="media ">
                                    <div className="d-flex">
                                        <img src={myimg} alt="" />
                                    </div>
                                    <div className="media-body " >
                                        <h4 >Blake Ruize</h4>
                                        <h5 >12th Feb, 2022 at 05:36 pm</h5>
                                        <a href="/" className='reply_btn ' >Reply</a>

                                    </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                </p>
                            </div>

                            <div className="review_item">
                                <div className="media">
                                    <div className="d-flex">
                                        <img src={myimg1} alt="" />
                                    </div>
                                    <div className="media-body ">
                                        <h4>Blake Ruize</h4>
                                        <h5>12th Feb, 2022 at 05:36 pm</h5>
                                        <a href="/" className='reply_btn'>Reply</a>
                                    </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                </p>
                            </div>

                            <div className="review_item">
                                <div className="media">
                                    <div className="d-flex">
                                        <img src={myimg2} alt="" />
                                    </div>
                                    <div className="media-body">
                                        <h4>Blake Ruize</h4>
                                        <h5>12th Feb, 2022 at 05:36 pm</h5>
                                        <a href="/" className='reply_btn'>Reply</a>
                                    </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6">
                        <div className="review_box">
                            <h4 className='pt-3'>Post a comment</h4>
                            <form className='row contact_form' method='post' action="contact_process.php">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" className='form-control' name='name' placeholder='Your Full nmae' />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="email" className='form-control' name='email' placeholder='Your Full nmae' />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="number" className='form-control' name='number' placeholder='Your Full nmae' />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea name="message" className='form-control' id="" rows="1" placeholder='Message'></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12 text-right">
                                    <button type='submit' value={'submit'} className='btn_3'>Submit Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Review */}

            <div className="container mt-5" style={{ display: currentDiv === 4 ? 'block' : 'none' }}>
                <div className="row">
                    <div className="col-lg-6 ">
                        <div className="row total_rate">
                            <div className="col-lg-6">
                                <div className="box_total">
                                    <h5>Overall</h5>
                                    <h4>4.0</h4>
                                    <h6>(03 Reviews)</h6>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="rating_list">
                                    <h3>Based on 3 Reviews</h3>
                                    <ul className='list'>
                                        <li>
                                            <a>
                                                05 star
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg> 
                                                01
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                04 star
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg> 
                                                01
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                03 star
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg> 
                                                01
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                02 star
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg> 
                                                01
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                01 star
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg> 
                                                01
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            </div>
                        <div className="review_item">
                                <div className="media">
                                    <div className="d-flex">
                                    </div>
                                    </div>
                                    </div>
                            <div className="review_item">
                                <div className="media">
                                    <div className="d-flex">
                                        <img src={myimg2} alt="" />
                                    </div>
                                    <div className="media-body">
                                        <h4>Blake Ruize</h4>
                                        
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>

                                        
                                    </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                </p>
                            </div>
                            <div className="review_item">
                                <div className="media">
                                    <div className="d-flex">
                                        <img src={myimg1} alt="" />
                                    </div>
                                    <div className="media-body">
                                        <h4>Blake Ruize</h4>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                       
                                    </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                </p>
                            </div>
                            <div className="review_item">
                                <div className="media">
                                    <div className="d-flex">
                                        <img src={myimg} alt="" />
                                    </div>
                                    <div className="media-body">
                                        <h4>Blake Ruize</h4>
                                      
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>

                                    </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                </p>
                            </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="review_box">
                            <h4>Add a Review</h4>
                            <p>Your Rating:</p>
                            <ul className='list'>
                                <li>
                                <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                </a>
                                            <a href="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            </a>
                                            <a href="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            </a>
                                            <a href="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            </a>
                                            <a href="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            </a>
                                </li>
                            </ul>
                            <p>Outstanding</p>
                            <form className='row contact_form' method='post' action="contact_process.php">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" className='form-control' name='name' placeholder='Your Full nmae' />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="email" className='form-control' name='email' placeholder='Your Full nmae' />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="number" className='form-control' name='number' placeholder='Your Full nmae' />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea name="message" className='form-control' id="" rows="1" placeholder='Message'></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12 text-right">
                                    <button type='submit' value={'submit'} className='btn_3'>Submit Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

          


            <section className='best_seller_shop' style={{ marginBottom: "180px" }}>
                <div className="container bestseller">
                    <div className="row mb-5">
                        <div className="col-12 col-lg-12">
                            <p className='' style={{ fontSize: "46px", fontWeight: "bold", marginTop: "98px" }}>Best sellers <span className='text-secondary' style={{ paddingLeft: "50px", fontSize: "22px", }}>shop</span></p>
                        </div>
                        <div className="col-12  ">
                            <p style={{ display: "flex", float: "right", fontSize: "14px" }}>
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
                                    <img src={img1} alt="" width="100%" height="100%" />
                                    <p className="card-title fs-5 fw-bold pt-5">Qurtaz Belt Watch </p>
                                    <p className="card-text">$150.00</p>
                                </div>
                            </div>
                        </div >

                        <div className="col-3 ">
                            <div className="card  border border-0">
                                <img src={img3} alt="" />
                                <p className="card-title fs-5 fw-bold pt-5">Qurtaz Belt Watch </p>
                                <p className="card-text">$150.00</p>
                            </div>
                        </div>
                        <div className="col-3 ">
                            <div className="card  border border-0">
                                <img src={img2} alt="" />
                                <p className="card-title fs-5 fw-bold pt-5">Qurtaz Belt Watch </p>
                                <p className="card-text">$150.00</p>
                            </div>
                        </div>
                        <div className="col-3 ">
                            <div className="card border border-0">
                                <img src={img3} alt="" />
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
