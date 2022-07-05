import ICategoryRepository from '../interface/ICategoryRepository';
import { CategoryDomain } from '../../domain/CategoryDomain';
import { CategoryMapper } from '../../mappers/CategoryMapper';
import categorySchema from '../../persistence/schemas/CategorySchema';

export class MongoCategoryRepository implements ICategoryRepository {
    constructor(private categoryModel = categorySchema) {}

    save = async (category: CategoryDomain) => {
        const categoryPersistence = CategoryMapper.toPersistence(category);
        const newCategoryPersistence = await categorySchema.findOneAndUpdate(
            { category: category.category },
            categoryPersistence,
            {
                new: true,
                upsert: true,
            }
        );
        return CategoryMapper.toDomain(newCategoryPersistence);
    };

    findAll = async () => {
        const categoryPerList = await this.categoryModel.find();
        return categoryPerList.map((x) => CategoryMapper.toDomain(x));
    };

    findById = async (id: string): Promise<CategoryDomain> => {
        const categoryPers = await this.categoryModel.findOne({ categoria: id });
        if (categoryPers === null) {
            throw "Couldn't find";
        } else {
            return CategoryMapper.toDomain(categoryPers);
        }
    };

    deleteById = async (id: string) => {
        return !!(await this.categoryModel.findOneAndDelete({ categoria: id }));
    };
}
