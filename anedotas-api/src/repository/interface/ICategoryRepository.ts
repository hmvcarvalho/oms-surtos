import { CategoryDomain } from '../../domain/CategoryDomain';

export default interface ICategoryRepository {
    save: (category: CategoryDomain) => Promise<CategoryDomain>;
    findAll: () => Promise<Array<CategoryDomain>>;
    findById: (id: string) => Promise<CategoryDomain>;
    deleteById: (id: string) => Promise<boolean>;
}
