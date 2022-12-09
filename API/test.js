//const app = require('./app');
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://localhost:3308';

// Encapsular en test dentro de la funcion describe() Y describirmos el test
describe('CRUD Peliculas ',()=>{
    it('consultar todas las pelis', function() {
        chai.request(url)
      .get('/pelicula')
      .end(function(err, res) {
        expect(res).to.have.status(200);
      });
    });

    it('consultar una peli', function() {
        chai.request(url)
      .get('/pelicula/1')
      .end(function(err, res) {
        expect(res).to.have.status(200);
      });
    });

    it('consultar peli random', function() {
        chai.request(url)
      .get('/pelicula/random')
      .end(function(err, res) {
        expect(res).to.have.status(200);
      });
    });

    it('crear peli', function() {
          chai.request(url)
        .post('/pelicula')
        .send({titulo: "Prueba",
        lanzamiento: "2001",
        duracion: "1h 27m",
        genero: "Acción/Aventura",
        director: "Claudio de la Rosa"})
        .end(function(err, res) {
            expect(res).to.have.status(200);
            expect(res.text).to.be.a('string');
        });
    });

    it('modificar peli', function(done) {
        chai.request(url)
      .put('/pelicula/1')
      .send({titulo: "Doctor Strange en el Multiverso de la Locura",
      lanzamiento: "2022",
      duracion: "2h 6m",
      genero: "Acción/Aventura",
      director: "Sam Raimi"})
      .end(function(err, res) {
        expect(res).to.have.status(200);
        expect(res.body.lanzamiento).to.be.eql('2022');
        done();
      });
    });

    it('eliminar peli', function() {
        chai.request(url)
      .delete('/pelicula/18')
      .end(function(err, res) {
            expect(res).to.have.status(200);
        });
    });
});