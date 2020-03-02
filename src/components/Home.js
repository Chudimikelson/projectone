import React from 'react'
import banner from '../images/2.jpg'
export default function Home() {
  return (
    <div>
      <section className="banner">
        
      </section>
      <section>
          <div className="row align-items-center gradient gradient-navy-blue text-contrast">
            <div className="col-md-6 mx-auto p-4">
              <p className="bold mt-1 text-contrast text-center"><i className="quote fas fa-quote-left"></i> If your company is struggling to stay in business, there may be several options you can explore. <span className="bold">Dashcore,</span> was the perfect template. It is very easy to implement, has great design, and it has all the functionality we were looking for. <i className="quote fas fa-quote-right"></i></p>
              <hr className="my-4"/>
              <div className="small text-contrast text-center"><span className="bold d-block">Jean Doe,</span> CEO & Founder of Awesome Company</div>
            </div>            
          </div>
        </section>
      <section className="section quick-start-your-business">
            <div className="container-fluid bring-to-front pb-md-10">
                <div className="row gap-y align-items-center">
                    <div className="col-10 col-lg-4 mx-auto order-md-2">
                        <div className="mb-5 text-center text-lg-left">
                            <h2>Quick start your business<br/><span className="text-primary">with the right tools</span></h2>
                            <p className="lead text-muted">DashCore helps you Build a modern & beautiful web presence. Our growing set of components will make your life waaaay easier.</p>
                        </div>
                        <ul className="list-unstyled">
                            <li className="py-2">
                                <div className="d-flex align-items-center">
                                    <div className="icon-md bg-primary p-2 rounded-circle center-flex mr-3"><i data-feather="arrow-right" className="stroke-contrast"></i></div>
                                    <p className="my-0">Perfect for modern and growing Apps &amp; Startups</p>
                                </div>
                            </li>
                            <li className="py-2">
                                <div className="d-flex align-items-center">
                                    <div className="icon-md bg-primary p-2 rounded-circle center-flex mr-3"><i data-feather="arrow-right" className="stroke-contrast"></i></div>
                                    <p className="my-0">Predesigned growing set of modern web components</p>
                                </div>
                            </li>
                            <li className="py-2">
                                <div className="d-flex align-items-center">
                                    <div className="icon-md bg-primary p-2 rounded-circle center-flex mr-3"><i data-feather="arrow-right" className="stroke-contrast"></i></div>
                                    <p class="my-0">Modern &amp; eye-catching design to enchant your visitors</p>
                                </div>
                            </li>
                            <li className="py-2">
                                <div className="d-flex align-items-center">
                                    <div className="icon-md bg-primary p-2 rounded-circle center-flex mr-3"><i data-feather="arrow-right" className="stroke-contrast"></i></div>
                                    <p className="my-0">Focus on your business, don&#39;t worry about your website</p>
                                </div>
                            </li>
                        </ul><a href="#!" className="btn btn-primary btn-rounded mt-4">Know More</a>
                    </div>
                    <div className="col-12 col-lg-6 pl-0 order-md-1">
                        <div className="browser shadow" data-aos="fade-right">
                            <div className="screen"><img src="img/screens/dash/1.png" alt="" className="img-responsive"/></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      <section className="singl-testimonial shadow">
        <div className="container-fluid py-0">
          <div className="row align-items-center gradient gradient-blue-navy text-contrast">
            <div className="col-md-4 mx-auto py-4 py-md-0">
              <p className="font-md bold mt-1 text-contrast">Every child deserves to be taken care of and to have a home and family. Our charity helps those people who have no hope</p>
              <div className="small text-contrast">You can contribute your share for this Child</div><div><a href="/donate" className="btn btn-primary btn-rounded mt-3">Donate</a></div>
            </div>
            <div className="" >
            </div>
        </div>
        </div>
      </section>
    </div>
  )
}
