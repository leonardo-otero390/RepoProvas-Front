import { Teacher } from "./Teacher";

interface Category {
  id: number;
  name: string;
}

interface TestWithTeacher {
  id: number;
  name: string;
  pdfUrl: string;
  teachersDisciplines: {
    teachers: Teacher;
  };
}
export interface CategoryWithTestsByDisciplineId extends Category {
  tests: TestWithTeacher[];
}
