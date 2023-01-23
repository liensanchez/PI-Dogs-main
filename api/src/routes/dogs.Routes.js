const { Router} = require("express")
const {allDogsInfo, searchID, searchName, createDog} = require('../controllers/dogs.Controllers')

const dogsRoutes = Router()

dogsRoutes.get('/', async (req, res) => {
  
  const dogName = req.query

  let foundDog;
  
  try {

    if (Object.keys(dogName).length == 0) {

      foundDog = await allDogsInfo()

    }else {

      foundDog = await searchName(dogName.name)
    }

    res.status(200).send(foundDog)
  } catch (error) {

    res.status(404).send({error:error.message})
  }
}) 


dogsRoutes.get('/:id', async (req,res) => { 

  const dogId = req.params

  let foundDog;

  try {

    foundDog = await searchID(dogId.id)

    res.status(200).json(foundDog)
  } catch (error) {

    res.status(404).send({error:error.message})
  } 
})


dogsRoutes.post('/', async (req, res) =>{
  try {
    
    const { name, height, weight, lifeSpan, temperament} = req.body

    const newDog = await createDog(name, height, weight, lifeSpan, temperament)

    res.status(200).json(newDog)

  } catch (error) {
    
    res.status(404).send({error:error.message})
  }

})



module.exports = dogsRoutes