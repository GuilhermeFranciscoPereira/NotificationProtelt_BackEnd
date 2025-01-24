import databaseQuery from "../database/connectDatabase.js";

class NotificationRepository {
    findAll() {
        const sqlMethod = "SELECT * FROM infractions";
        return databaseQuery(sqlMethod);
    }

    create(allDatas) {
        const sqlMethod = 'INSERT INTO infractions (placa, dataEnvio, municipio, uf, marcaModelo, cor, especieTipo, localDaInfracao, nomeCondutor, proprietario, quadraLote, naturezaDoVeiculo, medicaoRealizadaKMH, dataHoraDaInfracao, valor, fotoInfracao) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        return databaseQuery(sqlMethod, allDatas);
    }

    findById(autoDaInfracao) {
        const sqlMethod = "SELECT * FROM infractions WHERE autoDaInfracao = ?"
        return databaseQuery(sqlMethod, autoDaInfracao)
    }

    findByPlate(plates) {
        const sqlMethod = "SELECT * FROM infractions WHERE placa = ?"
        return databaseQuery(sqlMethod, plates)
    }
}

export default new NotificationRepository();