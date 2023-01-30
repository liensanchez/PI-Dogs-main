const axios = require('axios');
const {Dog, Temperaments} = require('../db');


const allDogsInfo = async () => {

  const infoAPI = await axios.get('https://api.thedogapi.com/v1/breeds/');

  const dogApi = infoAPI.data.map((dog) => {
    return{
      id: dog.id,
      name: dog.name.toLowerCase(),
      weightMin: parseInt(dog.weight.metric.split('-')[0]),
      weightMax: parseInt(dog.weight.metric.split('-')[1]),
      weight: dog.weight.metric.split('-'),
      height: dog.height.metric,
      temperament: dog.temperament,
      lifeSpan: dog.life_span,
      image: dog.image.url,
    }
  })

  const infoDB = await Dog.findAll({

     include: {

      model: Temperaments,

      attributes : ["name"],

      through: {

        attributes: []
      } 
    }
  })


  const dogDB = infoDB.map((dog) => {
    return{
      id: dog.id,
      name: dog.name.toLowerCase(),
      weight: dog.weight.split('-'),
      height: dog.height,
      temperament:  dog.Temperaments.map(temp => temp.name).join(', '),
      lifeSpan: dog.life_span,
      image: dog.image,
    }
  }) 

  const completeDog = dogApi.map((dog)=> {
    
    if(dog.name == 'smooth fox terrier') dog.weight = ['6', '8'], dog.weightMin = 6
    if(dog.name == 'pekingese') dog.weight = ['3', '6'], dog.weightMin = 3
    if(dog.name == 'french bulldog') dog.weight = ['9', '13'], dog.weightMin = 9
    if(dog.name == 'olde english bulldogge') dog.weight = ['22', '30'], dog.weightMin = 22

    return dog
  })


  let allDogsInfo = [ ...dogDB, ...completeDog]
  
  return allDogsInfo
}


const searchName = async (dogName) => {

  const getAllDogs = await allDogsInfo()

  const allDogs = getAllDogs.map((dog) => {
                                  return{
                                    id: dog.id,
                                    name: dog.name.toLowerCase(),
                                    weight: dog.weight,
                                    height: dog.height,
                                    temperament: dog.temperament,
                                    lifeSpan: dog.life_span,
                                    image: dog.image,
                                  }
  })
  
  const dog = allDogs.filter(dog => dog.name.includes(dogName))

  return dog 
} 


const searchID = async (dogId) => {

  const allDogs = await allDogsInfo()

  const dog = allDogs.filter((dog) => dog.id == dogId)
  
  return dog
}


const createDog = async ( name, height, weight, lifeSpan, image, temperament) => {

  const newDog = await Dog.create({name, height, weight, lifeSpan, image})

  const arrTemperament = temperament.split(',')

  const temp = await Promise.all(arrTemperament.map(async (temp) => {

    return await Temperaments.findOrCreate({

        where: {name:temp}, 

        default: {name: temp}
    })
  }))

  await newDog.addTemperament(temp.map(t => t[0]))

  return newDog
}


module.exports = {
  allDogsInfo,
  searchID,
  searchName,
  createDog
}