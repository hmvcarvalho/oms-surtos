import { Request, Response, NextFunction } from 'express';
import IAdminDTO from '../dtos/IAdminDTO';
import { AdminService } from '../services/AdminService';
import IAdminController from './interfaces/IAdminController';
import IAdminService from '../services/interfaces/IAdminService';

export class AdminController implements IAdminController {
    constructor(private adminService: IAdminService = new AdminService()) {}

    post = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const adminDTO: IAdminDTO = req.body;
            const newAdmin = await this.adminService.createAdmin(adminDTO);
            res.status(201).send(newAdmin);
        } catch (error) {
            res.status(400).json(JSON.stringify(error));
        }
    };

    update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const adminDTO: IAdminDTO = {
                ...req.body,
                dateOfBirth: new Date(req.body.dateOfBirth),
            };
            await this.adminService.updateAdmin(req.params.id, adminDTO);
            res.status(200).send(`Admin with id: ${req.params.id} updated with success`);
        } catch (error) {
            res.status(400).json(JSON.stringify(error));
        }
    };

    get = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const theAdmin = await this.adminService.getAdmin();
            res.status(200).send(theAdmin);
        } catch (error) {
            res.status(400).json(JSON.stringify(error));
        }
    };

    getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const theAdmin = await this.adminService.getAdminById(req.params.id);
            res.status(200).send(theAdmin);
        } catch (error) {
            res.status(400).json(JSON.stringify(error));
        }
    };

    delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            (await this.adminService.deleteAdmin(req.params.id))
                ? res.status(200).send(`Admin with id ${req.params.id} deleted`)
                : res.status(400).send(`Admin with id:${req.params.id} not found`);
        } catch (error) {
            res.status(400).json(JSON.stringify(error));
        }
    };
}
