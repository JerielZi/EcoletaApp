import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de users');



  response.json([
    'Jerry',
    'Ana',
    'Milton',
    'Bruno'
  ]);
});
app.listen(3333);