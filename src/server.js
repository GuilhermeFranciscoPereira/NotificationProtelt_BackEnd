import express from 'express';
import router from './routes/routes.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config({path: '../.env'});

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(router);
app.use(express.json());

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {console.log(`Servidor iniciado em: ${PORT}`)});