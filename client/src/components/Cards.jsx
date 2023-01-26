import React from 'react'
import Card from './Card'

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
    <div>
      {showDog}
    </div>
  )
}

export default Cards