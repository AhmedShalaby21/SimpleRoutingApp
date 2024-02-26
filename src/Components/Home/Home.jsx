import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import '../Home/Home.css'
import img1 from './images/1.jpg'
import Footer from '../footer/Footer';

export default class Home extends Component {
  render() {
    return (

    
      <>
        <Navbar/>
        <div className='homeDiv '>
          <img src={img1} alt="AVATAR" />
          <h1 className='text-center text-white pt-3'>START FRAMEWORK</h1>
          <div className='text-center fs-3' ><i class="fa-solid fa-code text-white "></i></div>
          <h6 className='text-center text-white pt-3 pb-5 '>Graphic Artist - Web Designer - Illustrator</h6> 
          <Footer/>        
          
          
          


        </div>
        
        
        </>
    )
    
  }
}
