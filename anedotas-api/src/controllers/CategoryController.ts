import { Request, Response, NextFunction } from 'express';
import { ICategoryDTO } from '../dtos/ICategoryDTO';
import ICategoryController from './interfaces/ICategoryController';
import { ICategoryService } from '../services/interfaces/ICategoryService';
import CategoryService from '../services/CategoryService';

class CategoryController implements ICategoryController {
    constructor(private categoryService: ICategoryService = new CategoryService()) {}

    post = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const categoryDto: ICategoryDTO = req.body;
            const newCategory = await this.categoryService.createCategory(categoryDto);
            res.status(201).send(newCategory);
        } catch (err) {
            res.status(400).json(JSON.stringify(err));
        }
    };

    get = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const categoryList = await this.categoryService.getAllCategorys();
            res.status(200).send(categoryList);
        } catch (error) {
            res.status(400).json(JSON.stringify(error));
        }
    };

    getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.status(200).send(await this.categoryService.getCategoryById(req.params.id));
        } catch (error) {
            res.status(400).json(JSON.stringify(error));
        }
    };

    delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            (await this.categoryService.deleteCategory(req.params.id))
                ? res.status(200).send(`Category ${req.params.id} deleted with sucess`)
                : res.status(400).send(`Category ${req.params.id} not found`);
        } catch (error) {
            res.status(400).json(JSON.stringify(error));
        }
    };

    put = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const categoryDTO: ICategoryDTO = req.body;
            const categoryUpdated = await this.categoryService.updateCategory(req.params.id, categoryDTO);
            res.status(200).send(categoryUpdated);
        } catch (error) {
            res.status(400).json(JSON.stringify(error));
        }
    };
}

export { CategoryController };
