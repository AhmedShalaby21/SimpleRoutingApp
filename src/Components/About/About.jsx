import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import './About.css'

export default class About extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <div className="sec">
          <h1 className='text-center text-white'>ABOUT COMPONENT</h1>
          <div className=' icon text-center fs-3 ' ><i class=" myIcon fa-solid fa-code  "></i></div>
          <div className='d-flex p-5 justify-content-center text-white'><div className="left pe-4"><p>Freelancer is a free bootstrap theme created by Route. The <br /> download includes the complete source files including HTML,<br /> CSS, and JavaScript as well as optional SASS stylesheets for easy <br /> customization.</p></div>
          <div className="right"><p>Freelancer is a free bootstrap theme created by Route. The <br /> download includes the complete source files including HTML,<br /> CSS, and JavaScript as well as optional SASS stylesheets for easy <br /> customization.</p></div>
          </div>
        </div>
        <Footer/>

      </>
    )
  }
}
