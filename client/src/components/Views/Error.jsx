import React from 'react'
import ImgError from '../../img/404.png' 
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const DivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const DivInfo = styled.div`
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  background-color: #8d7070;
  border-radius:10px;
  align-items: center;
  justify-content: center;
  box-shadow: 6px 6px 18px;
`

const Img = styled.img`
  width: 50%;
  border-radius: 15px;
`

const Button = styled.button`
  &:hover{
    transform: scale(1.15);
  }
  background-color:#ede1e1;
  color:#8d7070;
  border-radius: 5px;
  margin:10px;
  border: none;
  box-shadow: #2c2c2c 1px 1px 2px;
  font-size: 15px;
  transition: all 0.8s;
`;


let errorRuta = 'This route does not exist'


function Error({props}) {
  return (
    <DivContainer>
      <DivInfo>
        <h2>Error: </h2>
        <h3>{props && props.length ? props : errorRuta}</h3>
        <Img src={ImgError} alt="" /> 
        <Link to='/home'>
          <Button>Home</Button>
        </Link>
      </DivInfo>
    </DivContainer>
  )
}

export default Error