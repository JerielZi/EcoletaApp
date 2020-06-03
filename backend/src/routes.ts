import express, { response } from 'express';

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'
//Router() é um método do express que permite que utilizemos
//as routas do servidor em outros arquivos

// index, show, create, update, delete
const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

//Listagem de itens
routes.get('/items', itemsController.index);
 //Criação de pontos de coleta
 routes.post('/points',pointsController.create);
 //Listar um ponto de coleta específico
 routes.get('/points/:id',pointsController.show);

 export default routes;