import express from 'express';
import routes from './routes';
import path from 'path';

const app = express();

//Para que o express possa entender o corpo da requisição em JSON
app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);