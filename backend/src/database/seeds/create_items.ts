import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
    { title: 'Lâmpadas', image: 'lampadas.svg'},
    { title: 'Pilhas e Baterias', image: 'baterias.svg'},
    { title: 'Papeis e Cartão', image: 'papeis-cartao.svg'},
    { title: 'Residuos Eletrônicos', image: 'eletronicos.svg'},
    { title: 'Residuos Orgânicos', image: 'organicos.svg'},
    { title: 'Óleo de Cozinha', image: 'oleo.svg'},
  ]);
}