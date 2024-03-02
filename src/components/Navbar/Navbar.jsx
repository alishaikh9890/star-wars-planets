import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>

    <img src="https://i.pinimg.com/originals/ed/a4/3a/eda43aca52541b9799b0b81b2fb47ddd.gif" alt=""/>

  <h1>STAR WARS PLANETS</h1>

  <Link style={{margin:"auto 0", marginRight:"80px"}} to="/"><button class="custom-btn btn-3">⬅ Home</button></Link>
    
    </div>
  )
}

export default Navbar