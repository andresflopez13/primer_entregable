const ver_cursos = require('./ver_cursos');
const fs = require('fs');
const info_user = {
    id:{
        demand: true,
        alias: 'id'
    },
    nombre_aspirante:{
        demand:true,
        alias:'name'
    },
    cedula:{
        demand:true,
        alias:'c'
    }
}

console.log(ver_cursos.imprimir_cursos());