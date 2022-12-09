const express = require('express')
const mysql = require('mysql')
var router = express.Router();

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'peliculas'
});

con.connect();

/**
 * @swagger
 * /pelicula:
 *  get:
 *   description: Consulta todas las peliculas.
 *   responses:
 *    200:
 *     description: Te trae toda la coleccion de peliculas de la base de datos.
*/

router.get('/',(req,res) =>{
    //con.connect();

    con.query('SELECT* FROM pelicula', function(error,results){
        if(error) throw error;

        res.send(results);
    });
    //con.end();
})

/**
 * @swagger
 * /pelicula/random:
 *  get:
 *   description: Hace una consulta aleatoria.
 *   responses:
 *    200:
 *     description: Te trae una peli aleatoria de la base de datos.
*/

router.get('/random',async(req,res) =>{
    //con.connect();
    con.query('SELECT * FROM pelicula ORDER BY RAND() LIMIT 1', function(error,results){
        if(error) throw error;

        res.send(results);
    });
    //con.end();
})

/**
 * @swagger
 * /pelicula/:id:
 *  get:
 *   description: Consulta una peli
 *   responses:
 *    200:
 *     description: Te trae los datos de una peli en especifico, solo manda el id en la URL.
*/

router.get('/:id',async(req,res) =>{
    //con.connect();

    con.query('SELECT* FROM pelicula where id =' + req.params.id, function(error,results){
        if(error) throw error;

        res.send(results);
    });
    //con.end();
})

/**
 * @swagger
 * /pelicula:
 *  post:
 *   description: Altas
 *   responses:
 *    200:
 *     description: Da de alta la peli que quieras, solo especifica los datos con json en el body.
*/

router.post('/', async(req,res) =>{
    //con.connect();
    
    let tit = req.body.titulo;
    let lan = req.body.lanzamiento;
    let dur = req.body.duracion;
    let gen = req.body.genero;
    let dir = req.body.director;
    con.query("INSERT INTO pelicula (titulo, lanzamiento, duracion, genero, director) values('" + 
    tit + "','" + lan + "','" + dur + "','" + gen + "','" + dir + "')", function(error,results){
        if(error) throw error;
        res.json({
            titulo: tit,
            lanzamiento: lan,
            duracion: dur,
            genero: gen,
            direccion: dir
        })
    });
    //con.end();
})

/**
 * @swagger
 * /pelicula/:id:
 *  put:
 *   description: Actualizar
 *   responses:
 *    200:
 *     description: Actualiza los datos de una peli en especifico, manda el id en la URL y coloca los datos en formato json en el body.
*/

router.put('/:id',async(req,res) =>{
    //con.connect();

    let tit = req.body.titulo;
    let lan = req.body.lanzamiento;
    let dur = req.body.duracion;
    let gen = req.body.genero;
    let dir = req.body.director;
    con.query("update pelicula set titulo='" + tit + "', lanzamiento='" + lan + "', duracion='" + dur + 
    "', genero='" + gen + "', director='" + dir + "' where id =" + req.params.id, function(error,results){
        if(error) throw error;

        res.json({
            id: req.params.id,
            titulo: tit,
            lanzamiento: lan,
            duracion: dur,
            genero: gen,
            direccion: dir
        })
    });
    //con.end();
})

/**
 * @swagger
 * /pelicula/:id:
 *  delete:
 *   description: Eliminar
 *   responses:
 *    200:
 *     description: ¿No te gustó una pelicula? Manda el id en la URL y dile adios!!
*/

router.delete('/:id',async(req,res) =>{
    //con.connect();

    con.query('delete from pelicula where id = ' + req.params.id, function(error,results){
        if(error) throw error;
        let msj = 'Pelicula con ID ' + req.params.id + ' se dió de baja con éxito'
        res.send(msj);
    });
    //con.end();
})

module.exports.router=router;