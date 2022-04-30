import axios from "axios";
import AuthValues from "../interfaces/AuthValues";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

const createAuthHeader = (token: string) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const signUp = async (newUser: AuthValues) =>
  instance.post("/sign-up", newUser);

export const login = async (loginUser: Omit<AuthValues, "confirmPassword">) =>
  instance.post("/login", loginUser);

export const getTerms = async (token: string) =>
  instance.get("/terms", createAuthHeader(token));

export const getDisciplinesByTermId = async (termId: number, token: string) =>
  instance.get(`/terms/${termId}/disciplines`, createAuthHeader(token));

export const getTestsByDisciplineId = async (
  disciplineId: number,
  token: string
) =>
  instance.get(`/disciplines/${disciplineId}/tests`, createAuthHeader(token));

export const getTeachers = async (token: string) =>
  instance.get("/teachers", createAuthHeader(token));

export const getTestsByTeacherId = async (teacherId: number, token: string) =>
  instance.get(`/teachers/${teacherId}/tests`, createAuthHeader(token));

interface NameSearchParams {
  name: string;
  token: string;
}

export const getTeachersByName = async ({ name, token }: NameSearchParams) =>
  instance.get(`/teachers?name=${name}`, createAuthHeader(token));

export const getDisciplinesByName = async ({ name, token }: NameSearchParams) =>
  instance.get(`/disciplines?name=${name}`, createAuthHeader(token));
