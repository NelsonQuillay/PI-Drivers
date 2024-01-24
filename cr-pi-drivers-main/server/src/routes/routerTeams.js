const { Router } = require('express');
const {getTeamsHandler}  = require('../handlers/handlersTeams');
const routerTeams = Router ();

routerTeams.get('/', getTeamsHandler);

module.exports = routerTeams;