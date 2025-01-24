import fileUpload from 'express-fileupload';
import router from './routes/routes.js';
import express from 'express';
import multer from 'multer';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config({path: '../.env'});

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(fileUpload());

const upload = multer({
    dest: '../../notificationprotelt-frontend/public/uploads',
    limits: { fileSize: 10 * 1024 * 1024 },
});

app.use(router);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {console.log(`Servidor iniciado em: ${PORT}`)});