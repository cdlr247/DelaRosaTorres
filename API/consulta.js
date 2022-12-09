$(document).ready(function(){
    $('#unboton').click(async function(){
        let pet = await traerPeliRandom();
        let dato
        pet.forEach(peli => {
            dato = peli
        });
        document.getElementById('nombre').textContent='Título: ' + dato.titulo
        document.getElementById('añolanzamiento').textContent='Año de lanzamiento: ' + dato.lanzamiento
        document.getElementById('duracion').textContent='Duración: ' + dato.duracion
        document.getElementById('genero').textContent='Género: ' + dato.genero
        document.getElementById('director').textContent='Director: ' + dato.director
    });

    //peticion para consultar todo
    async function traerPeliRandom(){
        let respuesta = await fetch("http://localhost:3308/pelicula/random");
        let datojson = await respuesta.json();
        return datojson;
    }
});