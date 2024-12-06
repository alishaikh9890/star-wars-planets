import React, { useContext, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import { UrlContext } from '../../context/UrlContext';

import './Vehicle.css'


function Vehicle() {

    const {planet, loading, error, resident, film, vehicle, movie} = useContext(UrlContext)

    console.log(planet)

    // const { productId } = useParams();

  return (
    <div className='planet'>
    <div>
    <h1 style={{marginBottom:"50px"}}>Name of Vehicle <b>{movie}</b></h1>

    <div className='residents'> 
    {
      loading ? (
        <div><img src='https://i.pinimg.com/originals/83/0e/0f/830e0fdceaf364e4eb90d734f95dab7b.gif' alt="" />
        </div>
      ) : error ? (
        <h2> something Went Wrong</h2>
      ) : (
        vehicle.map((veh) => (
            <div  className="button-40">
            <img src="https://i.pinimg.com/originals/99/4c/f8/994cf894ea11bacd972d08dfa0dea5cc.gif" alt=''/>
            <p>Name : {veh.name}</p>
            <p>Model : {veh.model}</p>
            <p>Manu. : {veh.manufacturer}</p>
            <p>Cost : {veh.cost_in_credits}</p>
            <button className="custom-btn btn-3"  >vehicles </button>
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

export default Vehicle;