import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../img/logo.png'

const NavContainer = styled.div`
  width:100%;
`
const NavBar = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #8d7070;
`

const SearchContainer = styled.div`
  display:flex;
  align-items: center;
`
const LogoContainer = styled.div`

`
const ButtonContainer = styled.div`
  display:flex;
  align-items: center;
`

const Logo = styled.img`
  height:50px;
`;

const Button = styled.button`
  background-color:#ede1e1;
  color:#8d7070;
  border-radius:5px;
  margin-left:5px;
  border: none;
`;


function Nav() {
  return (
    <NavContainer>
      <NavBar>
        <LogoContainer>
          <Link to='/home'>
            <Logo src={logo} alt="" />
          </Link>
        </LogoContainer>
        <SearchContainer>
          <SearchBar/>
        </SearchContainer>
        <ButtonContainer>
          <Link to ='/dogs/createdog' >
            <Button>Create New Breed</Button>
          </Link>
        </ButtonContainer>
      </NavBar>
    </NavContainer>
  )
}

export default Nav