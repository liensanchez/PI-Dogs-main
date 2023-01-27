import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changePage } from '../redux/action/action'

function Pagination() {

  const dispatch = useDispatch()

  const currentPage = useSelector(state => state.currentPage)
  
  const dogs = useSelector(state => state.dogs)


  const handlePrev = () => {
    if (currentPage > 1) {
      dispatch(changePage(currentPage - 1))
    }
  }

  const handleNext = () => {
    if (currentPage < Math.ceil(dogs.length / 8)) {
      dispatch(changePage(currentPage + 1))
    }
  }

  return (
    <div>
      <button onClick={handlePrev} disabled={currentPage === 1}>←</button>
      <button>{currentPage}</button>
      <button onClick={handleNext} disabled={currentPage === Math.ceil(dogs.length / 8)}>→</button>
    </div>
  )
}

export default Pagination
