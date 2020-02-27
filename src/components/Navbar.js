import React from 'react'
import logo from '../logo.jpg';
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navigation sidebar-left block bg-contrast">
                <div className="container py-4"><button className="navbar-toggler" type="button"><span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span></button> <a href="#main" className="navbar-brand"><img src={logo} alt="Dashcore" className="logo logo-sticky"/></a>
                    <div className="collapse navbar-collapse ml-auto">
                        <div className="sidebar-brand"><a href="#main"><img src={logo} alt="Dashcore Template" className="logo"/></a></div>
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item"><a className="nav-link" href="javascript:;">Home</a></li>
                            <li className="nav-item dropdown mega"><a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#pricing">Custom menu</a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <div className="row">
                                        <div className="col-md-4 b-r"><a className="dropdown-item text-wrap" target="_blank" href="javascript:;">
                                                <p className="bold my-0">About</p>
                                            </a><a className="dropdown-item text-wrap" target="_blank" href="javascript:;">
                                                <p className="bold my-0">Contact</p>
                                            </a><a className="dropdown-item text-wrap" target="_blank" href="javascript:;">
                                                <p className="bold my-0">Blog</p>
                                            </a></div>
                                        <div className="col-10 mx-auto col-md-8">
                                            <h3 className="text-darker mb-0 light mt-4 mt-md-0">Think about<span className="bold d-block">your business</span></h3>
                                            <p className="text-secondary">Our best bet is you, we can assure that our template will fit the most of your needs.</p><a href="javascript:;" className="btn btn-rounded btn-info mt-3">View plan & prices</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="javascript:;">Pricing</a></li>
                            <li className="nav-item"><a className="nav-link" href="javascript:;">Download</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
  )
}
