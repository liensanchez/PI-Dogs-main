const { Router} = require("express")
const {allDogsInfo, searchDog, searchID} = require('../controllers/dogs.Controllers')

const dogsRoutes = Router()


dogsRoutes.get('/', async (req,res) => { 

  const dogName= req.query
  
  let foundDog;

  try {

    if (dogName.name) foundDog = await searchDog(dogName.name)

    else foundDog = await allDogsInfo()

    res.status(200).json(foundDog)
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


/* 
[ ] GET /dogs/{idRaza}:
Obtener el detalle de una raza de perro en particular
Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
Incluir los temperamentos asociados
 */

module.exports = dogsRoutes