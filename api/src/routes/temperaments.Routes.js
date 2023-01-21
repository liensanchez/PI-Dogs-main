const { Router} = require("express")
const {getAllTemperaments} = require('../controllers/temperaments.Controllers')

const temperamentsRoutes = Router()


temperamentsRoutes.get('/', async (req, res) => {

  let temperamentFound = await getAllTemperaments()

  

  res.status(200).send('Holis')
})

module.exports = temperamentsRoutes