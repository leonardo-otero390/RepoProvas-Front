import { CategoryWithTests } from "./CategoriesTypes";

export type Teacher = {
  id: number;
  name: string;
};

export type TeachersWithCategories = {
  teacher: Teacher;
  categories: CategoryWithTests[];
}[];
