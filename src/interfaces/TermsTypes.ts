type Teacher = {
  id: number;
  name: string;
};

type Category = {
  id: number;
  name: string;
};

export type Test = {
  category: Category;
  teacher: Teacher;
  id: number;
  name: string;
  pdfUrl: string;
};

export type Discipline = {
  tests: Test[];
  id: number;
  name: string;
};

export type Terms = {
  disciplines: Discipline[];
  id: number;
  number: number;
}[];
