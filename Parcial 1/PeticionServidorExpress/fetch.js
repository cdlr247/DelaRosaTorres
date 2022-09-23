$(document).ready(function(){

    function hacerPeticion(){
        fetch("http://localhost:3308")
        .then(respuesta => respuesta.text())
        .then(datos => console.log(datos))
    }
});