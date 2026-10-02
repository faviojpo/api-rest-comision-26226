import express from "express";

const app = express();

// Middleware para registrar las peticiones en la consola
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Base de datos simulada
const productos = [
    { id: 1, nombre: "Producto 1", precio: 100 },
    { id: 2, nombre: "Producto 2", precio: 200 },
];

// Ruta de prueba de la raíz
app.get("/", (req, res) => {
    res.send("API del curso funcionando");
});

// Ruta de productos
app.get("/api/productos", (req, res) => {
    res.json(productos);
});

// Inicialización del servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});