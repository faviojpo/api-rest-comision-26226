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

// Ruta principal (http://localhost:3000)
// Muestra la lista de productos formateada en HTML directo en la página
app.get("/", (req, res) => {
    const listaHtml = productos
        .map(p => `<li><strong>${p.nombre}</strong> - $${p.precio}</li>`)
        .join("");

    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>API de Productos</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 40px;
                    background-color: #f4f4f9;
                    color: #333;
                }
                h1 {
                    color: #2c3e50;
                }
                ul {
                    list-style-type: none;
                    padding: 0;
                }
                li {
                    background: #fff;
                    margin: 8px 0;
                    padding: 12px 16px;
                    border-radius: 6px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
                a {
                    color: #3498db;
                    text-decoration: none;
                }
            </style>
        </head>
        <body>
            <h1>Lista de Productos</h1>
            <ul>
                ${listaHtml}
            </ul>
            <p>Ver respuesta en formato JSON en <a href="/api/productos">/api/productos</a></p>
        </body>
        </html>
    `);
});

// Ruta de API que retorna los productos en formato JSON
app.get("/api/productos", (req, res) => {
    res.json(productos);
});

// Inicialización del servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});