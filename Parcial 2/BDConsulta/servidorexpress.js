const express = require('express')
const mysql = require('mysql')
const app = express()

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'n19100165'
});

app.get('/',async(req,res) =>{
    con.connect();

    con.query('SELECT* FROM alumno', function(error,results){
        if(error) throw error;

        res.send(results);
    });
    con.end();
})

app.listen(3308, () => {
    console.log('Servidor expresss escuchando en puerto 3308')
})