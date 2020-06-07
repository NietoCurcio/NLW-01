// connection with our database
import knex from 'knex';
import path from 'path';

const connection = knex({
    // object with config of our database
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite') //uni caminhos
        // ela retorna baseado no SO, o windows as vezes eu vejo '\' para diretorios, entao padroniza o caminho para o diretorio
        // __dirname dentro dessa pastar retorna o diretorio onde encontro esse mesmo arquivo
    },
    useNullAsDefault: true
});

// identificar as entidades = tables do database
// points - img, name, email, whatsapp, latitude, longitude(ponto no mapa), city, uf; items - title, image, 
// um ponto de coleta pode coletar varios items, e um item pode ser coletado por varios pontos (N-N)

// Tabela que relaciona points e items, like I did in dogs&cats
// point_items -  point_id, item_id

// two ways for create tables: One, use a interface (like sqlite3) and inside there write SQL to create tables
// CREATE TABLE points ...

// two, with knex, we can write the tables using javascript, migrations: sao o historico, controle de versao do nosso db

// migration for create table, update tables, depeding story point of our project, the main help is for work a team

export default connection;