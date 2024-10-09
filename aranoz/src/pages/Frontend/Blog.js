import React from 'react'
import chair1 from '../../image/chair1.jpg'
import single1 from '../../image/single_blog_1.png.webp'
import single2 from '../../image/single_blog_2.png.webp'
import single3 from '../../image/single_blog_3.png.webp'
import single4 from '../../image/single_blog_4.png.webp'
import single5 from '../../image/single_blog_5.png.webp'
import post1 from '../../image/post_1.webp'
import post2 from '../../image/post_2.webp'
import post3 from '../../image/post_3.webp'
import post4 from '../../image/post_4.webp'
import post5 from '../../image/post_5.webp'
import post6 from '../../image/post_6.webp'
import post7 from '../../image/post_7.webp'
import post8 from '../../image/post_8.webp'
import post9 from '../../image/post_9.webp'
import post10 from '../../image/post_10.webp'

export default function Blog() {
  return (
    <>
    <section className='d-flex text-align-center'>
                <div className="container-fluid " style={{ backgroundColor: "#f0fcff" }}>
                    <div className="container" >
                        <div className="row mt-5">
                            <div className="col-lg-7   text-center  ">
                                <h1 style={{ fontSize: "35px", fontWeight: "700", marginTop: "80px" }}>Shop Single</h1>
                                <p className='text-secondary '>Home - Shop Single</p>
                            </div>
                            <div className="col-lg-5">
                                <img src={chair1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='blog_area padding_top'>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 mb-5 mb-lg-0">
                    <div className="blog_left_sidebar">
                      <article className='blog_item'>
                        <div className="blog_item_img">
                          <img src={single1} className='card-img rounded-0'   alt="" />
                          <a href="/blog" className='blog_item_date'>
                            <h3 style={{ fontSize:"30px",color:"#fff", marginBottom:"0px", lineHeight:"1.2" }}>15</h3>
                            <p style={{ fontSize:"18px",color:"#fff", marginBottom:"0px" }}>Jan</p>
                          </a>
                        </div>
                        <div className="blog_details">
                          <a href="/blog" className='d-inline-block'>
                            <h5 style={{fontSize:"24px", marginBottom:"15px", fontWeight:'600'}}>Google inks pact for new 35-storey office</h5>
                          </a>
                          <p style={{marginBottom:"30px",fontSize:"15px", lineHeight:"2", fontWeight:"300", color:"#000"}}>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it
                             first without heaven in place seed it second morning saying.</p>
                             <ul className='blog-info-link'>
                              <li style={{fontSize:"14px", float:"left"}}>
                                <a href="/blog">
                                  <svg  style={{ fontSize:"13px", marginRight:"5px",paddingBottom:"2px"}}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                                   </svg>
                                  Travel Lifestyle 
                                  <span style={{color:"#000", margin:"0px 10px"  }}>|</span>
                                </a>
                              </li>
                              <li>
                                <a href="/blog">
                                <svg  style={{ fontSize:"13px", marginRight:"5px",paddingBottom:"2px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wechat" viewBox="0 0 16 16">
                                <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.324.324 0 0 0-.12.366l.218.81a.616.616 0 0 1 .029.117.166.166 0 0 1-.162.162.177.177 0 0 1-.092-.03l-1.057-.61a.519.519 0 0 0-.256-.074.509.509 0 0 0-.142.021 5.668 5.668 0 0 1-1.576.22ZM9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.615.615 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.627.627 0 0 0 .098.356Z"/>
                                <path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.499.499 0 0 0-.032.14.192.192 0 0 0 .193.193c.039 0 .077-.01.111-.029l1.268-.733a.622.622 0 0 1 .308-.088c.058 0 .116.009.171.025a6.83 6.83 0 0 0 1.625.26 4.45 4.45 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02.05 0 .1 0 .15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826Zm4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Zm3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Z"/>
                                </svg>
                                  03 Comments
                                </a>
                              </li>
                             </ul>
                        </div>
                      </article>
                      <article className='blog_item'>
                        <div className="blog_item_img">
                          <img src={single2} className='card-img rounded-0'   alt="" />
                          <a href="/blog" className='blog_item_date'>
                            <h3 style={{ fontSize:"30px",color:"#fff", marginBottom:"0px", lineHeight:"1.2" }}>15</h3>
                            <p style={{ fontSize:"18px",color:"#fff", marginBottom:"0px" }}>Jan</p>
                          </a>
                        </div>
                        <div className="blog_details">
                          <a href="/blog" className='d-inline-block'>
                            <h5 style={{fontSize:"24px", marginBottom:"15px", fontWeight:'600'}}>Google inks pact for new 35-storey office</h5>
                          </a>
                          <p style={{marginBottom:"30px",fontSize:"15px", lineHeight:"2", fontWeight:"300", color:"#000"}}>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it
                             first without heaven in place seed it second morning saying.</p>
                             <ul className='blog-info-link'>
                              <li style={{fontSize:"14px", float:"left"}}>
                                <a href="/blog">
                                  <svg  style={{ fontSize:"13px", marginRight:"5px",paddingBottom:"2px"}}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                                   </svg>
                                  Travel Lifestyle 
                                  <span style={{color:"#000", margin:"0px 10px"  }}>|</span>
                                </a>
                              </li>
                              <li>
                                <a href="/blog">
                                <svg  style={{ fontSize:"13px", marginRight:"5px",paddingBottom:"2px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wechat" viewBox="0 0 16 16">
                                <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.324.324 0 0 0-.12.366l.218.81a.616.616 0 0 1 .029.117.166.166 0 0 1-.162.162.177.177 0 0 1-.092-.03l-1.057-.61a.519.519 0 0 0-.256-.074.509.509 0 0 0-.142.021 5.668 5.668 0 0 1-1.576.22ZM9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.615.615 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.627.627 0 0 0 .098.356Z"/>
                                <path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.499.499 0 0 0-.032.14.192.192 0 0 0 .193.193c.039 0 .077-.01.111-.029l1.268-.733a.622.622 0 0 1 .308-.088c.058 0 .116.009.171.025a6.83 6.83 0 0 0 1.625.26 4.45 4.45 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02.05 0 .1 0 .15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826Zm4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Zm3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Z"/>
                                </svg>
                                  03 Comments
                                </a>
                              </li>
                             </ul>
                        </div>
                      </article>
                      <article className='blog_item'>
                        <div className="blog_item_img">
                          <img src={single3} className='card-img rounded-0'   alt="" />
                          <a href="/blog" className='blog_item_date'>
                            <h3 style={{ fontSize:"30px",color:"#fff", marginBottom:"0px", lineHeight:"1.2" }}>15</h3>
                            <p style={{ fontSize:"18px",color:"#fff", marginBottom:"0px" }}>Jan</p>
                          </a>
                        </div>
                        <div className="blog_details">
                          <a href="/blog" className='d-inline-block'>
                            <h5 style={{fontSize:"24px", marginBottom:"15px", fontWeight:'600'}}>Google inks pact for new 35-storey office</h5>
                          </a>
                          <p style={{marginBottom:"30px",fontSize:"15px", lineHeight:"2", fontWeight:"300", color:"#000"}}>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it
                             first without heaven in place seed it second morning saying.</p>
                             <ul className='blog-info-link'>
                              <li style={{fontSize:"14px", float:"left"}}>
                                <a href="/blog">
                                  <svg  style={{ fontSize:"13px", marginRight:"5px",paddingBottom:"2px"}}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                                   </svg>
                                  Travel Lifestyle 
                                  <span style={{color:"#000", margin:"0px 10px"  }}>|</span>
                                </a>
                              </li>
                              <li>
                                <a href="/blog">
                                <svg  style={{ fontSize:"13px", marginRight:"5px",paddingBottom:"2px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wechat" viewBox="0 0 16 16">
                                <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.324.324 0 0 0-.12.366l.218.81a.616.616 0 0 1 .029.117.166.166 0 0 1-.162.162.177.177 0 0 1-.092-.03l-1.057-.61a.519.519 0 0 0-.256-.074.509.509 0 0 0-.142.021 5.668 5.668 0 0 1-1.576.22ZM9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.615.615 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.627.627 0 0 0 .098.356Z"/>
                                <path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.499.499 0 0 0-.032.14.192.192 0 0 0 .193.193c.039 0 .077-.01.111-.029l1.268-.733a.622.622 0 0 1 .308-.088c.058 0 .116.009.171.025a6.83 6.83 0 0 0 1.625.26 4.45 4.45 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02.05 0 .1 0 .15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826Zm4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Zm3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Z"/>
                                </svg>
                                  03 Comments
                                </a>
                              </li>
                             </ul>
                        </div>
                      </article>
                      <article className='blog_item'>
                        <div className="blog_item_img">
                          <img src={single4} className='card-img rounded-0'   alt="" />
                          <a href="/blog" className='blog_item_date'>
                            <h3 style={{ fontSize:"30px",color:"#fff", marginBottom:"0px", lineHeight:"1.2" }}>15</h3>
                            <p style={{ fontSize:"18px",color:"#fff", marginBottom:"0px" }}>Jan</p>
                          </a>
                        </div>
                        <div className="blog_details">
                          <a href="/blog" className='d-inline-block'>
                            <h5 style={{fontSize:"24px", marginBottom:"15px", fontWeight:'600'}}>Google inks pact for new 35-storey office</h5>
                          </a>
                          <p style={{marginBottom:"30px",fontSize:"15px", lineHeight:"2", fontWeight:"300", color:"#000"}}>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it
                             first without heaven in place seed it second morning saying.</p>
                             <ul className='blog-info-link'>
                              <li style={{fontSize:"14px", float:"left"}}>
                                <a href="/blog">
                                  <svg  style={{ fontSize:"13px", marginRight:"5px",paddingBottom:"2px"}}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                                   </svg>
                                  Travel Lifestyle 
                                  <span style={{color:"#000", margin:"0px 10px"  }}>|</span>
                                </a>
                              </li>
                              <li>
                                <a href="/blog">
                                <svg  style={{ fontSize:"13px", marginRight:"5px",paddingBottom:"2px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wechat" viewBox="0 0 16 16">
                                <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.324.324 0 0 0-.12.366l.218.81a.616.616 0 0 1 .029.117.166.166 0 0 1-.162.162.177.177 0 0 1-.092-.03l-1.057-.61a.519.519 0 0 0-.256-.074.509.509 0 0 0-.142.021 5.668 5.668 0 0 1-1.576.22ZM9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.615.615 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.627.627 0 0 0 .098.356Z"/>
                                <path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.499.499 0 0 0-.032.14.192.192 0 0 0 .193.193c.039 0 .077-.01.111-.029l1.268-.733a.622.622 0 0 1 .308-.088c.058 0 .116.009.171.025a6.83 6.83 0 0 0 1.625.26 4.45 4.45 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02.05 0 .1 0 .15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826Zm4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Zm3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Z"/>
                                </svg>
                                  03 Comments
                                </a>
                              </li>
                             </ul>
                        </div>
                      </article>
                      <article className='blog_item'>
                        <div className="blog_item_img">
                          <img src={single5} className='card-img rounded-0'   alt="" />
                          <a href="/blog" className='blog_item_date'>
                            <h3 style={{ fontSize:"30px",color:"#fff", marginBottom:"0px", lineHeight:"1.2" }}>15</h3>
                            <p style={{ fontSize:"18px",color:"#fff", marginBottom:"0px" }}>Jan</p>
                          </a>
                        </div>
                        <div className="blog_details">
                          <a href="/blog" className='d-inline-block'>
                            <h5 style={{fontSize:"24px", marginBottom:"15px", fontWeight:'600'}}>Google inks pact for new 35-storey office</h5>
                          </a>
                          <p style={{marginBottom:"30px",fontSize:"15px", lineHeight:"2", fontWeight:"300", color:"#000"}}>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it
                             first without heaven in place seed it second morning saying.</p>
                             <ul className='blog-info-link'>
                              <li style={{fontSize:"14px", float:"left"}}>
                                <a href="/blog">
                                  <svg  style={{ fontSize:"13px", marginRight:"5px",paddingBottom:"2px"}}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                                   </svg>
                                  Travel Lifestyle 
                                  <span style={{color:"#000", margin:"0px 10px"  }}>|</span>
                                </a>
                              </li>
                              <li>
                                <a href="/blog">
                                <svg  style={{ fontSize:"13px", marginRight:"5px",paddingBottom:"2px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wechat" viewBox="0 0 16 16">
                                <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.324.324 0 0 0-.12.366l.218.81a.616.616 0 0 1 .029.117.166.166 0 0 1-.162.162.177.177 0 0 1-.092-.03l-1.057-.61a.519.519 0 0 0-.256-.074.509.509 0 0 0-.142.021 5.668 5.668 0 0 1-1.576.22ZM9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.615.615 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.627.627 0 0 0 .098.356Z"/>
                                <path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.499.499 0 0 0-.032.14.192.192 0 0 0 .193.193c.039 0 .077-.01.111-.029l1.268-.733a.622.622 0 0 1 .308-.088c.058 0 .116.009.171.025a6.83 6.83 0 0 0 1.625.26 4.45 4.45 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02.05 0 .1 0 .15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826Zm4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Zm3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Z"/>
                                </svg>
                                  03 Comments
                                </a>
                              </li>
                             </ul>
                        </div>
                      </article>
                      <nav className='blog-pagination justify-content-center d-flex'>
                        <ul className="pagination">
                          <li className='page-item'>
                            <a href="/blog" className='page-link'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                            </svg>
                            </a>
                          </li>
                          <li className='page-item'>
                            <a href="/blog" className='page-link'>1</a>
                          </li>
                          <li className='page-item'>
                            <a href="/blog" className='page-link'>2</a>
                          </li>
                          <li className='page-item'>
                            <a href="/blog" className='page-link'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                            </a>
                          </li>
                        </ul>
                      </nav>
                      
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="blog_right_sidebar">
                      <aside className='single_sidebar_widget search_widget'>
                        <form action="/">
                          <div className="form-group">
                            <div className="input-group mb-3">
                              <input type="text" className='form-control' placeholder='Search Keyword' onFocus="this.placeholder= '' " onBlur="this.placeholder=''" />
                              <div className="input-group-append">
                                <button className='btn' type='button'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                          <button className='button rounded-0 w-100 text-white btn-1' type='submit'>Search</button>
                        </form>
                      </aside>
                      <aside className='single_sidebar_widget search_widget post_category_widget'>
                        <h4 className="widget_title">
                          Category
                        </h4>
                        <ul className='list cat-list'>
                          <li>
                            <a href="/blog" className='d-flex'>
                              <p className='hov'>Resaurant food</p>
                              <p>(31)</p>
                            </a>
                          </li>
                          <li>
                            <a href="/blog" className='d-flex'>
                              <p  className='hov'>Travel news</p>
                              <p>(10)</p>
                            </a>
                          </li>
                          <li>
                            <a href="/blog" className='d-flex'>
                              <p  className='hov'>Modern techonology</p>
                              <p>(03)</p>
                            </a>
                          </li>
                          <li>
                            <a href="/blog" className='d-flex'>
                              <p  className='hov'>Product </p>
                              <p>(11)</p>
                            </a>
                          </li>
                          <li>
                            <a href="/blog" className='d-flex'>
                              <p  className='hov'>Inspiration </p>
                              <p>21</p>
                            </a>
                          </li>
                          <li>
                            <a href="/blog" className='d-flex'>
                              <p  className='hov'>Health care (21)</p>
                              <p>09</p>
                            </a>
                          </li>
                        </ul>
                        </aside>
                        <aside className='single_sidebar_widget search_widget popular_post_widget'>
                        <h3 className="widget_title">
                          Recent
                        </h3>
                        <div className="media post_item">
                          <img src={post1} alt="" />
                          <div className="media-body">
                            <a href="/blog">
                              <h3>From life was you fish...</h3>
                            </a>
                            <p>January 12, 2019</p>
                          </div>
                        </div>
                        <div className="media post_item">
                          <img src={post2} alt="" />
                          <div className="media-body">
                            <a href="/blog">
                              <h3>The Amazing Hubble</h3>
                            </a>
                            <p>02 Hour ago</p>
                          </div>
                        </div>
                        <div className="media post_item">
                          <img src={post3} alt="" />
                          <div className="media-body">
                            <a href="/blog">
                              <h3>Astronomy or Astrology</h3>
                            </a>
                            <p>02 Hour ago</p>
                          </div>
                        </div>
                        <div className="media post_item">
                          <img src={post4} alt="" />
                          <div className="media-body">
                            <a href="/blog">
                              <h3>Asteriods telescope</h3>
                            </a>
                            <p>01 Hour ago</p>
                          </div>
                        </div>
                          </aside>

                        <aside className='single_sidebar_widget tag_cloud_widget'>
                          <h3 className='widget_title'>
                            Tag Clouds
                          </h3>
                          <ul className='list'>
                            <li>
                              <a href="/blog">project</a>
                            </li>
                            <li>
                              <a href="/blog">love</a>
                            </li>
                            <li>
                              <a href="/blog">techonology</a>
                            </li>
                            <li>
                              <a href="/blog">travel</a>
                            </li>
                            <li>
                              <a href="/blog">resturant</a>
                            </li>
                            <li>
                              <a href="/blog">life style</a>
                            </li>
                            <li>
                              <a href="/blog">design</a>
                            </li>
                            <li>
                              <a href="/blog" >illustration</a>
                            </li>
                            
                          </ul>
                          </aside>

                          <aside className='single_sidebar_widget instagram_feeds'>
                          <h4 className='widget_title'>
                            Instagram Feeds
                          </h4>
                          <ul className='instagram_row flex-wrap'>
                            <li>
                              <a href="/blog">
                                <img src={post5} alt="" />
                              </a>
                            </li>
                            <li>
                              <a href="/blog">
                                <img src={post6} alt="" />
                              </a>
                            </li>
                            <li>
                              <a href="/blog">
                                <img src={post7} alt="" />
                              </a>
                            </li>
                            <li>
                              <a href="/blog">
                                <img src={post8} alt="" />
                              </a>
                            </li>
                            <li>
                              <a href="/blog">
                                <img src={post9} alt="" />
                              </a>
                            </li>
                            <li>
                              <a href="/blog">
                                <img src={post10} alt="" />
                              </a>
                            </li>


                            
                          </ul>
                          </aside>
                          <aside className='single_sidebar_widget newsletter_widget'>
                          <h4 className='widget_title border-bottom pb-3'>
                            Newsletter
                          </h4>
                          <form action="#">
                            <div className="form-group mb-3">
                              <input type="email" className='form-control' placeholder='Enter Email' />
                            </div>
                            <button className='button rounded-0 text-white w-100 btn_1'>Subscribe</button>
                          </form>
                          </aside>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    </>
  )
}
