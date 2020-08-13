const OPTS = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        demand: false,
        alias: 'l',
        default: 10
    }
}

const ARGV = require('yargs')
    .command('listar', 'Imprime en la consola la tabla de multiplicar', OPTS)
    .command('crear', 'Genera un archivo txt con la tabla indicada y el limite indicado', OPTS)
    .help()
    .argv;

module.exports = {
    ARGV
}