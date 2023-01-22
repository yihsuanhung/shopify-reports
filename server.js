import express from 'express';
import { initDb } from './app/models/index.js';

const app = express();
const PORT = process.env.NODE_DOCKER_PORT || 8888;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// const test = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// };

// test();
initDb();
