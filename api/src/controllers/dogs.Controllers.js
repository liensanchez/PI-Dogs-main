const axios = require('axios')


const allDogsInfo = async () => {
  const dogsAPI = await axios.get('https://api.thedogapi.com/v1/breeds');
  //lo transformamos para mostrar correctamente la info
  let allDogsInfo = await dogsAPI.data.map((singleDog) => {
        return {
            id : singleDog.id,
            name : singleDog.name,
            height: singleDog.height.metric,
            weight: singleDog.weight.metric
            }
        })
  return allDogsInfo
}


module.exports = {
  allDogsInfo
}