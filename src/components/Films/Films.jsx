import React, { useContext, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import { UrlContext } from '../../context/UrlContext';

import './Films.css'


function Films() {

    const {planet, loading, error, resident, film, handleVehicle, handleChar, character} = useContext(UrlContext)

    // console.log(character)

    // const { productId } = useParams();

  return (
    <div className='planet position-relative'>
    <div>
    <h1 style={{marginBottom:"50px"}}>Films of <b>{resident}</b></h1>

    <div className='residents'> 
    {
      loading ? (
        <div><img src='https://i.pinimg.com/originals/83/0e/0f/830e0fdceaf364e4eb90d734f95dab7b.gif' alt="" />
        </div>
      ) : error ? (
        <h2> something Went Wrong</h2>
      ) : (
        film.map((mov) => (
            <div  className="button-40">
            <img src="https://i.pinimg.com/originals/66/b8/e7/66b8e707bd733eb000aec5d3a8892c1b.gif" alt=''/>
            <p>Name : {mov.title}</p>
            <p>Height : {mov.director}</p>
            <p>Mass : {mov.producer}</p>
            <p>Gender : {mov.release_date}</p>
            <button className="custom-btn btn-3" onClick={() => handleVehicle(mov.vehicles, mov.film)} >vehicles </button>
            <button className="custom-btn btn-3"  onClick={() => handleChar(mov.characters)}  >Charactors </button>
            <button className="custom-btn btn-3" data-bs-toggle="offcanvas" data-bs-target="#sidebar" >side </button>
            </div>
        ))
      )
    }
    </div>

   
   
    </div>

    <Link  to="/"><button className="custom-btn btn-3">⬅ Home</button></Link>


    <div style={{backdropFilter:"blur(2px)"}} className=' shadow offcanvas bg-transparent offcanvas-end border-info text-bg-dark' id="sidebar"  >
    <div className='offcanvas-header '>
      <h2 className='offcanvas-title'>Characters</h2>
      <button className='btn btn-close btn-close-white' data-bs-dismiss="offcanvas"></button>
    </div>
    <div className='offcanvas-body overflow-y-scroll '>
    {
    character.map((char) => (
      <div  className="p-2 mb-2 shadow row bg-black bg-gradient rounded">
      <div className='col-2 border p-0'>
       <img className="img-fluid" src="https://i.pinimg.com/originals/83/0e/0f/830e0fdceaf364e4eb90d734f95dab7b.gif" alt=''/>
      </div>
     <div className='col-8 border text-start' style={{fontSize:"14px"}}>
        <p className='mb-1'>Name : {char.name}</p>
        <p className='mb-1'>Height : {char.skin_color}</p>
        <p className='mb-1'>Mass : {char.birth_year}</p>
     </div>
      <div className='col-2'>
      <button className="btn btn-outline-info m-auto" data-bs-toggle="offcanvas" data-bs-target="#sidebar" >SM</button>
      </div>
      
      </div>
  ))

    }
    </div>

    <div className='offcanvas-footer'>
      <button className='btn btn-info'> modal</button>
    </div>
  </div>

    </div>
  )
}

export default Films;