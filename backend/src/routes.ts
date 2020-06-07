import express, { response } from 'express';

import multer from 'multer'
import multerConfig from './config/multer'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'
//Router() é um método do express que permite que utilizemos
//as routas do servidor em outros arquivos

// index, show, create, update, delete
const routes = express.Router();
const upload = multer(multerConfig)

const pointsController = new PointsController();
const itemsController = new ItemsController();

//Listagem de vários itens
routes.get('/items', itemsController.index);

//Listagem de vários pontos
routes.get('/points/',pointsController.index);

//Listar um ponto de coleta específico
routes.get('/points/:id',pointsController.show);


//Criação de pontos de coleta
routes.post('/points', upload.single('image'), pointsController.create);


 export default routes;