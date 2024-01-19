const { Router } = require('express');
const { getAllDriversHandler, getDriverByIdHandler, getDriversByNameHandler, postDriverHandler } = require('../handlers/handlerDrivers');
const routerDrivers = Router ();


routerDrivers.get('/', getAllDriversHandler);

routerDrivers.get('/:idDriver', getDriverByIdHandler);

routerDrivers.get('/name', getDriversByNameHandler);

routerDrivers.post('/', postDriverHandler);


module.exports = routerDrivers;

/*🖱 BACK-END
Para esta parte deberás construir un servidor utilizando NodeJS y Express. Tendrás que conectarlo con tu base de datos mediante Sequelize.

Tu servidor deberá contar con las siguientes rutas:

📍 GET | /drivers
Obtiene un arreglo de objetos, donde cada objeto es un driver con su información.
IMPORTANTE: Si un driver no tiene imagen, deberás colocarle una por defecto 🖼️

📍 GET | /drivers/:idDriver
Esta ruta obtiene el detalle de un driver específico. Es decir que devuelve un objeto con la información pedida en el detalle de un driver.
El driver es recibido por parámetro (ID).
Tiene que incluir los datos del/los team/s del driver al que está asociado.
Debe funcionar tanto para los drivers de la API como para los de la base de datos.
📍 GET | /drivers/name?="..."
Esta ruta debe obtener los primeros 15 drivers que se encuentren con la palabra recibida por query.
Debe poder buscarlo independientemente de mayúsculas o minúsculas.
Si no existe el driver, debe mostrar un mensaje adecuado.
Debe buscar tanto los de la API como los de la base de datos.
📍 POST | /drivers
Esta ruta recibirá todos los datos necesarios para crear un driver y relacionarlo con sus teams solicitados.
Toda la información debe ser recibida por body.
Debe crear un driver en la base de datos, y este debe estar relacionado con sus teams indicados (al menos uno).
📍 GET | /teams
Obtiene un arreglo con todos los teams existentes de la API.
En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los teams que encuentres en la API.
Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.*/