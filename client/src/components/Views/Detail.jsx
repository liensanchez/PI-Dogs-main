import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import DetailCard from '../DetailCard';



const DivContainer = styled.div`
  margin-top: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`

function Detail() {

  let {id} = useParams()

  const [dog, setDog] = useState([])

  useEffect(() => {

    async function getData() {
      
      const dogsResponse = await axios.get(`/dogs/${id}`)

      setDog(dogsResponse.data)
    }    

    getData()
  }, [id])

  const showDog = dog.map((dog) => <DetailCard id={dog.id}
      key={dog.id}
      name={dog.name} 
      img={dog.image}  
      temperament={dog.temperament}
      weight={dog.weight}
      height={dog.height}
      lifeSpan={dog.lifeSpan}
  />
)
  return (
    <DivContainer>
      {showDog}
    </DivContainer>
  )
}

export default Detail