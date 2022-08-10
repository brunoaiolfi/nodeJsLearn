import { ICategory } from "../models/categories";

class CategoriesRepository {
  private categories: ICategory[];

  constructor() {
    this.categories = [];
  }

  create(name: string, description: string): ICategory {

    const newCategory = new ICategory();

    Object.assign(newCategory, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(newCategory);

    return newCategory;
  }

  getAll() {
    return this.categories;
  }

  findByName(name: string): ICategory | undefined {
    return this.categories.find((category) => category.name === name);
  }
}

export { CategoriesRepository };
