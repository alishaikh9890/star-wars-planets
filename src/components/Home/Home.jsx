import React, { useEffect } from 'react'
import "./Home.css"
import { useContext } from 'react'

import { Link } from 'react-router-dom';
import { ApiContext } from '../../context/ApiContext';

import { UrlContext } from '../../context/UrlContext';

function Home() {

const { planets, page, setPage, totalItems, error, loading } = React.useContext(ApiContext)
const {handleClick} = React.useContext(UrlContext)

  return (
    <div className='home'>
    <div className='planets'>
    { loading ? (
      <div><img src='https://i.pinimg.com/originals/83/0e/0f/830e0fdceaf364e4eb90d734f95dab7b.gif' alt="" />
      </div>
    ) : error ? (
      <h2> something Went Wrong</h2>
    ) : (
      
        planets.map((planet) => (
            <div key={planet.name}  className="button-40" >
            <img src='https://i.pinimg.com/originals/3e/55/2f/3e552ff46b95bd34259c0025279873fc.gif' alt='' />
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


                <button class="custom-btn btn-3" onClick={() => handleClick(planet.residents, planet.name)}>Residence </button>

            </div>
        ))
        )
    }
    </div>

    <div className='navigation'>
    <button style={{width:"100px", height:"35px"}} class="custom-btn btn-3" onClick={() => setPage(page - 1)} disabled={page===1} >
    ⬅ PREV
    </button>

    <h3>{page}</h3>

<button style={{width:"100px", height:"35px"}} class="custom-btn btn-3"
 onClick={() => setPage(page + 1)}
  disabled={page===Math.ceil(totalItems / 3)} 
 
 >
    NEXT ➡
    </button>
    </div>
    </div>
  )
}

export default Home