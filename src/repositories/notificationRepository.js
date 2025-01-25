import databaseQuery from "../database/connectDatabase.js";

class NotificationRepository {
    // GET ALL
    findAll() {
        const sqlMethod = "SELECT * FROM infractions";
        return databaseQuery(sqlMethod);
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

    // GET BY SPEED RANGE FILTER
    filterBySpeedRange(minSpeed, maxSpeed, plate) {
        let sqlMethod = `SELECT * FROM infractions WHERE medicaoRealizadaKMH BETWEEN ? AND ?`;
        let params = [minSpeed, maxSpeed];

        if (plate) {
            sqlMethod += ' AND placa = ?';
            params.push(plate);
        }

        return databaseQuery(sqlMethod, params);
    }

    // POST
    create(allDatas) {
        const sqlMethod = 'INSERT INTO infractions (placa, dataEnvio, municipio, uf, marcaModelo, cor, especieTipo, localDaInfracao, nomeCondutor, proprietario, quadraLote, naturezaDoVeiculo, medicaoRealizadaKMH, dataHoraDaInfracao, valor, fotoInfracao) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        return databaseQuery(sqlMethod, allDatas);
    }


    // PATCH TO UPDATE FIELDS
    updateById(autoDaInfracao, updatedFields) {
        const fields = Object.keys(updatedFields);
        const values = Object.values(updatedFields);
    
        const sqlMethod = `UPDATE infractions SET ${fields.map((field) => `${field} = ?`).join(', ')} WHERE autoDaInfracao = ?`;
        return databaseQuery(sqlMethod, [...values, autoDaInfracao]);
    }

    // DELETE A INFRINGEMENT
    deleteById(autoDaInfracao) {
        const sqlMethod = "DELETE FROM infractions WHERE autoDaInfracao = ?";
        return databaseQuery(sqlMethod, [autoDaInfracao]);
    }
}

export default new NotificationRepository();