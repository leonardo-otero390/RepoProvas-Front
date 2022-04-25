import { Category } from "./CategoriesTypes";
import { Teacher } from "./TeachersTypes";

export type Test = {
  category: Category;
  teacher: Teacher;
  id: number;
  name: string;
  pdfUrl: string;
};

export type DisciplineWithTests = {
  tests: Test[];
  id: number;
  name: string;
};

export type Terms = {
  disciplines: DisciplineWithTests[];
  id: number;
  number: number;
}[];
