
const express = require('express');

const app = express();

const puerto = 3000;


app.get('/tarea', (req, res) => {

  res.send('petición GET en la ruta /tarea.');
});

app.listen(puerto, () => {
  console.log(`Escuchando en http://localhost:${puerto}`);
});