import React from 'react'
import Card from './Card';
import styled from 'styled-components'



const DivDogs = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 45px;
  margin-bottom: 45px;
`

function Cards(prop) {
  const {dog} = prop

  const showDog = dog.map((dog) => <Card id={dog.id}
                                        key={dog.id}
                                        name={dog.name} 
                                        img={dog.image}  
                                        temperament={dog.temperament}
                                        weight={dog.weight}
                                        />
  )
  return (
    <DivDogs>
      {showDog}
    </DivDogs> 


  )
}

export default Cards