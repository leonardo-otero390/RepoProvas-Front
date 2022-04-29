import { Discipline } from "./Disicpline";
import { Teacher } from "./Teacher";

interface Test {
  id: number;
  name: string;
  pdfUrl: string;
}

export interface TestWithTeacher extends Test {
  teachersDisciplines: {
    teachers: Teacher;
  };
}

export interface TestWithDiscipline extends Test {
  teachersDisciplines: {
    disciplines: Discipline;
  };
}

export interface TestWithTDPartial extends Test {
  teachersDisciplines: {
    disciplines?: Discipline;
    teachers?: Teacher;
  };
}
