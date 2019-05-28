const fs = require('fs');

function crearArchivo(curso_inscribir, nombre, cedula) {
    texto = '-------------------------------------------------------------------------------' + '\n' +
        'El nombre del estudiante es: ' + nombre + '\n' +
        'número de cédula: ' + cedula + '\n' +
        'se ha matriculado en el curso llamado: ' + curso_inscribir.nombre + '\n' +
        'con un costo de: ' + curso_inscribir.valor + '\n' +
        'y una duraciòn de: ' + curso_inscribir.duracion + '\n' +
        '-------------------------------------------------------------------------------';
    console.log(texto);
    fs.writeFile('matricula.txt', texto, (err) => {
        if (err) throw (err);
        console.log('-------------------- Se creo el archivo de forma correcta ---------------------');
        console.log('Desarrollado por:' + '\n' + '------------------------- Andres Fernando Lopez Avila -------------------------');
    });
}

module.exports = {
    crearArchivo
};