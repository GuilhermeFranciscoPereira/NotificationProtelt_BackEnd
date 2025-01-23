import notificationRepository from "../repositories/notificationRepository.js";
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class NotificationController {

    async index(req, res) {
        try {
            const dataResult = await notificationRepository.findAll();
            res.status(200).json(dataResult)
        } catch (error) {
            res.status(500).json({message: error})
        }
    }
    
    async store(req, res) {
        const { placa = "-", municipio = "-", uf = "-", marcaModelo = "-", cor = "-", especieTipo = "-", localDaInfracao = "-", nomeCondutor = "-", proprietario = "-", quadraLote = "-", naturezaDoVeiculo = "-", grauDaInfracao = "-", medicaoRealizadaKMH = "-", dataHoraDaInfracao = "-", valor = "-", fotoInfracao = "-"} = req.body;
        const nomeFotoInfracao = req.files.fotoInfracao[0].name || "-";
        const allDatas = [placa, municipio, uf, marcaModelo, cor, especieTipo, localDaInfracao, nomeCondutor, proprietario, quadraLote, naturezaDoVeiculo, grauDaInfracao, medicaoRealizadaKMH, dataHoraDaInfracao, valor, nomeFotoInfracao];
        try {
            req.files.fotoInfracao[0].mv(join(__dirname, '../../../notificationprotelt-frontend/public/uploads', `${placa}${nomeFotoInfracao}`));
            await notificationRepository.create(allDatas);
            res.status(201).json({ message: 'Infração cadastrada com sucesso!'});
        } catch (error) {
            res.status(500).json({ message: error});
        }
    }

    async showByPlate(req, res) {
        const { placa } = req.params;
        try {
            const query = await notificationRepository.findByPlate(placa);
            res.status(200).json(query);
        } catch (error) {
            console.error("Erro ao buscar infrações:", error);
            res.status(500).json({ message: "Erro ao buscar infrações." });
        }
    }
}

export default new NotificationController();