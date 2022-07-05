import { Request, Response, NextFunction } from 'express';
import IDoctorDTO from '../dtos/IDoctorDTO';
import { DoctorService } from '../services/DoctorService';
import IDoctorController from './interfaces/IDoctorController';
import IDoctorService from '../services/interfaces/IDoctorService';
import { DoctorMapper } from '../mappers/DoctorMapper';
export class DoctorController implements IDoctorController {
    constructor(private doctorService: IDoctorService = new DoctorService()) {}

    post = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const doctorDTO: IDoctorDTO = req.body;
            const newDoctor = await this.doctorService.createDoctor(doctorDTO);
            res.status(201).send(newDoctor);
        } catch (error) {
            res.status(400).json(JSON.stringify(error));
        }
    };

    get = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const doctorList = await this.doctorService.getDoctors();
            res.status(200).send(doctorList);
        } catch (error) {
            res.status(400).json(JSON.stringify(error));
        }
    };

    getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const theDoctor = await this.doctorService.getDoctorById(req.params.id);
            res.status(200).send(theDoctor);
        } catch (error) {
            res.status(400).json(JSON.stringify(error));
        }
    };

    update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const doctorDTO: IDoctorDTO = { ...req.body, dateOfBirth: new Date(req.body.dateOfBirth) };
            await this.doctorService.updateDoctor(req.params.id, doctorDTO);
            res.status(200).send(`doctor with id: ${req.params.id} updated with success`);
        } catch (error) {
            res.status(400).json(JSON.stringify(error));
        }
    };

    delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            (await this.doctorService.deleteDoctor(req.params.id))
                ? res.status(200).send(`Doctor with id:${req.params.id} deleted`)
                : res.status(400).send(`Doctor with id:${req.params.id} not found`);
        } catch (error) {
            res.status(400).json(JSON.stringify(error));
        }
    };
}
