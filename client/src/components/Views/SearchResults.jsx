import React from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Cards from '../Cards'
import Pagination from '../Pagination'
import styled from 'styled-components'
import Error from './Error'
import { changePage } from '../../redux/action/action'


const DivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`


function SearchResults() {

  const dispatch = useDispatch()

  let currentPage = useSelector(state => state.currentPage)

  const [dogs, setDogs] = useState([])

  const location = useLocation()

  const query = new URLSearchParams(location.search)

  const search = query.get('name')

  useEffect(() => {
    async function getData() {
      const dogsResponse = await axios.get(`/dogs?name=${search}`)  
      setDogs(dogsResponse.data)
    }    
    getData()

    dispatch(changePage(currentPage = 1))
  }, [search])

  let errorSearch = 'No dog found'

  return (
    <>
    <h1>Search Results:</h1>
    <DivContainer>
      <Cards dog={dogs.slice((currentPage-1) *8, currentPage * 8)}/>
      {dogs.length > 8 && <Pagination/> }
    </DivContainer>
    {dogs.length === 0 && <Error props={errorSearch} />}
    </>
  )
}

export default SearchResults

