import React, { useContext, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import { UrlContext } from '../../context/UrlContext';

import './Planet.css'


function Planet() {

    const {planet, loading, error, names, handleFilms} = useContext(UrlContext)

    console.log(planet)

    // const { productId } = useParams();

  return (
    <div className='planet'>
    <div>
    <h1 style={{marginBottom:"50px"}}>Residence of <b>{names}</b></h1>

    <div className='residents'> 
    {
      loading ? (
        <div><img src='https://i.pinimg.com/originals/83/0e/0f/830e0fdceaf364e4eb90d734f95dab7b.gif' alt="" />
        </div>
      ) : error ? (
        <h2> something Went Wrong</h2>
      ) : (
        planet.map((resi) => (
            <div  className="button-40">
            <img src="https://i.pinimg.com/originals/2b/d3/8e/2bd38e31a22877a17fa63e3d771f8624.gif" alt=''/>
            <p>Name : {resi.name}</p>
            <p>Height : {resi.height}</p>
            <p>Mass : {resi.mass}</p>
            <p>Gender : {resi.gender}</p>
            <button className="custom-btn btn-3"  onClick={() => handleFilms(resi.films, resi.name)}>films </button>
            </div>
        ))
      )
    }
    </div>
   
    </div>

    <Link  to="/"><button className="custom-btn btn-3">⬅ Home</button></Link>
    </div>
  )
}

export default Planet