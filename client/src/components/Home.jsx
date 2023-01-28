import React from 'react'
import {useSelector} from 'react-redux'
import Cards from './Cards'
import Pagination from './Pagination'
import Filters from './Filters'

function Home() {

  const dog = useSelector(state => state.dogsWithFilters)

  console.log(dog)

  const currentPage = useSelector(state => state.currentPage)
  
  return (
    <>
      <Filters/>
      <Cards dog={dog.slice((currentPage-1) *8, currentPage * 8)}/>
      <Pagination/>
    </>
  )
}


export default Home

