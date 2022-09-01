$(document).ready(function(){
    $('#unboton').click(async function(){
        //hacerPeticion();
        let dato = await hacerPeticion();
        document.getElementById('anime').textContent='Anime: ' + dato.anime
        document.getElementById('personaje').textContent='Personaje: ' + dato.character
        document.getElementById('frase').textContent='Frase: ' + dato.quote
    });

    async function hacerPeticion(){
        let respuesta = await fetch("https://animechan.vercel.app/api/random");
        let datojson = await respuesta.json();
        return datojson;
    }
});