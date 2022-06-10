import React from 'react'
import about1  from "../assets/about1.png";

export default function About() {
  let aboutCss ={
    width:"85vw",
    height:"100vh",
    marginTop:"100px",
    marginLeft:"60px",
  }
  return (
    <div >
        <img style={aboutCss} src={about1} alt="" />
    </div>
  )
}
