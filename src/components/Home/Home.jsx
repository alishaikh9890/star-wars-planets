import React, { useEffect } from 'react'
import "./Home.css"
import { useContext } from 'react'

import { Link } from 'react-router-dom';
import { ApiContext } from '../../context/ApiContext';

import { UrlContext } from '../../context/UrlContext';

function Home() {

const { planets, page, setPage, totalItems } = React.useContext(ApiContext)
const {handleClick} = React.useContext(UrlContext)

  return (
    <div className='home'>
    <div className='planets'>
    {
      
        planets.map((planet) => (
            <div key={planet.name} >
               <h3>Name : {planet.name}</h3>
               <h4>Climate : {planet.climate}</h4>
               <h5>Population : {planet.population}</h5>
               <h4>Terrain : {planet.terrain}</h4>
                {/*
              // planet.residents.map((resi, index) => (
              //   <ul>
              //     <li>{resi}</li>
              //   </ul>
              // ))
              <Link to={`/planet/${planet.name}`}>Residence</Link>
              <button onClick={() => setUrl(planet.residents)}>Residence </button>
              /*/ }


                <button onClick={() => handleClick(planet.residents, planet.name)}>Residence </button>


        
            </div>
        ))
    }
    </div>

    <div className='navigation'>
    <button onClick={() => setPage(page - 1)} disabled={page===1} >
    PREV
    </button>

    <h3>{page}</h3>

<button
 onClick={() => setPage(page + 1)}
  disabled={page===Math.ceil(totalItems / 3)} 
 
 >
    NEXT
    </button>
    </div>
    </div>
  )
}

export default Home