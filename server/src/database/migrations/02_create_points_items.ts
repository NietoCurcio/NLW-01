import Knex from 'knex'; //types in type script start with upper case

export async function up(knex: Knex) { //type of knex, knex:Knex(uppercase)
    // realiza as alterações no db, like Create table
    // a instacia do knex acessa o db em nosso connection
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary(); //auto_increment

        table.integer('point_id') // point_id reference to 'id' in 'points'
            .notNullable()
            .references('id')
            .inTable('points'); // create a foreign key
        table.integer('item_id')
            .notNullable()
            .references('id')
            .inTable('items'); // create a foreign key
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('point_items');
}

// funcionalidades da aplicação - cadastro de ponto, listar os items de coleta disponiveis por uma rota
// lista pontos, filtro por estado, cidade e items
// lista um ponto de coleta especifico

// nao ha rota de atualizar ou remover