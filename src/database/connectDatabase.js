import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config({path: '../.env'});

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect((error) => {
    if (error) {
      console.error(`error ao conectar ao banco de dados: ${error.stack}`);
      return;
    } else {
        console.log('Conexão bem-sucedida com o banco de dados!');
    }
  });

const databaseQuery = (sqlMethod, mensagemReject, values = '') => {
    return new Promise((resolve, reject) => {
        db.query(sqlMethod, values, (error, result) => {
            if (error) {
                return reject(mensagemReject);
            }
            const resultData = JSON.parse(JSON.stringify(result))
            return resolve(resultData)
        });
    });
}

export default databaseQuery;