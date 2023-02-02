const axios = require('axios')
const {Temperaments} = require('../db')


const getAllTemperaments = async () => {

  const dogs = await axios.get('https://api.thedogapi.com/v1/breeds') .then(data => data.data);

  const temperamentFromApi = dogs.map((dog) => dog.temperament) 

  temperamentFromApi.forEach((comportamiento) => {

    if ( comportamiento != undefined && comportamiento.length > 0) { 'te1, te2, te3'

      let arrTemp = comportamiento.split(', ')

      arrTemp.forEach(async (temp) => {

        await Temperaments.findOrCreate({

          where: {name:temp}, 
          
          default: {name: temp}
        })
      })
    }
  }) 

  const temperamentDb = await Temperaments.findAll()

  const temperamentos = [...temperamentDb]

  return temperamentos   
}


module.exports = {
  getAllTemperaments,
}