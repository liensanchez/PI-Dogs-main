import React, { useRef } from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { orderDogsAlphabetical, orderDogsReversed, orderDogsByOriginDB, orderDogsByOriginAPI, orderByTemperament, copyOfDogs, orderDogsWeightAsc, orderDogsWeightDsc } from '../redux/action/action'
import styled from 'styled-components'


const DivContainer = styled.div`
  display:flex;
  margin: 30px;
`;

const FilterDiv = styled.div`
  width: 200px;
  margin-top: 45px;
  height: 50vh;
  background-color: #ede1e1;
  padding: 25px;
  border-radius:10px;
  box-shadow: 6px 6px 18px;
  display:flex;
  flex-direction: column;
  justify-content: center;
`;

const Select = styled.select`
  padding: 5px;
  margin: 5px;
  background-color: #8d7070;
  color: #FDF4ED;
  border-radius: 5px;
  border: none;  
` 

const Button = styled.button`
  &:hover{
    transform: scale(1.15);
  }
  background-color:#8d7070;
  color:#ede1e1;
  border-radius: 5px;
  margin:20px;
  padding:5px;
  border: none;
  transition: all 0.8s;
`;


function Filters() {

  const dispatch = useDispatch()

  const allTheDogs = useSelector(state => state.dogs) 


  const [temperament, setTemperament] = useState([])

  useEffect(() => {

    async function getData() {

      const tempsResponse = await axios.get('/temperaments')

      setTemperament(tempsResponse.data)
    }    

    getData()
  }, [])

  const temperamentOrder = (temperament) => {

      dispatch(copyOfDogs(allTheDogs))

      dispatch(orderByTemperament(temperament))

      originRef.current.value = 'defaultOrigin'
    
      orderRef.current.value = 'defaultOrder'
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

  const filterReset = () => {

    dispatch(copyOfDogs(allTheDogs))
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


  const temperamentRef = useRef(null);

  const originRef = useRef(null);

  const orderRef = useRef(null);

  const resetFilters = () => {

    dispatch(copyOfDogs(allTheDogs))

    temperamentRef.current.value = 'defaultTemperaments'

    originRef.current.value = 'defaultOrigin'
    
    orderRef.current.value = 'defaultOrder'
  }


  return (
    <DivContainer>
      <FilterDiv>
        <h2>Filters:</h2>

        <div>
        <label>Temperaments</label>
        <Select name="temperament" ref={temperamentRef}>
          <option value='defaultTemperaments' onClick={filterReset}>All Temperaments</option>
          {temperament.map((temperament) => (
                                  <option value={temperament.id} key={temperament.id} onClick={() => temperamentOrder(temperament.name)} >{temperament.name}</option>
                              ))} 
        </Select>          
        </div>

        <div>
        <label>Origin</label> <br></br>
        <Select name="originGroup" id="" ref={originRef}>
          <option value='defaultOrigin' onClick={filterReset}>All origins</option>
          <option value="Database" onClick={originOrderDB}>Database</option>
          <option value="Api" onClick={originOrderAPI}>API</option>
        </Select>          
        </div>

        <div>
        <label>Orders</label>
        <Select name="alphabeticGroup" id="" ref={orderRef}>
          <option value='defaultOrder' onClick={filterReset}>Any Order</option>
          <option value="alphabeticalOrder" onClick={alphabeticalOrder}>Alphabetical Ascending</option>
          <option value="reversedAlphabeticalOrder" onClick={reversedAlphabeticalOrder}>Alphabetical Descending</option>
          <option value="weightAscOrder" onClick={weightAscOrder}>Weight Ascending</option>
          <option value="weightDscOrder" onClick={weightDscOrder}>Weight Descending</option>
        </Select>          
        </div>

        <Button onClick={resetFilters}>Reset Filters</Button>

      </FilterDiv>
    </DivContainer>
  )
}

export default Filters