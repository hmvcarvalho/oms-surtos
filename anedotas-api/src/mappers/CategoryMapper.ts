import { CategoryDomain } from '../domain/CategoryDomain';
import { ICategoryDTO } from '../dtos/ICategoryDTO';
import ICategoryPersistence from '../dataSchema/ICategoryPersistence';

export class CategoryMapper {
    public static toDTO(category: CategoryDomain): ICategoryDTO {
        return {
            category: category.category,
            path: category.path,
        };
    }

    public static toPersistence(category: CategoryDomain): ICategoryPersistence {
        return {
            category: category.category,
            path: category.path,
        };
    }

    public static toDomain(category: ICategoryDTO | ICategoryPersistence): CategoryDomain {
        return CategoryDomain.createCategory(category);
    }
}
