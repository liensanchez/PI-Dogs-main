const axios = require('axios')


const allDogsInfo = async () => {
  const dogsAPI = await axios.get('https://api.thedogapi.com/v1/breeds');
  //lo transformamos para mostrar correctamente la info
  let allDogsInfo = await (dogsAPI.data)
  return allDogsInfo
}

const searchDog = async (dogName) => {

  let dog = dogName 

  const dogAPI = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${dog}`);
  //lo transformamos para mostrar correctamente la info
  let theDogInfo = await (dogAPI.data)
  return theDogInfo
}


module.exports = {
  allDogsInfo,
  searchDog
}