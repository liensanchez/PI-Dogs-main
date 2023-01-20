const { Router} = require("express")

const temperamentsRoutes = Router()


temperamentsRoutes.get('/', async (req, res) => {
  res.status(200).send('hola funciona')
})

module.exports = temperamentsRoutes