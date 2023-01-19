const { Router } = require("express")
const {allPuppies} = require('../controllers/dogs.Controllers')



const dogsRoutes = Router()

dogsRoutes.get('/', async (req,res) => {  
  try {
    const dogs = await allPuppies()
    res.status(200).json(dogs)
  } catch (error) {
    res.status(404).send({error:error.message})
  }
  
})

module.exports = dogsRoutes