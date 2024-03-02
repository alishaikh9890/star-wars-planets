import React, { useContext, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import { UrlContext } from '../../context/UrlContext';

import './Planet.css'


function Planet() {

    const {planet, loading, error, names} = React.useContext(UrlContext)

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
            <h3>Name : {resi.name}</h3>
            <h4>Height : {resi.height}</h4>
            <h5>Mass : {resi.mass}</h5>
            <h5>Gender : {resi.gender}</h5>
            </div>
        ))
      )
    }
    </div>
   
    </div>

    <Link  to="/"><button class="custom-btn btn-3">⬅ Home</button></Link>
    </div>
  )
}

export default Planet