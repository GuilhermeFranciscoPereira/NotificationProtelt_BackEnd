import notificationRepository from "../repositories/notificationRepository.js";
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class NotificationController {
    // GET ALL
    async index(req, res) {
        try {
            const dataResult = await notificationRepository.findAll();
            res.status(200).json(dataResult)
        } catch (error) {
            res.status(500).json({ message: `Erro ao buscar todas as infrações: ${error}`});
        }
    }
    
    // GET BY ID ( autoDaInfracao )
    async showById(req, res) {
        const { autoDaInfracao } = req.params;
        try {
            const query = await notificationRepository.findById(autoDaInfracao);
            res.status(200).json(query);
        } catch (error) {
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
            res.status(500).json({ message: `Erro ao buscar infrações: ${error}`});
        }
    }

    // GET BY SPEED RANGE
    async filterBySpeed(req, res) {
        const { minSpeed, maxSpeed, plate } = req.body;
        try {
          const query = await notificationRepository.filterBySpeedRange(minSpeed, maxSpeed, plate);
          return res.status(200).json(query);
        } catch (error) {
          return res.status(500).json({ message: `Erro ao filtrar infrações: ${error}` });
        }
    }

    // POST
    async store(req, res) {
        let { placa, dataEnvio, municipio, uf, marcaModelo, cor, especieTipo, localDaInfracao, nomeCondutor, proprietario, quadraLote, naturezaDoVeiculo, medicaoRealizadaKMH, dataHoraDaInfracao, valor} = req.body;
        const dataEnvioString = dataEnvio || null;
        const nomeUrlPhoto = req.files.fotoInfracao[0].name;
        const nomeFotoInfracao = `${placa}${medicaoRealizadaKMH}${nomeUrlPhoto}`;
        const allDatas = [placa, dataEnvioString, municipio, uf, marcaModelo, cor, especieTipo, localDaInfracao, nomeCondutor, proprietario, quadraLote, naturezaDoVeiculo, medicaoRealizadaKMH, dataHoraDaInfracao, valor, nomeFotoInfracao];
        try {
            req.files.fotoInfracao[0].mv(join(__dirname, '../../../notificationprotelt-frontend/public/uploads', `${placa}${medicaoRealizadaKMH}${nomeUrlPhoto}`));
            await notificationRepository.create(allDatas);
            res.status(201).json({ message: 'Infração cadastrada com sucesso!'});
        } catch (error) {
            res.status(500).json({ message: `Erro ao cadastrar nova infração: ${error}`});
        }
    }
    
    // PATCH TO UPDATE FIELDS
    async update(req, res) {
        const { autoDaInfracao } = req.params;
        let { placa, dataEnvio, municipio, uf, marcaModelo, cor, especieTipo, localDaInfracao, nomeCondutor, proprietario, quadraLote, naturezaDoVeiculo, medicaoRealizadaKMH, dataHoraDaInfracao, valor, fotoInfracaoOld} = req.body;
        let dataEnvioValidated = '';
        if (dataEnvio === 'null') {dataEnvioValidated = null} else {dataEnvioValidated = new Date(dataEnvio)};
        let dataHoraDaInfracaoValidated = '';
        if (typeof dataHoraDaInfracao === 'string') {dataHoraDaInfracaoValidated = new Date(dataHoraDaInfracao) } else { dataHoraDaInfracaoValidated = dataHoraDaInfracao};
        const allDatas = [placa, dataEnvioValidated, municipio, uf, marcaModelo, cor, especieTipo, localDaInfracao, nomeCondutor, proprietario, quadraLote, naturezaDoVeiculo, medicaoRealizadaKMH, dataHoraDaInfracaoValidated, valor];
        const fotoExist = req?.files?.fotoInfracao[0]?.name || null;
        if(fotoExist) {
            allDatas.push(`${placa}${medicaoRealizadaKMH}${fotoExist}`);
            req?.files?.fotoInfracao[0]?.mv(join(__dirname, '../../../notificationprotelt-frontend/public/uploads', `${placa}${medicaoRealizadaKMH}${fotoExist}`));
            const deleteOldPhoto = join(__dirname, '../../../notificationprotelt-frontend/public/uploads', fotoInfracaoOld);
            fs.unlink(deleteOldPhoto, (err) => console.log(`Erro ao deletar antiga foto, erro: ${err}`));
        } else {
            allDatas.push(fotoInfracaoOld);
        }
        try {
            await notificationRepository.updateById(autoDaInfracao, allDatas);
            res.status(200).json({ message: 'Infração atualizada com sucesso!' });
        } catch (error) {
            res.status(500).json({ message: `Erro ao atualizar infração: ${error}` });
        }
    }

    // DELETE A INFRINGEMENT
    async delete(req, res) {
        const { autoDaInfracao } = req.params;
        const data = await notificationRepository.findById(autoDaInfracao);
        try {
            const deleteOldPhoto = join(__dirname, '../../../notificationprotelt-frontend/public/uploads', data[0].fotoInfracao);
            fs.unlink(deleteOldPhoto, (err) => console.log(`Erro ao deletar antiga foto, erro: ${err}`));
            await notificationRepository.deleteById(autoDaInfracao);
            res.status(200).json({ message: 'Infração deletada com sucesso!' });
        } catch (error) {
            res.status(500).json({ message: `Erro ao deletar a infração: ${error}` });
        }
    }
}

export default new NotificationController();