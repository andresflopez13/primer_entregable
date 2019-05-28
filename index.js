const opciones = require('./info_user')
const cursos = require('./cursos').cursos;
const ver_cursos = require('./ver_cursos');
const registro = require('./escribir_archivo').crearArchivo;


const argv = require('yargs')
    .command('inscribir', 'inscribir aspirante a uno de los cursos', opciones)
    .argv

let programa = argv._[0];

switch (programa) {
    case 'inscribir':
        if (Number(argv.i) < cursos.length + 1) {
            curso_inscribir = cursos.find(cursoEst => cursoEst.id == argv.i);
            registro(curso_inscribir, argv.n, argv.c);
        } else {
            console.log('El valor introducido en ' + argv.i + ' no es número válido');
        }
        break;
};

if (!programa) {
    ver_cursos.imprimir_cursos();
    console.log('Si deseas inscribir un curso ingresa: ' + '\n' +
        'node index inscribir ' + '\n' +
        '--i=identificador del curso --n=nombre del interesado --c=número de identificación');
};