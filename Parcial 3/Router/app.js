const express = require('express')
const path = require('path')
const ruta = require('./ruta-alumno.js');
const app = express()
//const {json}=require('express')

app.use(express.json())
app.use(express.text())

app.use('/alumno',ruta.router);

app.listen(3308, () => {
    console.log('Servidor expresss escuchando en puerto 3308')
})