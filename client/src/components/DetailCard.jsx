import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'



const DivInter = styled.div`
  background-color:#8D7070;
  border-radius:10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 6px 6px 18px;
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius:10px;
  box-shadow: 2px 2px 8px;
`;

const DataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding:20px;
`;

const LeftContainer = styled.div`
  
`;

const ButtonContainer = styled.div`
`

const InfoContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  padding:20px;
`

const Button = styled.button`
  &:hover{
    transform: scale(1.15);
  }
  background-color:#ede1e1;
  color:#8d7070;
  border-radius: 5px;
  margin:20px;
  padding:5px;
  border: none;
  transition: all 0.8s;
  box-shadow: #2c2c2c 1px 1px 2px;
`;

function DetailCard(showDog) {

  const dog = showDog


  return (
    <>
      <DivInter> 
      <DataContainer key={dog.id}>
        <LeftContainer>
          <ButtonContainer>
            <Link to='/home'>
              <Button>Back to Home</Button>
            </Link>
          </ButtonContainer>
          <InfoContainer>
            <h2>Temperaments: </h2>
            <p>{dog.temperament}</p>
            <h2>Weight: </h2>
             <p>From {dog.weight[0]} to {dog.weight[1]} kilos</p> 
            <h2>Height: </h2>
            <p>From {dog.height} cm</p>
            <h2>Life Span: </h2>
            <p>Between {dog.lifeSpan} of life</p>
          </InfoContainer>
        </LeftContainer>

        <RightContainer>
          <h1>Breed:</h1>
          <h1>{dog.name}</h1>
          <Image src={dog.img} alt="" />
        </RightContainer>

      </DataContainer>
      </DivInter>
    </>

  )
}

export default DetailCard