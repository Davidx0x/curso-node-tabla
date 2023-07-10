const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./cofig/yargs');
const colors = require('colors');


console.clear();

//const base = 3;
crearArchivo(argv.b, argv.h, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo.cyan, 'creada'.cyan))
    .catch(err => console.log(err));