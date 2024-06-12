const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authController = require('./controllers/authController.js');
const sequelize = require('./db/db');
const userController = require('./controllers/userController');
const sintomasPacController = require('./controllers/sintomasPacController.js');
const diagnosticoController = require('./controllers/diagnosticoController.js');
const sintomaController = require('./controllers/sintomaController.js');
const enfermedadController = require('./controllers/enfermedadController');
const especialidadController = require('./controllers/especialidadController.js'); // Corregido aquí
const medicosController = require('./controllers/medicoController.js'); // Corregido aquí
const clinicaController = require('./controllers/clinicaController.js'); // Corregido aquí
require('./models/associations.js');


const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());

app.use('/api/auth', authController);
app.use('/api/user', userController);
app.use('/api/sintomasPac', sintomasPacController);
app.use('/api/diagnosticos', diagnosticoController);
app.use('/api/sintomas', sintomaController);
app.use('/api/enfermedades', enfermedadController);
app.use('/api/especialidad', especialidadController); // Corregido aquí
app.use('/api/medicos', medicosController); // Corregido aquí
app.use('/api/clinicas', clinicaController); // Corregido aquí

app.use('/uploads', express.static('uploads'));

app.options('*', cors());

sequelize.sync({force: true}).then(() => {
    const PORT = 3001;
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
});
