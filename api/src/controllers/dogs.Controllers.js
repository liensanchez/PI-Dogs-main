const axios = require('axios');
const {Dog, Temperaments} = require('../db');


const allDogsInfo = async () => {

  const infoAPI = await axios.get('https://api.thedogapi.com/v1/breeds/');

  const dogApi = infoAPI.data.map((dog) => {
    return{
      id: dog.id,
      name: dog.name.toLowerCase(),
      weight: dog.weight.metric,
      height: dog.height.metric,
      temperament: dog.temperament,
      lifeSpan: dog.life_span,
      image: dog.image.url
    }
  })

  const infoDB = await Dog.findAll({

     include: {

      model: Temperaments,

      attributes : ["name"],

      through: {

        attributes: []
      } 
    }
  })


  const dogDB = infoDB.map((dog) => {
    return{
      id: dog.id,
      name: dog.name.toLowerCase(),
      weight: dog.weight,
      height: dog.height,
      temperament:  dog.Temperaments.map(temp => temp.name).join(', '),
      lifeSpan: dog.life_span,
      image: dog.image,
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
                                    weight: dog.weight,
                                    height: dog.height,
                                    temperament: dog.temperament,
                                    lifeSpan: dog.life_span,
                                    image: dog.image,
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

  const arrTemperament = temperament.split(', ')

  const temp = await Promise.all(arrTemperament.map(async (temp) => {

    return await Temperaments.findOrCreate({

        where: {name:temp}, 

        default: {name: temp}
    })
  }))

  await newDog.addTemperament(temp.map(t => t[0]))

  return newDog
}


module.exports = {
  allDogsInfo,
  searchID,
  searchName,
  createDog
}