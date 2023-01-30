import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changePage } from '../redux/action/action'
import styled from 'styled-components'

const Button = styled.button`
  &:hover{
    transform: scale(1.15);
  }
  background-color:#ede1e1;;
  color:#8d7070;
  border-radius: 5px;
  margin:20px;
  padding:5px;
  border: none;
  transition: all 0.8s;
  &.disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
  }
`;

const ButttonConatiner = styled.div`
  display: flex;
  justify-content: center;
  background-color:#8d7070;
  border-radius: 15px;
  margin:20px;
  padding:5px;
  border: none;
  box-shadow: 6px 6px 18px;
  & :disabled{
    display:none;
  }
`;


function Pagination() {

  const dispatch = useDispatch()

  const currentPage = useSelector(state => state.currentPage)
  
  const dogs = useSelector(state => state.dogs)


  const handlePrev = () => {
    if (currentPage > 1) {
      dispatch(changePage(currentPage - 1))
    }
    window.scrollTo({top: 0, left: 0})
  }

  const handleNext = () => {
    if (currentPage < Math.ceil(dogs.length / 8)) {
      dispatch(changePage(currentPage + 1))
    }
    window.scrollTo({top: 0, left: 0})
  }

  return (
    <ButttonConatiner>
      <Button onClick={handlePrev} disabled={currentPage === 1} >←</Button>
      <Button>{currentPage}</Button>
      <Button onClick={handleNext} disabled={currentPage === Math.ceil(dogs.length / 8)}>→</Button>
    </ButttonConatiner>
  )
}

export default Pagination
