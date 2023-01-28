import React from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {useSelector} from 'react-redux'
import Cards from './Cards'
import Pagination from './Pagination'


function SearchResults() {

  const currentPage = useSelector(state => state.currentPage)

  const [dogs, setDogs] = useState([])

  const location = useLocation()

  const query = new URLSearchParams(location.search)

  const search = query.get('name')

  useEffect(() => {

    async function getData() {

      const dogsResponse = await axios.get(`http://localhost:3003/dogs?name=${search}`)
    
      setDogs(dogsResponse.data)
    }    

    getData()

  }, [search])


  return (
    <>
    <h1>Search Results:</h1>
      <Cards dog={dogs.slice((currentPage-1) *8, currentPage * 8)}/>
      {dogs.length > 8 && <Pagination/>}
    </>
  )
}

export default SearchResults

