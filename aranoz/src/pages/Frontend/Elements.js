import React from 'react'
import chair1 from '../../image/chair1.jpg'
import dp from '../../image/client-logo/dp.webp'
import f1 from '../../image/country/f1.webp'
import f2 from '../../image/country/f2.webp'
import f3 from '../../image/country/f3.webp'
import f4 from '../../image/country/f4.webp'
import f5 from '../../image/country/f5.webp'
import f6 from '../../image/country/f6.webp'
import f7 from '../../image/country/f7.webp'
import f8 from '../../image/country/f8.webp'
import g1 from '../../image/gallery/g1.webp'
import g2 from '../../image/gallery/g2.webp'
import g3 from '../../image/gallery/g3.webp'
import g4 from '../../image/gallery/g4.webp'
import g5 from '../../image/gallery/g5.webp'
import g6 from '../../image/gallery/g6.webp'
import g7 from '../../image/gallery/g7.webp'
import g8 from '../../image/gallery/g8.webp'
export default function Elements() {
  return (
    <div className='boxes'>
    <section className='d-flex text-align-center'>
        <div className="container-fluid " style={{ backgroundColor: "#f0fcff" }}>
          <div className="container" >
            <div className="row mt-5">
              <div className="col-lg-7 col-md-8  text-center  ">
                <h1 style={{ fontSize: "35px", fontWeight: "700", marginTop: "80px" }}>Elements</h1>
                {/* <p className='text-secondary '>Home - shoping cart</p> */}
              </div>
              <div className="col-lg-5 col-md-4">
                <img src={chair1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sample-text-area">
        <div className="container box_1170">
          <h3 className='text-heading'>Text Sample</h3>
          <p className="sample-text">
          Every avid independent filmmaker has 
          <b>Bold</b>
           about making that <i> Italic</i> interest documentary, or short film to show off their creative prowess. Many have great ideas and want to “wow” the
           <sup> Superscript</sup> scene, or video renters with their big project. But once you have the 
           <sub>Subscript</sub> “in the can” (no easy feat), how do you move from a 
           <del>Strike</del> through of master DVDs with the <u>“Underline”</u>
            marked hand-written title inside a secondhand CD case, to a pile of cardboard boxes full of shiny new, retail-ready DVDs, with UPC barcodes and polywrap sitting on your
             doorstep? You need to create eye-popping artwork and have your project replicated. Using a reputable full service DVD Replication company like PacificDisc, Inc. to partner with is certainly a helpful option to ensure a professional end result, but to help with your DVD replication project, here are 4 easy steps to follow for good DVD replication results:
          </p>
        </div>
      </section>
      <section className="button-area">
        <div className="container box_1170 border-top-generic">
          <h3 className="text-button">Sample Buttons</h3>
          <div className="button_group-area">
            <a className='genric-btn default'> Default</a>
            <a className='genric-btn primary'> Primary</a>
            <a className='genric-btn success'> Success</a>
            <a className='genric-btn info'> Info</a>
            {/* <a className='genric-btn dark'> Dark</a> */}
            <a className='genric-btn warning'> Warning</a>
            <a className='genric-btn danger'> Danger</a>
            <a className='genric-btn link'> Link</a>
            <a className='genric-btn disable'> Disable</a>
          </div>
          <div className="button_group-area mt-10">
            <a className='genric-btn default-border'> Default</a>
            <a className='genric-btn primary-border'> Primary</a>
            <a className='genric-btn success-border'> Success</a>
            <a className='genric-btn info-border'> Info</a>
            {/* <a className='genric-btn dark-border'> Dark</a> */}
            <a className='genric-btn warning-border'> Warning</a>
            <a className='genric-btn danger-border'> Danger</a>
            <a className='genric-btn link-border'> Link</a>
            <a className='genric-btn disable-border'> Disable</a>
          </div>
          <div className="button_group-area mt-40">
            <a className='genric-btn default radius'> Default</a>
            <a className='genric-btn primary radius'> Primary</a>
            <a className='genric-btn success radius'> Success</a>
            <a className='genric-btn info    radius'> Info</a>
            {/* <a className='genric-btn dark    radius'> Dark</a> */}
            <a className='genric-btn warning radius'> Warning</a>
            <a className='genric-btn danger  radius'> Danger</a>
            <a className='genric-btn link    radius'> Link</a>
            <a className='genric-btn disable radius'> Disable</a>
          </div>
          <div className="button_group-area mt-10">
            <a className='genric-btn default-border  radius'> Default</a>
            <a className='genric-btn primary-border  radius'> Primary</a>
            <a className='genric-btn success-border  radius'> Success</a>
            <a className='genric-btn info-border  radius'> Info</a>
            {/* <a className='genric-btn dark-border  radius'> Dark</a> */}
            <a className='genric-btn warning-border  radius'> Warning</a>
            <a className='genric-btn danger-border  radius'> Danger</a>
            <a className='genric-btn link-border  radius'> Link</a>
            <a className='genric-btn disable-border  radius'> Disable</a>
          </div>
          <div className="button_group-area mt-40">
            <a className='genric-btn default circle'> Default</a>
            <a className='genric-btn primary circle'> Primary</a>
            <a className='genric-btn success circle'> Success</a>
            <a className='genric-btn info    circle'> Info</a>
            {/* <a className='genric-btn dark    circle'> Dark</a> */}
            <a className='genric-btn warning circle'> Warning</a>
            <a className='genric-btn danger  circle'> Danger</a>
            <a className='genric-btn link    circle'> Link</a>
            <a className='genric-btn disable circle'> Disable</a>
          </div>
          <div className="button_group-area mt-10">
            <a className='genric-btn default-border  circle'> Default</a>
            <a className='genric-btn primary-border  circle'> Primary</a>
            <a className='genric-btn success-border  circle'> Success</a>
            <a className='genric-btn info-border  circle'> Info</a>
            {/* <a className='genric-btn dark-border  circle'> Dark</a> */}
            <a className='genric-btn warning-border  circle'> Warning</a>
            <a className='genric-btn danger-border  circle'> Danger</a>
            <a className='genric-btn link-border  circle'> Link</a>
            <a className='genric-btn disable-border  circle'> Disable</a>
          </div>
          <div className="button_group-area mt-40">
            <a className='genric-btn default circle arrow'> Default</a>
            <a className='genric-btn primary circle arrow'> Primary</a>
            <a className='genric-btn success circle arrow'> Success</a>
            <a className='genric-btn info    circle arrow'> Info</a>
            {/* <a className='genric-btn dark    circle arrow'> Dark</a> */}
            <a className='genric-btn warning circle arrow'> Warning</a>
            <a className='genric-btn danger  circle arrow'> Danger</a>
            <a className='genric-btn link    circle arrow'> Link</a>
            <a className='genric-btn disable circle arrow'> Disable</a>
          </div>
          <div className="button_group-area mt-10">
            <a className='genric-btn default-border  circle arrow'> Default</a>
            <a className='genric-btn primary-border  circle arrow'> Primary</a>
            <a className='genric-btn success-border  circle arrow'> Success</a>
            <a className='genric-btn info-border  circle arrow'> Info</a>
            {/* <a className='genric-btn dark-border  circle arrow'> Dark</a> */}
            <a className='genric-btn warning-border  circle arrow'> Warning</a>
            <a className='genric-btn danger-border  circle arrow'> Danger</a>
            <a className='genric-btn link-border  circle arrow'> Link</a>
            <a className='genric-btn disable-border  circle arrow'> Disable</a>
          </div>
          <div className="button_group-area mt-40">
            <a className='genric-btn success e-large'> Extra Large</a>
            <a className='genric-btn primary large'> Large</a>
            <a className='genric-btn success'> Default</a>
            <a className='genric-btn success medium'> Medium</a>
            <a className='genric-btn primary small'> Small</a>
          
          </div>
          <div className="button_group-area mt-10">
            <a className='genric-btn success-border e-large'> Extra Large</a>
            <a className='genric-btn primary-border large'> Large</a>
            <a className='genric-btn success-border'> Default</a>
            <a className='genric-btn success-border medium'> Medium</a>
            <a className='genric-btn primary-border small'> Small</a>
          
          </div>
        </div>
      </section>
      <div className="whole-wrap">
        <div className="container box_1170">
          <div className="section-top-border">
            <h3 className='mb-30'>Left Aligned</h3>
            <div className="row">
              <div className="col-md-3">
                <img src={dp} alt="" className='img-fluid' />
              </div>
              <div className="col-md-9 mt-sm-20">
                <p>Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government. But, after a fortnight, the online casino industry came up with a solution and new online casinos started taking root. These began to operate under a different business umbrella, and by doing that, rendered the transfer of money to and from them legal. A major part of this was enlisting electronic banking systems that would accept this new clarification and start doing business with me.
                   Listed in this article are the electronic banking systems that accept players from the United States that wish to play in online casinos.</p>
              </div>
            </div>
          </div>
          <div className="section-top-border text-right">
            <h3 className='mb-30'>Left Aligned</h3>
            <div className="row">
              <div className="col-md-9 ">
                <p className='text-right'>
                Over time, even the most sophisticated, memory packed computer can begin to run slow if we don’t do something to prevent it. The reason why has less to do with how computers are made and how they age and more to do with the way we use them. You see, all of the daily tasks that we do on our PC from running programs to downloading and deleting software can make our computer sluggish. To keep this from happening, you need to understand the reasons why your PC is getting slower and do something to keep your PC running at its best. You can do this through regular maintenance and PC performance optimization programs 
             Before we discuss all of the things that could be affecting your PC’s performance, let’s talk a little about what symptoms
                </p>
                 </div>
              <div className="col-md-3">
                <img src={dp} alt="" className='img-fluid' />
              </div>
            </div>
          </div>
          <div className="section-top-border">
            <h2 className='mb-30'>Defination</h2>
            <div className="row">
             <div className="col-md-4">
              <div className="single-defination">
                <h3 className="mb-20">Defination 01</h3>
                <p>
                Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks
                </p>
              </div>
             </div>
             <div className="col-md-4">
              <div className="single-defination">
                <h3 className="mb-20">Defination 02</h3>
                <p>
                Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks
                </p>
              </div>
             </div>
             <div className="col-md-4">
              <div className="single-defination">
                <h3 className="mb-20">Defination 03</h3>
                <p>
                Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks
                </p>
              </div>
             </div>
            </div>
          </div>
          <div className="section-top-border">
            <h3 className='mb-30'>Block Qutoes</h3>
            <div className="row">
              <div className="col-lg-12">
                <blockquote className="generic-blockquote">
                “Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. 
                Overnight, online casino players found themselves being chased by the Federal government. But, after a fortnight, the online casino industry came up with a solution and new online casinos started taking root.
                 These began to operate under a different business umbrella, and by doing that, rendered the transfer of money to and from them legal. A major part of this was enlisting electronic banking systems that would accept this new clarification and start doing business with me. Listed in this article are the electronic banking”
                </blockquote>
              </div>
              
            </div>
          </div>
          <div className="section-top-border">
            <h3 className='mb-30'>Table</h3>
            <div className="row">
              <div className="progress-table-wrap">
                <div className="progress-table">
                  <div className="table-head">
                    <div className="serial">#</div>
                    <div className="country">Countries</div>
                    <div className="visit">Visits</div>
                    <div className="percentage">Percentages</div>
                  </div>
                  <div className="table-row">
                    <div className="serial">01</div>
                    <div className="country">
                      <img src={f1} alt="" /> Canada
                    </div>
                    <div className="visit">7689</div>
                    <div className="percentage">
                      <div className="progress">
                        <div className="progress-bar color-1" role='progressbar' style={{ width:"80%"}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="serial">02</div>
                    <div className="country">
                      <img src={f2} alt="" /> Canada
                    </div>
                    <div className="visit">7689</div>
                    <div className="percentage">
                      <div className="progress">
                        <div className="progress-bar color-2" role='progressbar' style={{ width:"30%"}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="serial">03</div>
                    <div className="country">
                      <img src={f3} alt="" /> Canada
                    </div>
                    <div className="visit">7689</div>
                    <div className="percentage">
                      <div className="progress">
                        <div className="progress-bar color-3" role='progressbar' style={{ width:"55%"}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="serial">04</div>
                    <div className="country">
                      <img src={f4} alt="" /> Canada
                    </div>
                    <div className="visit">7689</div>
                    <div className="percentage">
                      <div className="progress">
                        <div className="progress-bar color-4" role='progressbar' style={{ width:"67%"}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="serial">05</div>
                    <div className="country">
                      <img src={f5} alt="" /> Canada
                    </div>
                    <div className="visit">7689</div>
                    <div className="percentage">
                      <div className="progress">
                        <div className="progress-bar color-5" role='progressbar' style={{ width:"20%"}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="serial">06</div>
                    <div className="country">
                      <img src={f6} alt="" /> Canada
                    </div>
                    <div className="visit">7689</div>
                    <div className="percentage">
                      <div className="progress">
                        <div className="progress-bar color-6" role='progressbar' style={{ width:"47%"}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="serial">07</div>
                    <div className="country">
                      <img src={f7} alt="" /> Canada
                    </div>
                    <div className="visit">7689</div>
                    <div className="percentage">
                      <div className="progress">
                        <div className="progress-bar color-7" role='progressbar' style={{ width:"26%"}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="serial">08</div>
                    <div className="country">
                      <img src={f8} alt="" /> Canada
                    </div>
                    <div className="visit">7689</div>
                    <div className="percentage">
                      <div className="progress">
                        <div className="progress-bar color-8" role='progressbar' style={{ width:"68%"}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-top-border">
            <h3>Image Gallery</h3>
            <div className="row gallery-item">
             <div className="col-md-4">
             <a href="/elements">
                <img src={g1} alt="" />
              </a>
             </div>
             <div className="col-md-4">
             <a href="/elements">
                <img src={g2} alt="" />
              </a>
             </div>
             <div className="col-md-4">
             <a href="/elements">
                <img src={g3} alt="" />
              </a>
             </div>
             <div className="col-md-6">
             <a href="/elements">
                <img src={g4} alt="" />
              </a>
             </div>
             <div className="col-md-6">
             <a href="/elements">
                <img src={g5} alt="" />
              </a>
             </div>
             <div className="col-md-4">
             <a href="/elements">
                <img src={g6} alt="" />
              </a>
             </div>
             <div className="col-md-4">
             <a href="/elements">
                <img src={g7} alt="" />
              </a>
             </div>
             <div className="col-md-4">
             <a href="/elements">
                <img src={g8} alt="" />
              </a>
             </div>
            </div>
          </div>
          <div className="section-top-border">
            <div className="row orderunorder">
              <div className="col-md-4">
            <h3 className='mb-20'>Image Gallery</h3>
            <div className="typography">
              <h1>THis is header 01</h1>
              <h2>THis is header 01</h2>
              <h3>THis is header 01</h3>
              <h4>THis is header 01</h4>
              <h5>THis is header 01</h5>
              <h6>THis is header 01</h6>
            </div>
            </div>
            <div className="col-md-4 mt-sm-20">
              <h3>Unorder List</h3>
              <div>
                <ul className="unorder-list12"  >
                  <li>fta keys</li>
                  <li>For Women Only Your Computer Usage</li>
                  <li>For Women Only Your Computer Usage</li>
                  <li>Facts Why Inkjet Printing Is Very Appealing
                    <ul>
                      <li>
                      Addiction When Gambling Becomes
                      <ul>
                        <li>Protective Preventative Maintenance</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>Dealing With Technical Support 10 Useful Tips</li>
                  <li>Make Myspace Your Best Designed Space</li>
                  <li>Cleaning And Organizing Your Computer</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 mt-sm-20">
              <h3>Order List</h3>
              <div>
                <ol className="ordered-list" style={{ marginLeft:"30px", color:"#ff3368", lineHeight:"1.82rem"}}>
                  <li> <span  style={{color:"grey"}}> fta keys</span> </li>
                  <li> <span  style={{color:"grey"}}>For Women Only Your Computer Usage </span></li>
                  <li> <span  style={{color:"grey"}}>For Women Only Your Computer Usage </span></li>
                  <li> <span  style={{color:"grey"}}>Facts Why Inkjet Printing Is Very Appealing</span>
                    <ul  style={{listStyleType:"lower-alpha", paddingLeft:'50px'}}>
                      <li>
                      <span  style={{color:"grey"}}> Addiction When Gambling Becomes</span>
                      <ul style={{listStyleType:"lower-roman", paddingLeft:'50px'}}>
                        <li> <span  style={{color:"grey"}}>Protective Preventative Maintenance </span></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li> <span  style={{color:"grey"}}>Dealing With Technical Support 10 Useful Tips</span></li>
                  <li> <span  style={{color:"grey"}}>Make Myspace Your Best Designed Space </span></li>
                  <li> <span  style={{color:"grey"}}>Cleaning And Organizing Your Computer </span></li>
                </ol>
              </div>
             </div>            
            </div>
           </div>




        </div>
      </div>
    </div>
  )
}
