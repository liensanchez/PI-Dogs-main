const axios = require('axios');
const {Dog} = require('../db');


const allDogsInfo = async () => {

  const infoAPI = await axios.get('https://api.thedogapi.com/v1/breeds');

  const dogApi = infoAPI.data

  const dogDB = await Dog.findAll()

  let allDogsInfo = [...dogApi, ...dogDB]
  
  return allDogsInfo
}


const searchDog = async (dogName) => {

  let dog = dogName 

  const dogAPI = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${dog}`);

  let theDogInfo = await (dogAPI.data)

  return theDogInfo
}


const searchID = async (dogId) => {

  let dog = dogId 

  const dogAPI = await axios.get(`https://api.thedogapi.com/v1/breeds/${dog}`);

  let theDogInfo = await (dogAPI.data)

  return theDogInfo


}


const createDog = async ( name, height, weight, lifeSpan) => {

  const newDog = await Dog.create({ name, height, weight, lifeSpan})

  return newDog
}


module.exports = {
  allDogsInfo,
  searchDog,
  searchID,
  createDog
}