import { Schema, model, Document } from 'mongoose';
import ICategoryPersistence from '../../dataSchema/ICategoryPersistence';

const CategorySchema = new Schema({
    category: { type: String, require: true, index: true },
    path: { type: String, require: true },
});

const categoryModel = model<Document & ICategoryPersistence>('Category', CategorySchema);

export default categoryModel;
