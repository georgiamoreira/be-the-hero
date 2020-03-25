const express = require('express');

const ongController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/profile', ProfileController.index);
routes.post('/sessions', SessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create); // só / pq é o raiz localhost:3333/



routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);



module.exports = routes;