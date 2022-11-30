let funciones = require('../src/funciones.js');
let chai = require('chai');

let shoul = chai.should()
let expect = chai.expect;
let assert = chai.assert;


describe('Prueba de la funcion potencia (should)',function() {
    it('Deberia regresar un numero y debe ser 8',function(){
        let resultado = funciones.potencia(2,3);
        resultado.should.be.a('number');
        resultado.should.be.equal(8);
    })
});

describe('Prueba de la funcion potencia (expect)',function() {
    it('Deberia regresar un numero y debe ser 8',function(){
        let resultado = funciones.potencia(2,3);
        expect(resultado).to.be.a('number');
        expect(resultado).to.be.equal(8);
    })
});

describe('Prueba de la funcion potencia (assert)',function() {
    it('Deberia regresar un numero y debe ser 8',function(){
        let resultado = funciones.potencia(2,3);
        assert.typeOf(resultado,'number');
        assert.equal(resultado,8);
    })
});