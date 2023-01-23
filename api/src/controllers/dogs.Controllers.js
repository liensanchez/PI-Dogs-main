const axios = require('axios');
const {Dog, Temperaments} = require('../db');



const allDogsInfo = async () => {

  const infoAPI = await axios.get('https://api.thedogapi.com/v1/breeds');

  const dogApi = infoAPI.data

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

  const allDogs = await allDogsInfo()

  const dog = allDogs.filter(dog => dog.name.includes(dogName))

  return dog 
 
} 


const searchID = async (dogId) => {

  const allDogs = await allDogsInfo()

  const dog = allDogs.filter((dog) => dog.id == dogId)
  
  return dog

/*   allDogs.sort()
  allDogs[dogId.id]   
  allDogs.find(dog => dog.id == dogId) */
/* 
  let dog = dogId 

  const dogAPI = await axios.get(`https://api.thedogapi.com/v1/breeds/${dog}`);

  let theDogInfo = await (dogAPI.data)

  return theDogInfo */
}


const createDog = async ( name, height, weight, lifeSpan, temperament) => {
  
  const newDog = await Dog.create({name, height, weight, lifeSpan})

  const temperamentDB = await Temperaments.findOrCreate({

    where: {name:temperament}, 
    
    default: {name: temperament}
  })

  return newDog
}


module.exports = {
  allDogsInfo,
  searchID,
  searchName,
  createDog
}