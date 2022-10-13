//const cadenas = {}

//npmjs.com ?
//solo hacemos npm init, npm login, npm publish

export let pasarMayusculas = (cadena) => {
    return cadena.toUpperCase();
}

export let quitarEspacios = (cadena) =>{
    return cadena.replace(/ /g,"");
}

export let obtenerLongitud = (cadena) =>{
    return cadena.length;
}

//exports.pasarMayusculas=pasarMayusculas;
//exports.quitarEspacios=quitarEspacios;
//exports.obtenerLongitud=obtenerLongitud;

//modulo exports.cadenas;