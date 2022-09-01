$(document).ready(function(){
    $('#unboton').click(function(){
        hacerPeticion();
    });

    /*fetch("https://api.waifu.pics/sfw/kick")
        .then(respuesta => respuesta.json())
        .then(datos => console.log(datos));*/

    function hacerPeticion(){
        fetch("https://animechan.vercel.app/api/random")
        .then(respuesta => respuesta.json())
        .then(datos => {datosFrase(datos);}); 
    }

    function datosFrase(obj){
        document.getElementById('anime').textContent='Anime: ' + obj.anime
        document.getElementById('personaje').textContent='Personaje: ' + obj.character
        document.getElementById('frase').textContent='Frase: ' + obj.quote
    }
});