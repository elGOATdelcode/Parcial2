const express = require('express');
const app = express();
const puerto = 3000;

const peliculas = [
    { id: 1, titulo: 'Inception', director: 'Christopher Nolan' },
    { id: 2, titulo: 'Sector 9', director: 'Neill Blomkamp' },
    { id: 3, titulo: 'The Matrix', director: 'Lana y Lilly Wachowski' }
];


app.get('/peliculas', (req, res) => {
    res.status(200).json(peliculas);
});


app.get('/peliculas/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const pelicula = peliculas.find(p => p.id === id);

    if (!pelicula) {
        
        const error = new Error('La película con el ID especificado no existe.');
        error.status = 404;
        return next(error);
    }

    res.status(200).json(pelicula);
});

//manejo de error
app.use((err, req, res, next) => {
    const codigoEstado = err.status || 500;
    
    res.status(codigoEstado).json({
        codigo: codigoEstado,
        error: err.message || 'Error interno del servidor',
        timestamp: new Date().toISOString()
    });
});

app.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});