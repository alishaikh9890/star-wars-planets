import React, { useContext, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import { UrlContext } from '../../context/UrlContext';

import './Planet.css'


function Planet() {

    const {planet, names} = React.useContext(UrlContext)

    console.log(planet)

    // const { productId } = useParams();

  return (
    <div className='planet'>
    <div>
    <h1>Residence of {names}</h1>

    <div className='residents'> 
    {
        planet.map((resi) => (
            <div  className="button-40">
            <img src="https://i.pinimg.com/originals/2b/d3/8e/2bd38e31a22877a17fa63e3d771f8624.gif" alt=''/>
            <h3>Name : {resi.name}</h3>
            <h4>Height : {resi.height}</h4>
            <h5>Mass : {resi.mass}</h5>
            <h6>Gender : {resi.gender}</h6>
            </div>
        ))
    }
    </div>
   
    </div>

    <Link style={{border:"1px solid white", marginTop:"20px", padding:"5px 10px", backgroundColor:"black", color:"white", fontWeight:"600"}} to="/"> ⬅ Home </Link>
    </div>
  )
}

export default Planet