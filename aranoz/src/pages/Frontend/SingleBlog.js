import React from 'react'
import chair1 from '../../image/chair1.jpg'
import single1 from '../../image/single_blog_1.png.webp'
import prev from '../../image/preview.webp'
import next from '../../image/next.webp'
import author from '../../image/author.webp'
import coment1 from '../../image/comment_1.webp'
import coment2 from '../../image/comment_2.webp'
import coment3 from '../../image/comment_3.webp'
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

export default function SingleBlog() {
  
  return (
    <>
      <section className='d-flex text-align-center'>
        <div className="container-fluid " style={{ backgroundColor: "#f0fcff" }}>
          <div className="container" >
            <div className="row mt-5">
              <div className="col-lg-7   text-center  ">
                <h1 style={{ fontSize: "35px", fontWeight: "700", marginTop: "80px" }}>Shop Single</h1>
                <p className='text-secondary '>Home -Single Blog</p>
              </div>
              <div className="col-lg-5 col-xsm-12">
                <img src={chair1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='blog_area single-post-area padding_top mb-5'>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 posts-list">
              <div className="single-post">
                <div className="feature-img">
                  <img src={single1} className='img-fluid card-img rounded-0' alt="" />
                </div>
                <div className="blog_details">
                  <h2 className='pt-3'>Second divided from form fish beast made every of seas all gathered us saying he our</h2>
                  <ul className='blog-info-link mt-3 mb-5'>
                    <li style={{ fontSize: "14px", float: "left" }}>
                      <a href="/single-blog">
                        <svg style={{ fontSize: "13px", marginRight: "5px", paddingBottom: "2px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                          <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                        </svg>
                        Travel Lifestyle
                        <span style={{ color: "#000", margin: "0px 10px" }}>|</span>
                      </a>
                    </li>
                    <li>
                      <a href="/single-blog">
                        <svg style={{ fontSize: "13px", marginRight: "5px", paddingBottom: "2px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wechat" viewBox="0 0 16 16">
                          <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.324.324 0 0 0-.12.366l.218.81a.616.616 0 0 1 .029.117.166.166 0 0 1-.162.162.177.177 0 0 1-.092-.03l-1.057-.61a.519.519 0 0 0-.256-.074.509.509 0 0 0-.142.021 5.668 5.668 0 0 1-1.576.22ZM9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.615.615 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.627.627 0 0 0 .098.356Z" />
                          <path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.499.499 0 0 0-.032.14.192.192 0 0 0 .193.193c.039 0 .077-.01.111-.029l1.268-.733a.622.622 0 0 1 .308-.088c.058 0 .116.009.171.025a6.83 6.83 0 0 0 1.625.26 4.45 4.45 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02.05 0 .1 0 .15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826Zm4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Zm3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Z" />
                        </svg>
                        03 Comments
                      </a>
                    </li>
                  </ul>
                  <p className='excert'>
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower
                  </p>
                  <p>
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually
                  </p>
                  <div className="quote-wrapper pb-3">
                    <p className='bg-white text-secondary p-4 border-start border-3 border-secondary'>
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually
                    </p>
                  </div>
                  <p>
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower
                  </p>
                  <p>
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually
                  </p>
                </div>
              </div>

              <div className="navigation-top">
                <div className="d-sm-flex justify-content-between text-center">
                  <p className='like-info'>
                    <span className="align-middle">
                      <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                      </i>
                    </span>
                    Lily and 4 people like this
                  </p>
                  <div className="col-sm-4 text-center my-2 my-sm-0">  </div>
                  <ul className="social-icons">
                    <li>
                      <a href="/single-blog">
                        <i>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                          </svg>
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="/single-blog">
                        <i>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="/single-blog">
                        <i>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dribbble" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8zm5.284 3.688a6.802 6.802 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A6.95 6.95 0 0 1 8 1.18zm-2.907.642A43.123 43.123 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.865 6.865 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.817 6.817 0 0 1-1.752-4.564zM8 14.837a6.785 6.785 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.246 28.246 0 0 1 1.457 5.18A6.722 6.722 0 0 1 8 14.837zm3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.774 6.774 0 0 1-2.924 4.573z" />
                          </svg>
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="/single-blog">
                        <i>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-behance" viewBox="0 0 16 16">
                            <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391.286.176.497.426.641.747.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922.281.426.461.957.461 1.563 0 .496-.105.922-.285 1.278a2.317 2.317 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.329 5.329 0 0 1-1.278.176L0 12.803V3h4.654zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a.981.981 0 0 0-.32-.355 1.84 1.84 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305v.005zm6.858-.035c.286.285.711.426 1.278.426.39 0 .746-.106 1.032-.286.285-.215.46-.426.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.135 4.135 0 0 1-1.527-.285 2.827 2.827 0 0 1-1.137-.782 2.851 2.851 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4.018 4.018 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396zm2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176-.215.105-.356.25-.496.39a.957.957 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978v-.957z" />
                          </svg>
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="navigation-area">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                      <div className="thumd">
                        <a href="#">
                          <img src={prev} alt="" />
                        </a>
                      </div>
                      <div className="arrow">
                        <a href="/single-blog">
                          <span className='lnr text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                            </svg>
                          </span>
                        </a>
                      </div>
                      <div className="details ps-4">
                        <p>Prev Post</p>
                        <a href="/single-blog">
                          <h4 className='text-dark'>Space the Final Frontier</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                      <div className="details pe-4">
                        <p>Next Post</p>
                        <a href="/single-blog">
                          <h4 className='text-dark'>Telescope 101</h4>
                        </a>
                      </div>
                      <div className="arrow">
                        <a href="/single-blog">
                          <span className='lnr text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg>
                          </span>
                        </a>
                      </div>
                      <div className="thumd">
                        <a href="#">
                          <img src={next} alt="" />
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="blog-author">
                <div className="media align-items-center">
                  <img src={author} alt="" />
                  <div className="media-body ms-4">
                    <a href="/single-blog">
                      <h4 className='text-dark'>Mr. Jackson</h4>
                    </a>
                    <p> Second divided from form fish beast made. Every of seas all gathered use saying you're, he our dominion twon Second divided from</p>
                  </div>
                </div>
              </div>
              <div className="comments-area">
                <h4>05 Comments</h4>
                <div className="comment-list">
                  <div className="single-comment justify-content-between d-flex">
                    <div className="user justify-content-between d-flex ">
                      <div className="thumb">
                        <img src={coment1} alt="" />
                      </div>
                      <div className="desc">
                        <p className="comment">
                          Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                        </p>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex align-items-center">
                            <h5>
                              <a href="/single-blog">Emilly Blunt</a>
                            </h5>
                            <p className='date'> August 02, 2023 at 1:11 am</p>
                          </div>
                          <div className="reply-btn">
                            <a href="/single-blog" className='btn-reply text-uppercase'>reply</a>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment-list">
                  <div className="single-comment justify-content-between d-flex">
                    <div className="user justify-content-between d-flex ">
                      <div className="thumb">
                        <img src={coment2} alt="" />
                      </div>
                      <div className="desc">
                        <p className="comment">
                          Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                        </p>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex align-items-center">
                            <h5>
                              <a href="/single-blog">Emilly Blunt</a>
                            </h5>
                            <p className='date'> August 02, 2023 at 1:11 am</p>
                          </div>
                          <div className="reply-btn">
                            <a href="/single-blog" className='btn-reply text-uppercase'>reply</a>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment-list">
                  <div className="single-comment justify-content-between d-flex">
                    <div className="user justify-content-between d-flex ">
                      <div className="thumb">
                        <img src={coment3} alt="" />
                      </div>
                      <div className="desc">
                        <p className="comment">
                          Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                        </p>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex align-items-center">
                            <h5>
                              <a href="/single-blog">Emilly Blunt</a>
                            </h5>
                            <p className='date'> August 02, 2023 at 1:11 am</p>
                          </div>
                          <div className="reply-btn">
                            <a href="/single-blog" className='btn-reply text-uppercase'>reply</a>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment-form">
                <h4>leave a Reply</h4>
                <form action="#" className='form-contact comment_form'>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <textarea  className='form-control w-100' placeholder='Write Comment'  name="comment" id="" cols="60" rows="9"></textarea>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input type="text" className='form-control' name='name' placeholder='Name' />
                      </div>
                    </div>
                    <div className="col-sm-6">
                    <div className="form-group">
                        <input type="email" className='form-control' name='email' placeholder='Email' />
                      </div>
                    </div>
                    <div className="col-12">
                    <div className="form-group">
                        <input type="text" className='form-control' name='website' placeholder='Website' />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <a href="/single-blog" className='btn_3 button-contactForm'>Send  Message</a>
                  </div>
                </form>
              </div>

            </div>

            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                <aside className='single_sidebar_widget search_widget'>
                  <form action="/">
                    <div className="form-group">
                      <div className="input-group mb-3">
                        <input type="text" className='form-control' placeholder='Search Keyword'/>
                        <div className="input-group-append">
                          <button className='btn' type='button'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
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
                      <a href="/single-blog" className='d-flex'>
                        <p className='hov'>Resaurant food</p>
                        <p>(31)</p>
                      </a>
                    </li>
                    <li>
                      <a href="/single-blog" className='d-flex'>
                        <p className='hov'>Travel news</p>
                        <p>(10)</p>
                      </a>
                    </li>
                    <li>
                      <a href="/single-blog" className='d-flex'>
                        <p className='hov'>Modern techonology</p>
                        <p>(03)</p>
                      </a>
                    </li>
                    <li>
                      <a href="/single-blog" className='d-flex'>
                        <p className='hov'>Product </p>
                        <p>(11)</p>
                      </a>
                    </li>
                    <li>
                      <a href="/single-blog" className='d-flex'>
                        <p className='hov'>Inspiration </p>
                        <p>21</p>
                      </a>
                    </li>
                    <li>
                      <a href="/single-blog" className='d-flex'>
                        <p className='hov'>Health care (21)</p>
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
                      <a href="/single-blog">
                        <h3>From life was you fish...</h3>
                      </a>
                      <p>January 12, 2019</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img src={post2} alt="" />
                    <div className="media-body">
                      <a href="/single-blog">
                        <h3>The Amazing Hubble</h3>
                      </a>
                      <p>02 Hour ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img src={post3} alt="" />
                    <div className="media-body">
                      <a href="/single-blog">
                        <h3>Astronomy or Astrology</h3>
                      </a>
                      <p>02 Hour ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img src={post4} alt="" />
                    <div className="media-body">
                      <a href="/single-blog">
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
                      <a href="/single-blog">project</a>
                    </li>
                    <li>
                      <a href="/single-blog">love</a>
                    </li>
                    <li>
                      <a href="/single-blog">techonology</a>
                    </li>
                    <li>
                      <a href="/single-blog">travel</a>
                    </li>
                    <li>
                      <a href="/single-blog">resturant</a>
                    </li>
                    <li>
                      <a href="/single-blog">life style</a>
                    </li>
                    <li>
                      <a href="/single-blog">design</a>
                    </li>
                    <li>
                      <a href="/single-blog" >illustration</a>
                    </li>

                  </ul>
                </aside>

                <aside className='single_sidebar_widget instagram_feeds'>
                  <h4 className='widget_title'>
                    Instagram Feeds
                  </h4>
                  <ul className='instagram_row flex-wrap'>
                    <li>
                      <a href="/single-blog">
                        <img src={post5} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="/single-blog">
                        <img src={post6} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="/single-blog">
                        <img src={post7} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="/single-blog">
                        <img src={post8} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="/single-blog">
                        <img src={post9} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="/single-blog">
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
                    <button className='button rounded-0 text-white w-100 btn_1 bg-danger'>Subscribe</button>
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
