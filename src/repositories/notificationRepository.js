import databaseQuery from "../database/connectDatabase.js";

class NotificationRepository {
    // GET ALL
    findAll() {
        const sqlMethod = "SELECT * FROM infractions";
        return databaseQuery(sqlMethod);
    }

    // POST
    create(allDatas) {
        const sqlMethod = 'INSERT INTO infractions (placa, dataEnvio, municipio, uf, marcaModelo, cor, especieTipo, localDaInfracao, nomeCondutor, proprietario, quadraLote, naturezaDoVeiculo, medicaoRealizadaKMH, dataHoraDaInfracao, valor, fotoInfracao) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        return databaseQuery(sqlMethod, allDatas);
    }

    // GET BY ID ( autoDaInfracao )
    findById(autoDaInfracao) {
        const sqlMethod = "SELECT * FROM infractions WHERE autoDaInfracao = ?"
        return databaseQuery(sqlMethod, autoDaInfracao)
    }

    // GET BY PLATE
    findByPlate(plates) {
        const sqlMethod = "SELECT * FROM infractions WHERE placa = ?"
        return databaseQuery(sqlMethod, plates)
    }

    // PATCH TO UPDATE FIELDS
    updateById(autoDaInfracao, updatedFields) {
        const fields = Object.keys(updatedFields);
        const values = Object.values(updatedFields);
    
        const sqlMethod = `UPDATE infractions SET ${fields.map((field) => `${field} = ?`).join(', ')} WHERE autoDaInfracao = ?`;
        return databaseQuery(sqlMethod, [...values, autoDaInfracao]);
    }
}

export default new NotificationRepository();