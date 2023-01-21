const axios = require('axios')
const {Temperaments} = require('../db')



const getAllTemperaments = async () => {
  const dogs = await axios.get('https://api.thedogapi.com/v1/breeds');



  const temperamentsFromAPI = (dogs.data.map((dog) => dog.temperament))// temperamento
  
  
   temperamentsFromAPI.forEach((comportamiento) => {
    if ( comportamiento != undefined) {
      let arrTemp = comportamiento.split(', ')
      
      arrTemp.forEach(async (temp) => {
        console.log(typeof temp);
        await Temperaments.findOrCreate({
          where: {
            name:temp
          }, default: {name: temp}
        })
      })
    }
  }) 

  return temperamentsFromAPI 
}


module.exports = {
  getAllTemperaments,
}