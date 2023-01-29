import React from 'react'
import SearchBar from './SearchBar'
import styled from 'styled-components'
import logo from '../img/logo.png'

const NavContainer = styled.div`
  width:100%;
`
const NavBar = styled.div`
  display:flex;
  flex-direction: row;
  background-color: #8d7070;
  justify-content: space-between;
`

const SearchContainer = styled.div`
  
`

const Logo = styled.img`
  width: 5%;
`;




function Nav() {
  return (
    <NavContainer>
      <NavBar>
        <Logo src={logo} alt="" />
        <SearchContainer>
          <SearchBar/>
        </SearchContainer>
      </NavBar>
    </NavContainer>
  )
}

export default Nav