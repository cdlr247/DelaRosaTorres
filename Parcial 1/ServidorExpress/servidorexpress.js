const express = require('express');
const cors = require('cors')
const {json}=require('express')
var morgan = require('morgan')
const cadenas = require('./cadenas')
//const (pasarMayusculas,quitarEspacios) = require('./cadenas')

var fs = require('fs')
var path = require('path')

const app = express()
app.use(express.text())
app.use(express.json())

app.use(cors({origin: "http://localhost"}))

var accessLogStream = fs.createWriteStream(path.join(__dirname,'access.log'),{flags: 'a'})

app.use(morgan('combined',{stream: accessLogStream}))


app.use((req,res,next) => {
  console.log('Primer funcion middleware')
  next()
}, (req,res,next)=>{
  console.log('Segunda funcion middleware')
  next()
});

app.get('/', (req, res) => {
    //res.send('Servidor Express contestando a get desde el pto 3308')
    res.sendFile('./static/Index.html',{root:__dirname},(err)=>{console.log('Archivo enviado')})
})

app.post('/texto', (req, res) => {
  console.log(req.body)
  //let may = req.body.toUpperCase()
  //let sinesp = req.body.trim()
  //let longi = req.body.length
  let may = cadenas.pasarMayusculas(req.body)
  let sinesp = cadenas.quitarEspacios(req.body)
  let longi = cadenas.obtenerLongitud(req.body)

  res.json({
    mayusculas: may,
    sinespacios: sinesp,
    longitud: longi
  })
})

app.post('/json',(req, res)=>{
  console.log(req.body.nombre)
  let cadena="Hola "+req.body.nombre+" "+req.body.apellido+" como estas"
  res.json({saludo:cadena})
} )

app.get('/mayusculas/:cadena', (req, res) => {
  console.log(req.params)
  res.send(req.params)
})

app.get('/suma', (req, res) => {
  console.log(req.query)
  let suma = parseInt(req.query.x)+parseInt(req.query.y)
  res.send(`La suma es ${suma}`)
})

app.listen(3308,() => {
    console.log('Servidor express escuchando en pto 3308')
    console.log(__dirname)
    console.log(__filename)
})

app.use(function(req,res){
  res.status(404).sendFile('./static/404.html',{root:__dirname})
  
  })