const cors = require('cors')
const express = require('express')
const path = require('path')
const ruta = require('./routes/ruta-pelicula');
const app = express()
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Películas',
            version: '1.0.0',      
        },
        servers:[{url: "http://localhost:3308"}],  
    },
        apis: [`${path.join(__dirname,"./routes/ruta-pelicula.js")}`],  
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs));

app.use(cors({origin: "*"}))
app.use(express.json())
app.use(express.text())

app.use('/pelicula',ruta.router);

app.listen(3308, () => {
    console.log('Servidor expresss escuchando en puerto 3308')
})