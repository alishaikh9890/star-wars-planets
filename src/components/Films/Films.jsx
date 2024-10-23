import React, { useContext, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import { UrlContext } from '../../context/UrlContext';

import './Films.css'


function Films() {

    const {planet, loading, error, resident, film} = useContext(UrlContext)

    console.log(planet)

    // const { productId } = useParams();

  return (
    <div className='planet'>
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
            <h3>Name : {mov.title}</h3>
            <h4>Height : {mov.director}</h4>
            <h5>Mass : {mov.producer}</h5>
            <h5>Gender : {mov.release_date}</h5>
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

export default Films;