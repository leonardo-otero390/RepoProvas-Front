import { TestWithDiscipline, TestWithTeacher } from "./Test";

interface Category {
  id: number;
  name: string;
}

export interface CategoryWithTestsByDisciplineId extends Category {
  tests: TestWithTeacher[];
}

export interface CategoryWithTestsByTeacherId extends Category {
  tests: TestWithDiscipline[];
}
