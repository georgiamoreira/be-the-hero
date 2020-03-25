const express = require('express'); // importndo o modulo p a variável, vai conter todas as funcionlddes
const cors = require('cors');
const routes = require('./routes'); // usa o ./ ou ../ para indicar q é um arquivo e não pacote
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333); //Node porta = 3333; react = 3000

