import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components'



const DivContainer = styled.div`
  padding-top:45px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const DivInter = styled.div`
  padding-top:45px;
  background-color:#8D7070;
  border-radius:10px;
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
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border:solid 1px black;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  border:solid 1px black;
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

function Detail() {

  let {id} = useParams()

  const [dog, setDog] = useState([])

  useEffect(() => {

    async function getData() {
      
      const dogsResponse = await axios.get(`http://localhost:3003/dogs/${id}`)

      setDog(dogsResponse.data)
    }    

    getData()
  }, [id])

  return (
    <DivContainer>

      <DivInter>
        {dog.map((dog) => (
          <DataContainer key={dog.id}>
            <LeftContainer>
              <ButtonContainer>
                <Link to='/home'>
                  <Button>Back to Home</Button>
                </Link>
              </ButtonContainer>
              <h2>Temperaments: </h2>
              <p>{dog.temperament}</p>
              <h2>Weight: </h2>
              <p>From {dog.weight[0]} to {dog.weight[1]} kilos</p>
              <h2>Height: </h2>
              <p>From {dog.height} cm</p>
              <h2>Life Span: </h2>
              <p>Between {dog.lifeSpan} of life</p>
            </LeftContainer>

            <RightContainer>
              <h1>Breed:</h1>
              <h1>{dog.name}</h1>
              <Image src={dog.image} alt="" />
              
            </RightContainer>

          </DataContainer>
        ))}
      </DivInter>
    </DivContainer>
  )
}

export default Detail