// execute a migration
import path from 'path'
// const path = require('path')

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite') //uni caminhos
        // ela retorna baseado no SO, o windows usa '\' para diretorios, entao padroniza e cuida do caminho para o diretorio
        // __dirname dentro dessa pasta retorna o diretorio onde encontro esse mesmo arquivo
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true
}; //knex dont support ES6, because of this, module.exports