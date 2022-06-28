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
}
