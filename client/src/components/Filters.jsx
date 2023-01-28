import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useDispatch} from 'react-redux'
import { orderDogsAlphabetical, orderDogsReversed, orderDogsByOriginDB, orderDogsByOriginAPI, allDogs } from '../redux/action/action'



function Filters() {

  const dispatch = useDispatch()


  const alphabeticalOrder = (dogs) => {

    dispatch(orderDogsAlphabetical(dogs))
  }

  const reversedAlphabeticalOrder = (dogs) => {

    dispatch(orderDogsReversed(dogs))
  }


  const [recharge, setRecharge] = useState(false)

  const originOrderDB = (dogs) => {
    if (recharge === false) {

      dispatch(orderDogsByOriginDB(dogs)) 

      setRecharge(true)
    } else {

      dispatch(allDogs())

      dispatch(orderDogsByOriginDB(dogs)) 

      setRecharge(false)
    }
  }

  const originOrderAPI = (dogs) => {
    if (recharge === false) {

      dispatch(orderDogsByOriginAPI(dogs))

      setRecharge(true)
    } else {

      dispatch(allDogs())

      dispatch(orderDogsByOriginAPI(dogs))

      setRecharge(false)
    }   
  }


  const [temperament, setTemperament] = useState([])

  useEffect(() => {

    async function getData() {

      const tempsResponse = await axios.get('http://localhost:3003/temperaments')

      setTemperament(tempsResponse.data)
    }    

    getData()
  }, [])


  const temperamentCheck = (name) => {
    console.log(name)
  }



  return (
    <>
      <select name="alphabeticGroup" id="">
        <option value="" >Alphabetical Order</option>
        <option value="" onClick={alphabeticalOrder}>Orden alfabetico</option>
        <option value="" onClick={reversedAlphabeticalOrder}>Orden alfabetico invertido</option>
      </select>
      <select name="originGroup" id="">
        <option value="" /* onClick={allOrigins} */>All origins</option>
        <option value="" onClick={originOrderDB}>Database</option>
        <option value="" onClick={originOrderAPI}>API</option>
      </select>
      <select name="weightGroup" id="">
        <option value=""></option>
        <option value="">Peso</option>
      </select>

      <select name="select">
        <option>All Temperaments</option>
        {temperament.map((temperament) => (
                                <option value={temperament.id} key={temperament.id} onClick={() => temperamentCheck(temperament.name)} >{temperament.name}</option>
                            ))} 
      </select>

    </>
  )
}

export default Filters