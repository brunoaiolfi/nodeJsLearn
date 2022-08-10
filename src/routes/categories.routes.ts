import { Router } from "express";
import { CategoriesRepository } from "../respositories/categoriesRepository";
import { CreateCategoryService } from "../services/CreateCategory";

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  try {
    const { name, description } = req.body;

    const createCategoryService = new CreateCategoryService(
      categoriesRepository
    );

    const newCategory = createCategoryService.execute(name, description);

    return res.json(newCategory);
  } catch (error) {
    return res.status(error.response.status).json({ error: error });
  }
});

categoriesRoutes.get("/", (req, res) => {
  const categories = categoriesRepository.getAll();

  return res.json(categories);
});

export { categoriesRoutes };
