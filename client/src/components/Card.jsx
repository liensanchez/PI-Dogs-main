import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const DivContainer = styled.div`
  background-color:#8D7070;
  color:#ede1e1;
  border-radius:10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  width: 300px;
  box-shadow: #2c2c2c 6px 6px 18px;
  text-align: center;
  padding:5px;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius:10px;
  box-shadow: #2c2c2c  2px 2px 8px;
`;

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


function Card(dog) {

  return (
    <>
      <DivContainer key={dog.id}>
        <h1>{dog.name}</h1>
        <Image src={dog.img} alt="" />
        <div>
          <p>{dog.temperament}</p>
          <h3>Weight:</h3>
          <p>From {dog.weight[0]} to {dog.weight[1]} kilos</p>
        </div>
        <Link to={`/dogs/${dog.id}` } > 
          <Button>More Info</Button>
        </Link>
      </DivContainer>
    </>
  )
}

export default Card