import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import Cards from './Cards'
import Pagination from './Pagination'
import Filters from './Filters'

function Home() {

  const dog = useSelector(state => state.dogsWithFilters)

  const currentPage = useSelector(state => state.currentPage)
  
  return (
    <>
      <Link to ='/dogs/createdog' >
        <button>Create New Breed</button>
      </Link>
      <Filters/>
      <Cards dog={dog.slice((currentPage-1) *8, currentPage * 8)}/>
      <Pagination/>
    </>
  )
}


export default Home

