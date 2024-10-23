import React, { createContext, useEffect } from 'react'

import { useNavigate } from 'react-router-dom';

export const UrlContext = createContext();

export const UrlContextProvider = ({children}) => {

const [planet, setPlanet] = React.useState([]);
const [film, setFilm] = React.useState([]);
const [data, setData] = React.useState([])
const [loading, setLoading] = React.useState(false)
const [error, setError] = React.useState(false)
const [names, setNames] = React.useState('')
const [resident, setResident] = React.useState('')

const navigate = useNavigate()

const handleClick = (urls, name) => {
    urls.map((link) => {
        fetch(link)
        .then((res) => res.json())
        .then((res) => setPlanet(prev => [...prev, res]))
        .catch((err) => setError(true))
        .finally(() => setLoading(false))

    })

setNames(name)
    navigate("/planet")
}


const handleFilms = (films, name) => {
  films.map((link) => {
      fetch(link)
      .then((res) => res.json())
      .then((res) => setFilm(prev => [...prev, res]))
      .catch((err) => setError(true))
      .finally(() => setLoading(false))

  })

setResident(name)
  navigate("/film")
}


// console.log(planet)

  return (
    <UrlContext.Provider value={{planet, loading, error, names, handleClick, handleFilms, resident, film}}>
        {children}
    </UrlContext.Provider>
  )
}

