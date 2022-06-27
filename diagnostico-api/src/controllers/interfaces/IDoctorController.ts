import { Request, Response, NextFunction } from "express";

export default interface IDoctorController {
  post(req: Request, res: Response, next: NextFunction): Promise<void>;
  //get(req: Request, res: Response, next: NextFunction): Promise<void>;
}
