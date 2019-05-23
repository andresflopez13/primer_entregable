const cursos = require('./ver_cursos');
//onst opciones = require('./info_user')
const fs = require('fs');
const opciones = {
    id: {
        demand: true,
        alias: 'i'
    },
    nombre_aspirante: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'c'
    }
}
const argv = require('yargs')
    .command('inscribir', 'inscribir aspirante a uno de los cursos', opciones)
    .argv

//console.log(ver_cursos.imprimir_cursos());

let comand = argv._[0];

console.log('El comando ingresado es: ' + argv.c);

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