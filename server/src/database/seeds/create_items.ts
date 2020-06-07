import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('items').insert([ //await = aguardar o insert finalizar
        { title: 'Lâmpadas', image: 'lampadas.svg' },
        { title: 'Pilhas e Baterias', image: 'baterias.svg' },
        { title: 'Papéis e Papelão', image: 'papeis-papelao.svg' },
        { title: 'Resíduos Eletrônicos', image: 'eletronicos.svg' },
        { title: 'Resíduos Orgânicos', image: 'organicos.svg' },
        { title: 'Oleo de Cozinha', image: 'oleo.svg' }
    ])
    //popular o banco de dados, na tabela items
}