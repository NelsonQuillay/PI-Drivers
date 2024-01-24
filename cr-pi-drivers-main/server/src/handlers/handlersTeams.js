const { getAllTeamsController} = require ('../controllers/controllerTemperaments');

const getTeamsHandler =async (req, res) => {
    try {
        const teams = await getAllTeamsController();
        res.status(200).json(teams);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

module.exports = {getTeamsHandler};