import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../img/logo.png'



const DivContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  align-self: center;
`

const DivInter = styled.div`
  background-color:#8D7070;
  border-radius:10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

const Image = styled.img`
  width: 25%;
`;

const Button = styled.button`
  background-color:#ede1e1;
  color:#8d7070;
  border-radius:5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;


function Index() {

  return (

    <DivContainer>
      <DivInter>
        <Image src={logo} alt="" />
        <h1>The Dog Api!</h1>
        <Link to='/home'>
          <Button>Start!</Button>
        </Link>
        <h3>By Lien Sanchez</h3>
        <ButtonContainer>
          <Button>Github</Button>
          <Button>LinkedIn</Button>
        </ButtonContainer>
        <p>2023 FullStack Soy Henry</p>
      </DivInter>
    </DivContainer>


  )
}

export default Index