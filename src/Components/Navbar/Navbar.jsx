import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/Navbar.css';


export default class Navbar extends Component {
  render() {
    return <>
    <nav className=" fixed-top myNav navbar navbar-expand-lg navbar ">
  <div className="container">
    <Link className="  navbar-brand fs-2 text-white" to="/home">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className=" list collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-3   mb-lg-0">
          
        <li className="nav-item ">
          <Link className=" nav-link active text-white fs-4" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-white fs-4" to="/portfolio">Portfolio</Link> 
        </li>
        <li className=" nav-item">
          <Link className="nav-link text-white  fs-4 " to="/contact">Contact</Link>
        </li>
       
       
      </ul>
    
    </div>
  </div>
</nav>

    </>
  }
}
