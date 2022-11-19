const express = require('express')
const mysql = require('mysql')
var router = express.Router();

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'n19100165'
});

con.connect();

/**
 * @swagger
 * /alumno:
 *  get:
 *   description: Consultas
 *   responses:
 *    200:
 *     description: Consulta todos los alumnos registrados.
*/

router.get('/',(req,res) =>{
    //con.connect();

    con.query('SELECT* FROM alumno', function(error,results){
        if(error) throw error;

        res.send(results);
    });
    //con.end();
})

/**
 * @swagger
 * /alumno/:nc:
 *  get:
 *   description: Consultas
 *   responses:
 *    200:
 *     description: Consulta los datos de un alumno en especifico
*/

router.get('/:nc',async(req,res) =>{
    //con.connect();

    con.query('SELECT* FROM alumno where NumControl =' + req.params.nc, function(error,results){
        if(error) throw error;

        res.send(results);
    });
    //con.end();
})

/**
 * @swagger
 * /alumno:
 *  post:
 *   description: Altas
 *   responses:
 *    200:
 *     description: Da de alta a un nuevo alumno
*/

router.post('/', async(req,res) =>{
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

/**
 * @swagger
 * /alumno/:nc:
 *  put:
 *   description: Actualizar
 *   responses:
 *    200:
 *     description: Actualiza los datos de un alumno en especifico.
*/

router.put('/:nc',async(req,res) =>{
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

/**
 * @swagger
 * /alumno/:nc:
 *  delete:
 *   description: Eliminar
 *   responses:
 *    200:
 *     description: Da de baja a un alumno en especifico.
*/

router.delete('/:nc',async(req,res) =>{
    //con.connect();

    con.query('delete from alumno where NumControl = ' + req.params.nc, function(error,results){
        if(error) throw error;
        let msj = 'Alumno con numero de control ' + req.params.nc + ' se dió de baja con éxito'
        res.send(msj);
    });
    //con.end();
})

module.exports.router=router;