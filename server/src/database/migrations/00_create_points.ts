// a ordem dos arquivos vai ser a ordem que as migrations vao ser executadas no db
import Knex from 'knex'; //types in type script start with upper case

export async function up(knex: Knex) { //type of knex is Knex knex:Knex(uppercase)
    // realiza as alterações no db, like Create table
    // a instacia do knex acessa o db
    return knex.schema.createTable('points', table => {
        table.increments('id').primary(); //auto_increment
        table.string('image').notNullable(); // salvar o nome do arquivo da imagem, nao a imagem em si, a referencia
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    })
}

export async function down(knex: Knex) {
    // voltar atras, algo que deu errado (deletar)
    return knex.schema.dropTable('points');

}