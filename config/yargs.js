const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
};
const argv = require('yargs')
    .command('list', 'Prints in console the table', options)
    .command('create', 'Creates the table and saves it', options)
    .help()
    .argv;

module.exports = {
    argv
}