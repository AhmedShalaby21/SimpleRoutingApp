import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <>
      <div className='loc d-flex   '>
        <div className='text-white '>
        <h2>LOCATION</h2>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
        </div>
        <div className='web '>
            <h2 className='text-white'>AROUND THE WEB</h2>
            <div className='icons fs-3 text-center'><div _ngcontent-mtb-c21="" class="icons"><i _ngcontent-mtb-c21="" class="fa-brands fa-facebook mx-1 icon"></i><i _ngcontent-mtb-c21="" class="fa-brands fa-twitter mx-1 icon"></i><i _ngcontent-mtb-c21="" class="fa-brands fa-linkedin-in mx-1 icon"></i><i _ngcontent-mtb-c21="" class="fa-solid fa-globe mx-1 icon"></i></div></div>

            </div>
            <div className="about text-white">
                <h2>ABOUT FREELANCER</h2>
                <p>Freelance is a free to use, licensed Bootstrap theme <br /> created by Route</p>
                </div>
        </div>
        <div className="end">
            <p>Copyright © Your Website 2021</p>
        </div>
        
      
      </>
    )
  }
}
