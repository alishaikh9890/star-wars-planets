import React, { createContext, useEffect } from 'react'

import { useNavigate } from 'react-router-dom';

export const UrlContext = createContext();

export const UrlContextProvider = ({children}) => {

const [planet, setPlanet] = React.useState([]);
const [film, setFilm] = React.useState([]);
const [vehicle, setVehicle] = React.useState([]);
const [character, setCharacter] = React.useState([]);
const [data, setData] = React.useState([])
const [loading, setLoading] = React.useState(false)
const [error, setError] = React.useState(false)
const [names, setNames] = React.useState('')
const [resident, setResident] = React.useState('')
const [movie, setMovie] = React.useState('')

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


const handleVehicle = (vehicle, name) => {
  vehicle.map((link) => {
      fetch(link)
      .then((res) => res.json())
      .then((res) => setVehicle(prev => [...prev, res]))
      .catch((err) => setError(true))
      .finally(() => setLoading(false))

  })

setMovie(name)
  navigate("/vehicle")
}


const handleChar = (characters) => {
  characters.map((link) => {
      fetch(link)
      .then((res) => res.json())
      .then((res) => setCharacter(prev => [...prev, res]))
      .catch((err) => setError(true))
      .finally(() => setLoading(false))

  })


  console.log("charader: ", character);

  // navigate("/vehicle")
}


// console.log(planet)

  return (
    <UrlContext.Provider value={{planet, loading, error, names, handleClick, handleFilms, handleVehicle, resident, film, movie, vehicle, handleChar, character}}>
        {children}
    </UrlContext.Provider>
  )
}

