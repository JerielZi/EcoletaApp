import express from 'express';

//Router() é um método do express que permite que utilizemos
//as routas do servidor em outros arquivos
const routes = express.Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello World!'})
 });

 export default routes;