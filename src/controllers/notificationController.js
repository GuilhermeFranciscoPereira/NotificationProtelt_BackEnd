import notificationRepository from "../repositories/notificationRepository.js";
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class NotificationController {
    async index(req, res) {
        try {
            const dataResult = await notificationRepository.findAll();
            res.status(200).json(dataResult)
        } catch (error) {
            console.log({ message: `Erro ao buscar todas as infrações: ${error}`});
            res.status(500).json({ message: `Erro ao buscar todas as infrações: ${error}`});
        }
    }
    
    async store(req, res) {
        let { placa, dataEnvio, municipio, uf, marcaModelo, cor, especieTipo, localDaInfracao, nomeCondutor, proprietario, quadraLote, naturezaDoVeiculo, medicaoRealizadaKMH, dataHoraDaInfracao, valor} = req.body;
        const nomeFotoInfracao = req.files.fotoInfracao[0].name || " -- ";
        const dataEnvioString = dataEnvio || null;
        
        const allDatas = [placa, dataEnvioString, municipio, uf, marcaModelo, cor, especieTipo, localDaInfracao, nomeCondutor, proprietario, quadraLote, naturezaDoVeiculo, medicaoRealizadaKMH, dataHoraDaInfracao, valor, nomeFotoInfracao];
        try {
            req.files.fotoInfracao[0].mv(join(__dirname, '../../../notificationprotelt-frontend/public/uploads', `${placa}${nomeFotoInfracao}`));
            await notificationRepository.create(allDatas);
            res.status(201).json({ message: 'Infração cadastrada com sucesso!'});
        } catch (error) {
            console.log({ message: `Erro ao cadastrar nova infração: ${error}`});
            res.status(500).json({ message: `Erro ao cadastrar nova infração: ${error}`});
        }
    }

    async showById(req, res) {
        const { autoDaInfracao } = req.params;
        try {
            const query = await notificationRepository.findById(autoDaInfracao);
            res.status(200).json(query);
        } catch (error) {
            console.error(`Erro ao buscar a infração: ${error}`);
            res.status(500).json({ message: `Erro ao buscar a infração: ${error}`});
        }
    }

    async showByPlate(req, res) {
        const { placa } = req.params;
        try {
            const query = await notificationRepository.findByPlate(placa);
            res.status(200).json(query);
        } catch (error) {
            console.error(`Erro ao buscar infrações: ${error}`);
            res.status(500).json({ message: `Erro ao buscar infrações: ${error}`});
        }
    }
}

export default new NotificationController();