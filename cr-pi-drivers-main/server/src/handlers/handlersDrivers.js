const {getAllDriversController,getDriversByNameController,getDriverByIdAPIController,getDriverByIdDBController,postDriverController} = require ('../controllers/controllerDrivers');

const getAllDriversHandler = async (req, res) => {
    try {
        const allDrivers = await getAllDriversController();
        res.status(200).json(allDrivers);

    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const getDriverByIdHandler = async (req, res) => {
    const {id} = req.params;
    
    const drive = isNaN(id) ? 'DB' : 'API';
    try {
        if(drive === 'API') {
            const driverByIdAPI = await getDriverByIdAPIController(id);
            res.status(200).json(driverByIdAPI)
        }else{
            const driverByIdDB = await getDriverByIdDBController(id);
            res.status(200).json(driverByIdDB)
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const getDriversByNameHandler = async (req, res) => {
    try { 
        const name = req.query.name;
        if(name) {
        const driversByName = await getDriversByNameController(name);
        res.status(200).json(driversByName);
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const postDriverHandler = async (req, res) => {
    const {firstName, lastName, description, image, nationality, birthDate, teams} = req.body;
    
    try {

        if (!firstName || !lastName || !nationality || !birthDate) {
            res.status(400).json('Falta completar informacion')
        }else{
            const newDriver = await postDriverController(firstName, lastName, description, image, nationality, birthDate, teams) 
            res.status(200).json(newDriver)
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

module.exports = {
    getAllDriversHandler, 
    getDriverByIdHandler, 
    getDriversByNameHandler, 
    postDriverHandler,
};