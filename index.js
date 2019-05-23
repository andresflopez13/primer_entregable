const cursos = require('./ver_cursos');
const opciones = require('./info_user')
const fs = require('fs');
/*const opciones = {
    id: {
        demand: true,
        alias: 'id'
    },
    nombre_aspirante: {
        demand: true,
        alias: 'name'
    },
    cedula: {
        demand: true,
        alias: 'c'
    }
}*/
const argv = require('yargs')
    .command('inscribir', 'inscribir aspirante a uno de los cursos', opciones)
    .argv

//console.log(ver_cursos.imprimir_cursos());

let comand = argv._[0];

function ms(cursos, horas, valor) {
    return `${cursos} tiene una duración de ${horas} horas y su valor de matrícula es ${valor} pesos`;
}

switch (comand) {
    case 'inscribir':
        if (Number(argv.id) < cursos.length + 1) {
            name = cursos.find(cursoEst => cursoEst.id == argv.id)
            crearArchivo(argv.nombre, argv.cedula, ms(name.cursos, name.horas, name.valor))
                .then(e => console.log('Se ha creado el archivo'))
                .catch(e => console.log(e));
        } else {
            console.log(`El valor introducido en "${argv.id}" no es número válido`)
        }
        break;
}

if (!comand)
    for (var trav in cursos) {
        mensaje(trav);
    }

function mensaje(id_curso) {
    setTimeout(function() {
        let texOut = 'El curso se llama';
        let name = cursos[id_curso];
        console.log(texOut + ms(name.cursos, name.horas, name.valor));
    }, id_curso * 2000 + 2000);
}