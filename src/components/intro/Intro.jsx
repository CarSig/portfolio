import React from 'react'
import "./intro.css"
import Me from "../../img/lovroBewerbungPhoto.png"

const Intro = () => {
  return (
    <div className="i">
     
      <div className="i-left"><div className="i-left-wrapper">
        <h2 className='i-intro'>Hello, My name is</h2>
        <h1 className="i-name">Lovro Boric</h1>
        <div className="i-title">
          <div className="i-title-wrapper">
<div className="i-title-item">Web Developer</div>
<div className="i-title-item">UI/UX Designer</div>
<div className="i-title-item">Fronted Developer</div>
<div className="i-title-item">Backend Developer</div>

          </div>
</div>
          <div className="i-desc">
            <p> I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites and web services .</p></div>
        </div>
 
        
        </div>
        <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  )
}

export default Intro