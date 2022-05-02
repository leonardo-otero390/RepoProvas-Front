import axios from "axios";
import AuthValues from "../interfaces/AuthValues";
import { NewTest } from "../interfaces/Test";

export const instance = axios.create({
  baseURL: "http://localhost:4000",
});

export const createAuthHeader = (token: string) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const signUp = async (newUser: AuthValues) =>
  instance.post("/sign-up", newUser);

export const login = async (loginUser: AuthValues) =>
  instance.post("/login", loginUser);

export const getTerms = async (token: string) =>
  instance.get("/terms", createAuthHeader(token));

export const getTestsByDisciplineId = async (
  disciplineId: number,
  token: string
) =>
  instance.get(`/disciplines/${disciplineId}/tests`, createAuthHeader(token));

export const getTestsByTeacherId = async (teacherId: number, token: string) =>
  instance.get(`/teachers/${teacherId}/tests`, createAuthHeader(token));

export const incrementViews = async (testId: number, token: string) =>
  instance.patch(`/tests/${testId}/views`, {}, createAuthHeader(token));

export const getCategories = async (token: string) =>
  instance.get("/categories", createAuthHeader(token));

export const postTest = async (test: NewTest, token: string) =>
  instance.post("/tests", test, createAuthHeader(token));
