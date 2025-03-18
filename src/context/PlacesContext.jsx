import { createContext, useEffect, useState } from 'react'

export const PlacesContext = createContext()

const PlacesProvider = ({ children }) => {
  const [places, setPlaces] = useState([])
  const getData = async () => {
    const response = await fetch('/places.json')
    const places = await response.json()
    setPlaces(places)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <PlacesContext.Provider value={{ places }}>
      {children}
    </PlacesContext.Provider>
  )
}

export default PlacesProvider
