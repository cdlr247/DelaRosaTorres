const cors = require('cors')
const express = require('express')
const mysql = require('mysql')
const app = express()
const {json}=require('express')

app.use(cors({origin: "*"}))
app.use(express.json())
app.use(express.text())


var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'n19100165'
});

con.connect();

app.get('/todoslosalumnos',(req,res) =>{
    //con.connect();

    con.query('SELECT* FROM alumno', function(error,results){
        if(error) throw error;

        res.send(results);
    });
    //con.end();
})

app.get('/alumno/:nc',async(req,res) =>{
    //con.connect();

    con.query('SELECT* FROM alumno where NumControl =' + req.params.nc, function(error,results){
        if(error) throw error;

        res.send(results);
    });
    //con.end();
})

app.post('/', async(req,res) =>{
    //con.connect();
    
    let NC = req.body.NumControl;
    let Car = req.body.Carrera;
    let Nom = req.body.Nombre;
    let Ap = req.body.Apellido;
    let CE = req.body.CorreoE;
    con.query("INSERT INTO alumno (NumControl, Carrera, Nombre, Apellido, CorreoE) values('" + 
    NC + "','" + Car + "','" + Nom + "','" + Ap + "','" + CE + "')", function(error,results){
        if(error) throw error;
        res.json({
            NumControl: NC,
            Carrera: Car,
            Nombre: Nom,
            Apellido: Ap,
            CorreoE: CE
        })
    });
    //con.end();
})

app.put('/:nc',async(req,res) =>{
    //con.connect();

    let Car = req.body.Carrera;
    let Nom = req.body.Nombre;
    let Ap = req.body.Apellido;
    let CE = req.body.CorreoE;
    con.query("update alumno set Carrera='" + Car + "', Nombre='" + Nom + "', Apellido='" + Ap + 
    "', CorreoE='" + CE + "' where NumControl =" + req.params.nc, function(error,results){
        if(error) throw error;

        res.json({
            NumControl: req.params.nc,
            Carrera: Car,
            Nombre: Nom,
            Apellido: Ap,
            CorreoE: CE
        })
    });
    //con.end();
})

app.delete('/:nc',async(req,res) =>{
    //con.connect();

    con.query('delete from alumno where NumControl = ' + req.params.nc, function(error,results){
        if(error) throw error;
        let msj = 'Alumno con numero de control ' + req.params.nc + ' se dió de baja con éxito'
        res.send(msj);
    });
    //con.end();
})

app.listen(3308, () => {
    console.log('Servidor expresss escuchando en puerto 3308')
})