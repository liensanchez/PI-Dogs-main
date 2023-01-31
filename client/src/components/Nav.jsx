import React from 'react'
import SearchBar from './SearchBar'
import { Link, useNavigate } from 'react-router-dom'
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
  box-shadow: 0px 6px 12px;
`

const SearchContainer = styled.div`
  display:flex;
  align-items: center;
`

const LogoContainer = styled.div`
  display:flex;
  align-items: center;
`

const ButtonContainer = styled.div`
  display:flex;
  align-items: center;
`

const Logo = styled.img`
  height:50px;
`;

const Button = styled.button`
  &:hover{
    transform: scale(1.15);
  }
  background-color:#ede1e1;
  color:#8d7070;
  border-radius:5px;
  margin-left:5px;
  border: none;
  box-shadow: #2c2c2c 1px 1px 2px;
  transition: all 0.8s;
`;


function Nav() {

  const navigate = useNavigate()

  const home = async () => {
        
    navigate('/home')
  }


  return (
    <NavContainer>
      <NavBar>
        <LogoContainer>
          <Logo src={logo} alt="" onClick={home}/>
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