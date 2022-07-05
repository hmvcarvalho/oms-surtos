import { ICategoryDTO } from '../../dtos/ICategoryDTO';

interface ICategoryService {
    createCategory(categoryDTO: ICategoryDTO): Promise<ICategoryDTO>;
    updateCategory(id: string, categoryDTO: ICategoryDTO): Promise<ICategoryDTO>;
    deleteCategory(id: string): Promise<Boolean>;
    getCategoryById(id: string): Promise<ICategoryDTO | null>;
    getAllCategorys(): Promise<ICategoryDTO[]>;
}

export { ICategoryService };
