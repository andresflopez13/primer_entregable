const ver_cursos = require('./cursos');
console.log('****************************Universidad de Antioquia***************************');
console.log('--------------- Bienvenido esta es la seccion de cursos disponibles -----------');
function imprimir_cursos() {
    console.log('Los cursos actuales son: ');
    console.log('-------------------------------------------------------------------------------');
    for (let index = 0; index < ver_cursos.cursos.length; index++) {
        setTimeout(informacion, 2000*index+1, index);   
    }
}

function informacion(index){
    console.log('-------------------------------- Curso '+ (ver_cursos.cursos[index].id) + ' --------------------------------------');
    console.log('Identificador: ' + ver_cursos.cursos[index].id);
    console.log('Nombre: ' + ver_cursos.cursos[index].nombre);
    console.log('Duración: ' + ver_cursos.cursos[index].duracion);
    console.log('El valor: ' + ver_cursos.cursos[index].valor);
}

module.exports = {
    imprimir_cursos
};