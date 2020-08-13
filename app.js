const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { ARGV } = require('./config/yargs');
const colors = require('colors');



const comando = ARGV._[0];

switch (comando) {
    case 'listar':
        listarTabla(ARGV.base, ARGV.limite);
        break;

    case 'crear':
        crearArchivo(ARGV.base, ARGV.limite)
            .then(archivo => {
                console.log(archivo);
            })
            .catch(err => {
                console.warn(err);
            });
        break;

    default:
        console.log('Comando no reconocido :(');
}