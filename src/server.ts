import express from 'express';
import cors from 'cors';

import routes from './routes';

import './database/index';

const app = express();

app.use(express.json());
app.use(cors);
app.use(routes);

app.get('/', (request, response) => {
  return response.json({ message: 'Hello GoStack' });
});

app.listen(3333, () => {
  console.log('🌾️🐛️ Server started on port 3333');
});
