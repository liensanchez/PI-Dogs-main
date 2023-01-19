const axios = require('axios')


const allPuppies = async () => {
  const dogsURL = await axios.get('https://api.thedogapi.com/v1/breeds');
  let dogsInfo = await dogsURL.data.map((dog) => {
    return {
        id : dog.id,
        name : dog.name,
        temperament : dog.temperament,
        weight_min : parseInt(dog.weight.imperial.split("-")[0]),
        weight_max : parseInt(dog.weight.imperial.split("-")[1]),
        height: dog.height.metric,
        lifeTime : dog.life_span,
        image : dog.image.url,
        }
    })
    return dogsInfo
}

console.log(allPuppies())

module.exports = {
  allPuppies
}