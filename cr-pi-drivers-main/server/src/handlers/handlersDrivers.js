const {getAllDogs,getDogsByName,getDogsByIdAPI,getDogsByIdDB,postDog} = require ('../controllers/controllerDrivers');

const getAllDriversHandler = async (req, res) => {
    try {
        const name = req.query.name;
        if(name) {
            const dogByName = await getDogsByName(name);
            res.status(200).json(dogByName);
        }else{
            const allDogs = await getAllDogs();
            res.status(200).json(allDogs);
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};












module.exports = {
    getAllDriversHandler, 
    getDriverByIdHandler, 
    getDriversByNameHandler, 
    postDriverHandler
  
};