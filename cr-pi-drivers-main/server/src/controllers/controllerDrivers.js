const axios = require('axios');
const URL = 'https://api.thedogapi.com/v1/breeds';
require('dotenv').config();
const {Driver, Team} = require('../db')


const getAllDriversController = async () => {
  
    const {data} = await axios.get(`${URL}?api_key=${API_KEY}`);  
    
    const dogsAPI = data.map((dog) => ({

        id: dog.id,
        name: dog.name,
        image: dog.image.url,   
        height: dog.height.metric, // metric
        weight: dog.weight.metric,
        lifeSpan: dog.life_span,
        temperament: dog.temperament,
        db: false,
    }));

    const dogsDB = await Dog.findAll({
      include: {
        model: Temperament, 
        attributes:["name"],
        through: {attributes:[]}, 
      },
    });

    return [...dogsAPI,...dogsDB];
  };







module.exports = {
    getAllDriversController,
    getDogsByName,
    getDogsByIdAPI,
    getDogsByIdDB,
    postDog
  };