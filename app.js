const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const { argv } = require('./config/yargs')
const command = argv._[0]

switch (command) {
    case 'list':
        listarTabla(argv.base, argv.limit)
            .then(tabla => console.log(tabla))
            .catch(err => console.log(err));
        break;

    case 'create':
        crearArchivo(argv.base, argv.limit)
            .then(file => console.log(file))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Command not recognized');
}