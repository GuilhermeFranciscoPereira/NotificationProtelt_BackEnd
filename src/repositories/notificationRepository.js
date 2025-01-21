import databaseQuery from "../database/connectDatabase.js";

class NotificationRepository {
    findAll() {
        const sqlMethod = "SELECT * FROM infractions";
        return databaseQuery(sqlMethod, 'Não foi possível buscar as infrações!')
    }
}

export default new NotificationRepository();