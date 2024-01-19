const { Router } = require('express');
const {getTeamsHandler}  = require('../handlers/handlerTeams');
const routerTeams = Router ();

routerTeams.get('/', getTeamsHandler);

module.exports = routerTeams;