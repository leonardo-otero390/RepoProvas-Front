export type Category = {
  id: number;
  name: string;
};

type Discipline = {
  id: number;
  name: string;
  termId: number;
};

export type Test = {
  discipline: Discipline;
  id: number;
  name: string;
  pdfUrl: string;
};

export type CategoryWithTests = {
  category: Category;
  tests: Test[];
};
