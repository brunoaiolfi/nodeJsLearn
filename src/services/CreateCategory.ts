import { ICategory } from "../models/categories";
import { CategoriesRepository } from "../respositories/categoriesRepository";

class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute(name: string, description: string): ICategory {
    const existingCategory = this.categoriesRepository.findByName(name);

    if (existingCategory) {
      throw new Error("Category already exists!");
    }

    const newCategory = this.categoriesRepository.create(name, description);

    return newCategory;
  }
}

export { CreateCategoryService };
