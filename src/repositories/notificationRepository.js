import databaseQuery from "../database/connectDatabase.js";

class NotificationRepository {
    findAll() {
        const sqlMethod = "SELECT * FROM infractions";
        return databaseQuery(sqlMethod);
    }

    create(allDatas) {
        const sqlMethod = 'INSERT INTO infractions (placa, municipio, uf, marcaModelo, cor, especieTipo, localDaInfracao, nomeCondutor, proprietario, quadraLote, naturezaDoVeiculo, grauDaInfracao, medicaoRealizadaKMH, dataHoraDaInfracao, valor, fotoInfracao) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        return databaseQuery(sqlMethod, allDatas);
    }

    findByPlate(plates) {
        const sqlMethod = "SELECT * FROM infractions WHERE placa = ?"
        return databaseQuery(sqlMethod, plates)
    }
}

export default new NotificationRepository();