const axios = require('axios');
const { Op } = require("sequelize");
const {Dog} = require('../db');


const allDogsInfo = async () => {

  const infoAPI = await axios.get('https://api.thedogapi.com/v1/breeds');

  const dogApi = infoAPI.data

  const dogDB = await Dog.findAll()

  let allDogsInfo = [...dogApi, ...dogDB]
  
  return allDogsInfo
}


const searchName = async (dogName) => {

  const allDogs = await allDogsInfo()

  const dog = allDogs.find(dog => dog.name == dogName)

  return dog

/* 
  const infoAPI = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${dogName}`);

  let dogFound;

  if (infoAPI.data.length == 1) {

    dogFound = await(infoAPI.data)
  } else {

    dogFound = await Dog.findAll({

      where: {

        name: { [Op.like]: `${dogName}`}
      }
    })
  }  */

} 


const searchID = async (dogId) => {


  const allDogs = await allDogsInfo()

/*   allDogs.sort()
  allDogs[dogId.id] */
  const dog = allDogs.find(dog => dog.id == dogId)
  
 /*  allDogs.find(dog => dog.id == dogId) */

  return dog
/* 
  let dog = dogId 

  const dogAPI = await axios.get(`https://api.thedogapi.com/v1/breeds/${dog}`);

  let theDogInfo = await (dogAPI.data)

  return theDogInfo */
}


const createDog = async ( name, height, weight, lifeSpan) => {

  const newDog = await Dog.create({ name, height, weight, lifeSpan})

  return newDog
}


module.exports = {
  allDogsInfo,
  searchID,
  searchName,
  createDog
}