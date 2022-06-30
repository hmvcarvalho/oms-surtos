import { Request, Response, NextFunction } from 'express';
import IPatientDTO from '../dtos/IPatientDTO';
import { PatientService } from '../services/PatientService';
import IPatientController from './interfaces/IPatientController';
import IPatientService from '../services/interfaces/IPatientService';

export class PatientController implements IPatientController {
    constructor(private patientService: IPatientService = new PatientService()) {}

    post = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const patientDTO: IPatientDTO = req.body;
            const resPatientDTO = await this.patientService.createPatient(patientDTO);

            res.status(201).send(resPatientDTO);
        } catch (error) {
            res.status(400).send(error);
        }
    };

    getByID = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let result = await this.patientService.readPatientByID(req.params.patientNumber);
            res.json(result);
        } catch (error) {
            res.status(400).send(error);
        }
    };

    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let result = await this.patientService.readPatients();
            res.json(result);
        } catch (error) {
            res.status(400).send(error);
        }
    };

    // put

    // delete
}
