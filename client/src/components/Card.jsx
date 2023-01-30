import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const DivContainer = styled.div`
  background-color:#8D7070;
  border-radius:10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding:50px;
  margin:30px;
  width:300px;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius:10px;
`;

const Button = styled.button`
  background-color:#ede1e1;
  color:#8d7070;
  border-radius:5%;
`;


function Card(dog) {

  return (
    <>
      <DivContainer key={dog.id}>
        <h1>{dog.name}</h1>
        <Image src={dog.img} alt="" />
        <p>{dog.temperament}</p>
        <p>Between {dog.weight} kilos</p>
        <Link to={`/dogs/${dog.id}` } > 
          <Button>Mas info</Button>
        </Link>
      </DivContainer>
    </>
  )
}

export default Card