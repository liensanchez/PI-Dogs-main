const { Router } = require('express');
const dogsRoutes = require('./dogs.Routes')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs',dogsRoutes)

module.exports = router;
