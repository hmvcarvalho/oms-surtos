import { Request, Response, NextFunction } from 'express';
import ILoginDTO from '../dtos/ILoginDTO';
import IUserService from '../services/interfaces/IUserService';
import { UserService } from '../services/UserService';
import IUserController from './interfaces/IUserController';

export class UserController implements IUserController {
    constructor(private userService: IUserService = new UserService()) {}

    post = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const loginDto: ILoginDTO = req.body;
            const token = await this.userService.login(loginDto);
            res.status(203).send(token);
        } catch (error) {
            res.status(400).json(JSON.stringify(error));
        }
    };
}
