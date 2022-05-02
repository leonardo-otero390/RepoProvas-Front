import NameSearchParams from "../interfaces/NameSearchParams";
import { createAuthHeader, instance } from "./api";

export const get = async (token: string) =>
  instance.get("/disciplines", createAuthHeader(token));

export const getByName = async ({ name, token }: NameSearchParams) =>
  instance.get(`/disciplines?name=${name}`, createAuthHeader(token));

export const getByTermId = async (termId: number, token: string) =>
  instance.get(`/terms/${termId}/disciplines`, createAuthHeader(token));
