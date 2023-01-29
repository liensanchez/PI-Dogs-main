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
  background-color: #8d7070;
  justify-content: space-between;
`

const SearchContainer = styled.div`
  display: flex;
`

const Logo = styled.img`
  width: 10%;
`;




function Nav() {
  return (
    <NavContainer>
      <NavBar>
        <Link to='/home'>
          <Logo src={logo} alt="" />
        </Link>
        <SearchContainer>
          <SearchBar/>
        </SearchContainer>
      </NavBar>
    </NavContainer>
  )
}

export default Nav