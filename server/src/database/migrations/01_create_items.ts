import Knex from 'knex'; //types in type script start with upper case

export async function up(knex: Knex) { //type of knex, knex:Knex(uppercase)
    // realiza as alterações no db, like Create table
    // a instacia do knex acessa o db em nosso connection
    return knex.schema.createTable('items', table => {
        table.increments('id').primary(); //auto_increment
        table.string('image').notNullable(); //guardar o nome do arquivo
        table.string('title').notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('items');
}