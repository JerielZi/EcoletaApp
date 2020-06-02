import express from 'express';
import routes from './routes';

const app = express();

//Para que o express possa entender o corpo da requisição em JSON
app.use(express.json());

app.use(routes);

app.listen(3333);