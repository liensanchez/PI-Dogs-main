const { Router} = require("express")
const {getAllTemperaments} = require('../controllers/temperaments.Controllers')

const temperamentsRoutes = Router()


temperamentsRoutes.get('/', async (req, res) => {

  try{

    let temperamentFound = await getAllTemperaments()
    res.status(200).send(temperamentFound)

  }catch (error) {

  } 
})

module.exports = temperamentsRoutes