import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'


function Filters() {

  const [temperament, setTemperament] = useState([])

  useEffect(() => {

    async function getData() {
      const tempsResponse = await axios.get('http://localhost:3003/temperaments')

      setTemperament(tempsResponse.data)
    }    

    getData()
  }, [])


  return (
    <>
      <button>Orden alfabetico</button>
      <button>Peso</button>
      <button>Origen</button>
      <select name="select">
        <option value={temperament.id}>{temperament.name} </option>
        {temperament.map((temperament) => (
                                <option value={temperament.id}>{temperament.name} </option>
                            ))} 
      </select>

    </>
  )
}

export default Filters