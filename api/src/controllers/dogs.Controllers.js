const axios = require('axios')


const allDogsInfo = async () => {
  const dogsAPI = await axios.get('https://api.thedogapi.com/v1/breeds');
  //lo transformamos para mostrar correctamente la info
  let allDogsInfo = await (dogsAPI.data)
  return allDogsInfo
}


module.exports = {
  allDogsInfo
}