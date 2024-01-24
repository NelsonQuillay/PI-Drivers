const { Router } = require('express');
const { getAllDriversHandler, getDriverByIdHandler, getDriversByNameHandler, postDriverHandler } = require('../handlers/handlersDrivers');
const routerDrivers = Router ();


routerDrivers.get('/', getAllDriversHandler);

routerDrivers.get('/:idDriver', getDriverByIdHandler);

routerDrivers.get('/name', getDriversByNameHandler);

routerDrivers.post('/', postDriverHandler);


module.exports = routerDrivers;
