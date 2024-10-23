import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>


   <img src="https://i.pinimg.com/originals/20/81/27/2081270ee56f88c770bff6bd05867e05.gif" alt=""/>

  <h1>STAR WARS PLANETS</h1>

  <Link className='navHome' to="/"><button className="custom-btn btn-3">⬅ Home</button></Link>

  <button className='custom-btn btn-3' data-bs-toggle="modal" data-bs-target="#modal">MODAL</button>

    </div>
  )
}

export default Navbar