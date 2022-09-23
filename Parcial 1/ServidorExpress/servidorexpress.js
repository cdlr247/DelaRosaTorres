const express = require('express');
const cors = require('cors')

const app = express()
app.use(express.text())
app.use(express.json())

app.use(cors({origin: "http://localhost"}))

app.get('/', (req, res) => {
    //res.send('Servidor Express contestando a get desde el pto 3308')
    res.sendFile('./static/Index.html',{root:__dirname},(err)=>{console.log('Archivo enviado')})
})

app.post('/', (req, res) => {
  //  res.send('Servidor Express contestando a post desde el pto 3308')
//(descomentar esta linea) 
res.json({usuario:'Claudio'})
})

app.use(function(req,res){
res.status(404).sendFile('./static/404.html',{root:__dirname})

})

app.post('/texto', (req, res) => {
  console.log(req.body)
  let may = req.body.toUpperCase()
  let sinesp = req.body.trim()
  let longi = req.body.length
  res.json({
    mayusculas: may,
    sinespacios: sinesp,
    longitud: longi
  })
})

app.post('/json',(req, res)=>{
  console.log(req.body.nombre)
  let cadena="Hola"+req.body.nombre+" "+req.body.apellido+"como estas"
  res.json({saludo:cadena})
} )

app.get('/mayusculas/:cadena', (req, res) => {
  console.log(req,params)
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