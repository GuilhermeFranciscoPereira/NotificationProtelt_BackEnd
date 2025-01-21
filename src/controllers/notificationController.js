import notificationRepository from "../repositories/notificationRepository.js";

class NotificationController {

    async index(req, res) {
        try {
            const dataResult = await notificationRepository.findAll();
            res.status(200).json(dataResult)
        } catch (error) {
            res.status(500).json({message: `Erro ao buscar todas as infrações: ${error.message}`})
        }
    }
    
}

export default new NotificationController();