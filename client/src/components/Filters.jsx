import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { orderDogsAlphabetical, orderDogsReversed, orderDogsByOriginDB, orderDogsByOriginAPI, orderByTemperament, copyOfDogs, orderDogsWeightAsc, orderDogsWeightDsc } from '../redux/action/action'



function Filters() {

  const dispatch = useDispatch()

  const allTheDogs = useSelector(state => state.dogs) 


  const [temperament, setTemperament] = useState([])

  useEffect(() => {

    async function getData() {

      const tempsResponse = await axios.get('http://localhost:3003/temperaments')

      setTemperament(tempsResponse.data)
    }    

    getData()
  }, [])

  const temperamentOrder = (temperament) => {

      dispatch(copyOfDogs(allTheDogs))

      dispatch(orderByTemperament(temperament))
  }

  
  const [recharge, setRecharge] = useState(false)

  const originOrderDB = (dogs) => {

    if (recharge === false) {
      dispatch(copyOfDogs(allTheDogs))

      dispatch(orderDogsByOriginDB(dogs)) 

      setRecharge(true)
    } else{

      dispatch(copyOfDogs(allTheDogs))

      dispatch(orderDogsByOriginDB(dogs)) 

      setRecharge(false)
    }
  }

  const originOrderAPI = (dogs) => {

     if (recharge === false) {
      dispatch(copyOfDogs(allTheDogs))

      dispatch(orderDogsByOriginAPI(dogs))

      setRecharge(true)
    } else{ 

      dispatch(copyOfDogs(allTheDogs))

      dispatch(orderDogsByOriginAPI())

      setRecharge(false)
     }    
  } 


  const alphabeticalOrder = () => {

    dispatch(orderDogsAlphabetical())
  }

  const reversedAlphabeticalOrder = () => {

    dispatch(orderDogsReversed())
  }


  const weightAscOrder = () => {

    dispatch(orderDogsWeightAsc())
  }

  const weightDscOrder = () => {

    dispatch(orderDogsWeightDsc())
  }



  return (
    <>
      <select name="select">
        <option>All Temperaments</option>
        {temperament.map((temperament) => (
                                <option value={temperament.id} key={temperament.id} onClick={() => temperamentOrder(temperament.name)} >{temperament.name}</option>
                            ))} 
      </select>

      <select name="originGroup" id="">
        <option value="" /* onClick={allOrigins} */>All origins</option>
        <option value="" onClick={originOrderDB}>Database</option>
        <option value="" onClick={originOrderAPI}>API</option>
      </select>
      
      <select name="alphabeticGroup" id="">
        <option value="" >Alphabetical Order</option>
        <option value="" onClick={alphabeticalOrder}>Orden alfabetico</option>
        <option value="" onClick={reversedAlphabeticalOrder}>Orden alfabetico invertido</option>
        <option value="" onClick={weightAscOrder}>mayor</option>
        <option value="" onClick={weightDscOrder}>menor</option>
      </select>

    </>
  )
}

export default Filters