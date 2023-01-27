import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { orderDogs } from '../redux/action/action'



function Filters() {
  const dispatch = useDispatch()

  const [temperament, setTemperament] = useState([])

  useEffect(() => {

    async function getData() {

      const tempsResponse = await axios.get('http://localhost:3003/temperaments')

      setTemperament(tempsResponse.data)
    }    

    getData()
  }, [])

  const alphabeticalOrder = () => {

    dispatch(orderDogs())
  }

  return (
    <>
      <button onClick={alphabeticalOrder}>Orden alfabetico</button>
      <button>Peso</button>
      <button>Origen</button>
      <select name="select">
        <option></option>
        {temperament.map((temperament) => (
                                <option value={temperament.id} key={temperament.id}>{temperament.name} </option>
                            ))} 
      </select>

    </>
  )
}

export default Filters