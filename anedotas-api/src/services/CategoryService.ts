import { ICategoryDTO } from '../dtos/ICategoryDTO';
import { CategoryMapper } from '../mappers/CategoryMapper';
import { ICategoryService } from './interfaces/ICategoryService';
import ICategoryRepository from '../repository/interface/ICategoryRepository';
import { MongoCategoryRepository } from '../repository/mongo/MongoCategoryRepository';

export default class CategoryService implements ICategoryService {
    constructor(private categoryRepository: ICategoryRepository = new MongoCategoryRepository()) {}

    async createCategory(categoryDto: ICategoryDTO): Promise<ICategoryDTO> {
        const categoryDom = CategoryMapper.toDomain(categoryDto);
        return CategoryMapper.toDTO(await this.categoryRepository.save(categoryDom));
    }

    async updateCategory(id: string, categoryDto: ICategoryDTO) {
        const categoryDom = CategoryMapper.toDomain({ ...categoryDto });
        return CategoryMapper.toDTO(await this.categoryRepository.save(categoryDom));

        // return CategoryrMapper.toDTO(await categoryRepository.save(CategoryDom));
    }

    async deleteCategory(id: string): Promise<boolean> {
        return await this.categoryRepository.deleteById(id);
    }

    async getCategoryById(id: string): Promise<ICategoryDTO | null> {
        return CategoryMapper.toDTO(await this.categoryRepository.findById(id));
    }

    async getAllCategorys(): Promise<ICategoryDTO[]> {
        const categoryDomList = await this.categoryRepository.findAll();
        return categoryDomList.map((x) => CategoryMapper.toDTO(x));
    }
}
