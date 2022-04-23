import axios from "axios";
import AuthValues from "../interfaces/AuthValues";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

export const signUp = async (newUser: AuthValues) =>
  instance.post("/sign-up", newUser);

export const login = async (loginUser: Omit<AuthValues, "confirmPassword">) =>
  instance.post("/login", loginUser);
