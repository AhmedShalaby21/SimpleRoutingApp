import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import './Portfolio.css'
import himg from './images/1.png'
import cimg from './images/2.png'
import timg from './images/3.png'

export default class portfolio extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <div className="port">
          <h1 className='text-center '>PORTFOLIO COMPONENT</h1>
          <div className=' icon text-center fs-3 ' ><i class=" myicon fa-solid fa-code  "></i></div>
          
          <div class="container   ">
            <div class="row g-5  ">
              <div className="  rounded-3 col-lg-4 col-md-6"><img className=' rounded-3 w-100' src={himg} alt="home" /></div>
              <div className="rounded-3 col-lg-4 col-md-6"><img className=' rounded-3 w-100' src={cimg} alt="cake" /></div>
              <div className="rounded-3 col-lg-4 col-md-6"><img className=' rounded-3 w-100' src={timg} alt="3rd" /></div>
              <div className="rounded-3 col-lg-4 col-md-6"><img className=' rounded-3 w-100' src={himg} alt="home" /></div>
              <div className="rounded-3 col-lg-4 col-md-6"><img className=' rounded-3 w-100' src={cimg} alt="cake" /></div>
              <div className="rounded-3 col-lg-4 col-md-6"><img className=' rounded-3 w-100' src={timg} alt="3rd" /></div>

            </div>
          </div>
          </div>
        
        
        <Footer/>
        </>
    )
  }
}
