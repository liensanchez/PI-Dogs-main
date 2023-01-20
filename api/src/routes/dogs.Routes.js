const { Router } = require("express")
const {allDogsInfo} = require('../controllers/dogs.Controllers')



const dogsRoutes = Router()

dogsRoutes.get('/', async (req,res) => {  

  try {

    const dogs = await allDogsInfo()

    res.status(200).json(dogs)
  } catch (error) {

    res.status(404).send({error:error.message})
  }
})



/* 
[ ] GET /dogs:
Obtener un listado de las razas de perro
Debe devolver solo los datos necesarios para la ruta principal
[ ] GET /dogs?name="...":
Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
Si no existe ninguna raza de perro mostrar un mensaje adecuado
[ ] GET /dogs/{idRaza}:
Obtener el detalle de una raza de perro en particular
Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
Incluir los temperamentos asociados
*/

module.exports = dogsRoutes