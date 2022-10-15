let json2xls = require ('json2xls')
let mysql = require('mysql')
let fs = require('fs')

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'n19100165'
});

con.connect();

con.query('SELECT* FROM alumno', function(error,results,fields){
    if(error) throw error;

    var xls = json2xls(results);
    fs.writeFileSync(`${__dirname}/excel/data.xlsx`, xls, 'binary');
});
con.end();