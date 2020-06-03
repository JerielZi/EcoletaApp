import express, { response } from 'express';
import knex from './database/connection';
//Router() é um método do express que permite que utilizemos
//as routas do servidor em outros arquivos
const routes = express.Router();

//Listagem de itens
routes.get('/items', async (request, response) => {
  try {
     // SELECT * FROM items
  const items = await knex('items').select('*');
  
  const serializedItems = items.map(item => {
    return {
      id: item.id,
      title: item.title,
      image_url: `http://localhost:3333/uploads/${item.image}`,
    };
  })

  return response.json(serializedItems);
  } catch (error) {
    console.error(error);
  }
 
 });

 //Criação de pontos de coleta
 routes.post('/points', async (request, response) => {
   const {
     name,
     email,
     whatsapp,
     latitude,
     longitude,
     city,
     items
   } = request.body;

   await knex('points').insert({
    image: 'image-fake',
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city
   });

   return response.json({ success: true});
 })

 export default routes;