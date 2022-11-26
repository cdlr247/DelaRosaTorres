let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://localhost:3308';

// Encapsular en test dentro de la funcion describe() Y describirmos el test
describe('Inserta un alumno: ',()=>{
    it('deberia insertar un alumno', (done) => {
        chai.request(url)
        .post('/alumno')
        .send({ NumControl:"19100111", Carrera:"ISC", Nombre:"Prueba", Apellido:"1", CorreoE:"prueba@mail.com" })
        .end( function(err,res){
            expect(res).to.have.status(200);
            expect(res.text).to.be.a('string');
            done();
        });
    });
}); 

describe('Consultas',()=>{ 
    it('Consulta todos los alumnos registrados.', (done) => {
        chai.request(url) 
            .get('/')
            .send()
            .end( function(err,res){
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                done();
            });
        });
    });