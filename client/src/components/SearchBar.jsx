import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const SearchContainer = styled.div`
  display:flex;
`

const Button = styled.button`
  background-color:#ede1e1;
  color:#8d7070;
  border-radius:5px;
  margin-left:5px;
  border: none;
`;

const Input = styled.input`
  border: none;
  border-radius:5px;
`;

function SearchBar() {

  const navigate = useNavigate()

  const [searchBreed, setSearchBreed] = useState('')


  const handleChange = e => {
   
    setSearchBreed(e.target.value)
  }
  
  const search = async () => {
        
    navigate(`/dogs?name=${searchBreed}`)
  }

  return (
    <SearchContainer>
      <Input type='search' onChange={handleChange} name='search' placeholder='Ingresa una Raza'/>
      <Button onClick={search}>Search breed</Button>
    </SearchContainer>
  )
}


export default SearchBar