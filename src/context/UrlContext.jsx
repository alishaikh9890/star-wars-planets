import React, { createContext, useEffect } from 'react'

import { useNavigate } from 'react-router-dom';

export const UrlContext = createContext();

export const UrlContextProvider = ({children}) => {

const [planet, setPlanet] = React.useState([]);
const [data, setData] = React.useState([])
const [loading, setLoading] = React.useState(false)
const [error, setError] = React.useState(false)
const [names, setNames] = React.useState('')

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

// console.log(planet)

  return (
    <UrlContext.Provider value={{planet, names, handleClick}}>
        {children}
    </UrlContext.Provider>
  )
}

