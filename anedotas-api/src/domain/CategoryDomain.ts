import { ICategoryDTO } from '../dtos/ICategoryDTO';

class CategoryDomain {
    constructor(public category: string, public path: string) {}

    public static createCategory(category: ICategoryDTO) {
        if (category.category && category.path) {
            return new CategoryDomain(category.category, category.path);
        } else {
            throw new Error("Category fields can't be null");
        }
    }
}

export { CategoryDomain };
