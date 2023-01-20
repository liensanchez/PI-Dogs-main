const axios = require('axios')


const allDogsInfo = async () => {

  const dogsAPI = await axios.get('https://api.thedogapi.com/v1/breeds');

  let allDogsInfo = await (dogsAPI.data)
  
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


module.exports = {
  allDogsInfo,
  searchDog,
  searchID
}