const axios = require('axios');
const {Dog, Temperaments} = require('../db');


const allDogsInfo = async () => {

  const infoAPI = await axios.get('https://api.thedogapi.com/v1/breeds');

  const dogApi = infoAPI.data.map((dog) => {
    return{
      id: dog.id,
      name: dog.name,
      weight: dog.weight.metric,
      height: dog.height.metric,
      temperament: dog.temperament,
      lifeSpan: dog.life_span,
      image: dog.image.url,
    }
})

  const dogDB = await Dog.findAll({

     include: {

      model: Temperaments,

      attributes : ["name"],

      through: {

        attributes: []
      } 
    }
  })

  let allDogsInfo = [...dogApi, ...dogDB]
  
  return allDogsInfo
}


const searchName = async (dogName) => {

  const getAllDogs = await allDogsInfo()

  const allDogs = getAllDogs.map((dog) => {
                                  return{
                                    id: dog.id,
                                    name: dog.name.toLowerCase(),
                                    weight: dog.weight.metric,
                                    height: dog.height.metric,
                                    temperament: dog.temperament,
                                    lifeSpan: dog.life_span,
                                    image: dog.image.url,
                                  }
  })
  
  const dog = allDogs.filter(dog => dog.name.includes(dogName))

  return dog 
} 


const searchID = async (dogId) => {

  const allDogs = await allDogsInfo()

  const dog = allDogs.filter((dog) => dog.id == dogId)
  
  return dog
}


const createDog = async ( name, height, weight, lifeSpan, temperament) => {
  
  const newDog = await Dog.create({name, height, weight, lifeSpan})

  const temperamentDB = await Temperaments.findOrCreate({

    where: {name:temperament}, 
    
    default: {name: temperament}
  })

  await newDog.addTemperament(temperamentDB[0])

  return newDog
}


module.exports = {
  allDogsInfo,
  searchID,
  searchName,
  createDog
}