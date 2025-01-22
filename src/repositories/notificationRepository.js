import databaseQuery from "../database/connectDatabase.js";

class NotificationRepository {
    findAll() {
        const sqlMethod = "SELECT * FROM infractions";
        return databaseQuery(sqlMethod);
    }

    create(allDatas) {
        console.log(`Dados: ${allDatas}`)
        const sqlMethod = 'INSERT INTO infractions (placa, municipio, uf, marcaModelo, cor, especieTipo, localDaInfracao, nomeCondutor, proprietario, quadraLote, naturezaDoVeiculo, grauDaInfracao, medicaoRealizadaKMH, dataHoraDaInfracao, valor, fotoInfracao) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        return databaseQuery(sqlMethod, allDatas);
    }

}

export default new NotificationRepository();