import React, { useEffect } from 'react'
import "./Home.css"
import { useContext } from 'react'

import { Link } from 'react-router-dom';
import { ApiContext } from '../../context/ApiContext';

import { UrlContext } from '../../context/UrlContext';

function Home() {

const { planets, page, setPage, totalItems, error, loading } = useContext(ApiContext)
const {handleClick} = React.useContext(UrlContext)

  return (
    <div className='home'>
    <div className='planets'>
    { loading ? (
      <div><img src='https:/i.pinimg.com/originals/83/0e/0f/830e0fdceaf364e4eb90d734f95dab7b.gif' alt="" />
      </div>
    ) : error ? (
      <h2 style={{color:"white", textShadow:"1px 1px red"}} > Planets losts</h2>
    ) : (
      
        planets.map((planet) => (
            <div key={planet.name}  className="button-40" >
            <img src='https://i.pinimg.com/originals/ed/a4/3a/eda43aca52541b9799b0b81b2fb47ddd.gif' alt='' />
               <p>Name : {planet.name}</p>
               <p>Climate : {planet.climate}</p>
               <p>Population : {planet.population}</p>
               <p>Terrain : {planet.terrain}</p>

                {/*
              // planet.residents.map((resi, index) => (
              //   <ul>
              //     <li>{resi}</li>
              //   </ul>
              // ))
              <Link to={`/planet/${planet.name}`}>Residence</Link>
              <button onClick={() => setUrl(planet.residents)}>Residence </button>
              /*/ }

                <button className="custom-btn btn-3" onClick={() => handleClick(planet.residents, planet.name)}>Residence </button>

            </div>
        ))
        )
    }
    </div>

    <div className='navigation'>
    <button style={{width:"100px", height:"35px"}} className="custom-btn btn-3" onClick={() => setPage(page - 1)} disabled={page===1} >
    ⬅ PREV
    </button>

    <h3>{page}</h3>

<button style={{width:"100px", height:"35px"}} className="custom-btn btn-3"
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