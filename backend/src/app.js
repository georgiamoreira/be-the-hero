const express = require('express'); // importndo o modulo p a variável, vai conter todas as funcionlddes
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes'); // usa o ./ ou ../ para indicar q é um arquivo e não pacote

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

