import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import './Contact.css'

export default class contact extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <div className='section  '>
        <h1 className=' text-center '>CONATCT SECTION</h1>
        <div className=' icon text-center fs-3 ' ><i class=" code fa-solid fa-code  "></i></div>
        <div className="form form-control w-50 text-center m-auto ">
        <input type="text" class="form-control mb-4"  placeholder="userName"/>
        <input type="number" class="form-control mb-4"  placeholder="userAge"/>
        <input type="email" class="form-control mb-4"  placeholder="userEmail"/>
        <input type="password" class="form-control mb-4"  placeholder="userPassword"/>
        <button type="submit" class="btn btn-success mb-3">Send Message</button>

        </div>
        </div>

        <Footer/>
        </>
    )
  }
}
