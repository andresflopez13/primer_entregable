const opciones = require('./info_user')
const cursos = require('./cursos').cursos;
const ver_cursos = require('./ver_cursos');
const fs = require('fs');

const argv = require('yargs')
    .command('inscribir', 'inscribir aspirante a uno de los cursos', opciones)
    .argv

let programa = argv._[0];
console.log('El valor de programa es: ' + programa);

switch (programa) {
    case 'inscribir':
            console.log('Ingresa a el if: ' + argv.i + ' tamaño: '+ cursos.length);
        if (Number(argv.i) < cursos.length + 1) {
            name = cursos.find(cursoEst => cursoEst.id == argv.i)
            
        } else {
            console.log(`El valor introducido en "${argv.id}" no es número válido`)
        }
        break;
};

if (!programa){
    console.log('ingreso a other');
    ver_cursos.imprimir_cursos();
};

/*switch (programa) {
    case 'inscribir':
            console.log('Ingresa a el if: ' + argv.i + ' tamaño: '+ cursos.length);
        if (Number(argv.i) < cursos.length + 1) {
            name = cursos.find(cursoEst => cursoEst.id == argv.id)
            crearArchivo(argv.nombre, argv.cedula, ms(name.cursos, name.horas, name.valor))
                .then(e => console.log('Se ha creado el archivo'))
                .catch(e => console.log(e));
        } else {
            console.log(`El valor introducido en "${argv.id}" no es número válido`)
        }
        break;
};*/