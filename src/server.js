import express from 'express';
import router from './routes/routes.js';
import dotenv from 'dotenv';

dotenv.config({path: '../.env'});

const app = express();
app.use('/', router);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {console.log(`Servidor iniciado em: ${PORT}`)});