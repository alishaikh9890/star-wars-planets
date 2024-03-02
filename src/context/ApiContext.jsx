import React, { createContext, useEffect } from 'react'



export const ApiContext = createContext();

export const ApiContextProvider = ({children}) => {

const [planets, setPlanets] = React.useState([]);
const [loading, setLoading] = React.useState(false)
const [error, setError] = React.useState(false)

const [data, setData] = React.useState([])

const [page,setPage] = React.useState(1);

const [totalItems, setTotalItems] = React.useState(0)

useEffect(() => {
    fetch(`https://swapi.dev/api/planets/?page=${page}&format=json`)
    .then((res) => {
        let total = res.headers.get("X-Total-Count");
        setTotalItems(+total);
        return res.json();
    })
    .then((res) => setPlanets(res.results))
    .catch((err) => setError(true))
    .finally(() => setLoading(false));
}, [page])

console.log(planets)



  return (
    <ApiContext.Provider value={{planets, page, setPage, totalItems}}>
        {children}
    </ApiContext.Provider>
  )
}

