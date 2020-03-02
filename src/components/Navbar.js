import React from 'react'
import logo from '../logo.jpg';
import {Link }from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navigation sidebar-left block bg-contrast">
        <div className="container py-4">
            <button className="navbar-toggler" type="button">
                <span className="icon-bar"></span> 
                <span className="icon-bar"></span> 
                <span className="icon-bar"></span>
            </button> 
            <a href="#main" className="navbar-brand">
                <img src={logo} alt="Dashcore" className="logo logo-sticky"/>
            </a>
            <div className="collapse navbar-collapse ml-auto">
                <div className="sidebar-brand">
                    <a href="#main"><img src={logo} alt="Dashcore Template" className="logo"/></a>
                </div>
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item"><a className="nav-link" href="/">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="/">Impact</a></li>
                    <li className="nav-item"><a className="nav-link" href="/">Programs</a></li>
                    <li className="nav-item"><a className="nav-link" href="/">Get Involved</a></li>
                </ul>
                <span className="navbar-divider"></span>
                <Link to="/donate">
                <nav className="nav navbar-nav ml-md-auto justify-content-center mt-4 mt-md-0 flex-row">
                    <button className="btn btn-rounded btn-success px-3"></button>
                </nav>
                </Link>
            </div>
        </div>
    </nav>
  )
}
