import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
//npm install --save @types/jsonwebtoken

export class TokenValidation {
    verifyToken = (req: Request, res: Response, next: NextFunction, token: string) => {
        if (!token) return res.status(401).send('token not found');

        jwt.verify(token, process.env.TOKEN_SECRET!, async (error, success) => {
            if (error) {
                return res.status(403).send({
                    message: 'Failed to authenticate token (token is invalid)',
                });
            }
        });
    };
}
