import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import Cards from './Cards'
import { allDogs } from '../redux/action/action'
import Pagination from './Pagination'
import Filters from './Filters'

function Home() {

  const dispatch = useDispatch()
  const dog = useSelector(state => state.dogs)
  const currentPage = useSelector(state => state.currentPage)

  useEffect(() => {
    dispatch(allDogs())
  }, [dispatch])

  return (
    <>
      <Filters/>
      <Cards dog={dog.slice((currentPage-1) *8, currentPage * 8)}/>
      <Pagination/>
    </>
  )
}


export default Home

