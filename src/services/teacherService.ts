import NameSearchParams from "../interfaces/NameSearchParams";
import { createAuthHeader, instance } from "./api";

export const get = async (token: string) =>
  instance.get("/teachers", createAuthHeader(token));

export const getByName = async ({ name, token }: NameSearchParams) =>
  instance.get(`/teachers?name=${name}`, createAuthHeader(token));

export const getByDisciplineId = async (
  disciplineId: number,
  token: string
) =>
  instance.get(
    `/disciplines/${disciplineId}/teachers`,
    createAuthHeader(token)
  );
