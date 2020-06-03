import express from 'express';
import knex from './database/connection';
//Router() é um método do express que permite que utilizemos
//as routas do servidor em outros arquivos
const routes = express.Router();

routes.get('/items', async (request, response) => {
  try {
     // SELECT * FROM items
  const items = await knex('items').select('*');
  
  const serializedItems = items.map(item => {
    return {
      name: item.title,
      image_url: `http://localhost:3333/uploads/${item.image}`,
    };
  })

  return response.json(serializedItems);
  } catch (error) {
    console.error(error);
  }
 
 });

 export default routes;