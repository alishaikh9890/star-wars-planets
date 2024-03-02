import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>

    <img src="https://i.pinimg.com/originals/ed/a4/3a/eda43aca52541b9799b0b81b2fb47ddd.gif" alt=""/>

  <Link style={{margin:"auto", fontSize:"25px"}} to="/">STAR WARS PLANETS</Link>

  <Link class="button" to="/">⬅ Home</Link>



 
    
    </div>
  )
}

export default Navbar