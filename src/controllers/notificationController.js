import notificationRepository from "../repositories/notificationRepository.js";
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class NotificationController {
    // GET ALL
    async index(req, res) {
        try {
            const dataResult = await notificationRepository.findAll();
            res.status(200).json(dataResult)
        } catch (error) {
            console.log({ message: `Erro ao buscar todas as infrações: ${error}`});
            res.status(500).json({ message: `Erro ao buscar todas as infrações: ${error}`});
        }
    }
    
    // POST
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

    // GET BY ID ( autoDaInfracao )
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

    // GET BY PLATE
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

    // PATCH TO UPDATE FIELDS
    async update(req, res) {
        const { autoDaInfracao } = req.params;
        const updatedFields = req.body;
        try {
            await notificationRepository.updateById(autoDaInfracao, updatedFields);
            res.status(200).json({ message: 'Infração atualizada com sucesso!' });
        } catch (error) {
            console.error(`Erro ao atualizar infração: ${error}`);
            res.status(500).json({ message: `Erro ao atualizar infração: ${error}` });
        }
    }
    
}

export default new NotificationController();