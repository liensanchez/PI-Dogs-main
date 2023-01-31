const { Router} = require("express")
const {allDogsInfo, searchID, searchName, createDog} = require('../controllers/dogs.Controllers')

const dogsRoutes = Router()

dogsRoutes.get('/', async (req, res) => {
  
  const dogName = req.query

  let foundDog;
  
  try {

    if (Object.keys(dogName).length == 0) {

      foundDog = await allDogsInfo()

      res.status(200).send(foundDog)
    }else {

      foundDog = await searchName(dogName.name)

      if(foundDog.length > 0) res.status(200).send(foundDog)
      else throw Error ('No existe ese perro')
    }

  } catch (error) {

    res.status(404).json({error: error.message})
  }
}) 


dogsRoutes.get('/:id', async (req,res) => { 

  const dogId = req.params

  let foundDog;

  try {

    foundDog = await searchID(dogId.id)

    if(foundDog.length > 0) res.status(200).send(foundDog)
    
    else throw Error ('No existe ese perro')
  } catch (error) {

    res.status(404).json({error: error.message})
  } 
})


dogsRoutes.post('/', async (req, res) =>{
  try {
    
    const {  name, height, weight, lifeSpan, image, temperament} = req.body

    if(![name, height, weight])return Error ('Faltan datos obligatorios') 

    const newDog = await createDog( name, height, weight, lifeSpan, image, temperament)

    res.status(200).json(newDog)

  } catch (error) {
    
    res.status(404).json({error: error.message})
  }

})



module.exports = dogsRoutes