import { Request, Response, NextFunction } from 'express';
import IDoctorDTO from '../dtos/IDoctorDTO';
import { DoctorService } from '../services/DoctorService';
import IDoctorController from './interfaces/IDoctorController';
import IDoctorService from '../services/interfaces/IDoctorService';

export class DoctorController implements IDoctorController {
    constructor(private doctorService: IDoctorService = new DoctorService()) {}

    post = async (req: Request, res: Response, next: NextFunction) => {
        const doctorDTO: IDoctorDTO = req.body;
        //this.doctorService = DoctorMapper.
        res.send('doctor post');
    };
}
