import { Button, TextField } from "@mui/material";
import AuthValues from "../interfaces/AuthValues";
import styled from "styled-components";
import PasswordInput from "./PasswordInput";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as api from "../services/api";

interface Props {
  type: "login" | "signup";
}

interface ErrorState {
  email: false | string;
  password: false | string;
  confirmPassword: false | string;
}

export default function AuthForm({ type }: Props) {
  const [values, setValues] = React.useState<AuthValues>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const initialErrorState: ErrorState = {
    email: false,
    password: false,
    confirmPassword: false,
  };
  const [error, setError] = React.useState<ErrorState>(initialErrorState);

  const navigate = useNavigate();

  const texts = {
    title: type === "login" ? "Login" : "Cadastro",
    buttonText: type === "login" ? "Entrar" : "Cadastrar",
    linkText:
      type === "login"
        ? "Não tem uma conta? Cadastre-se"
        : "Já tem uma conta? Faça login",
    linkTo: type === "login" ? "/signup" : "/",
  };

  const styles = {
    input: { width: "100%" },
  };

  const handleChange =
    (prop: keyof AuthValues) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(initialErrorState);
    if (type === "signup") {
      const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
      if (!emailRegex.test(values.email))
        return setError({ ...error, email: "Email inválido" });
      if (values.password === "")
        return setError({ ...error, password: "Senha é um campo obrigatório" });
      if (values.password !== values.confirmPassword) {
        return setError({ ...error, confirmPassword: "Senhas não conferem" });
      }
      console.log(values);
      api
        .signUp(values)
        .then(() => navigate("/"))
        .catch((err) => {
          if (err.response.status === 409)
            return setError({ ...error, email: "Email já cadastrado" });
          alert(err.response.data);
        });
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
      <h1>
        <strong>{texts.title}</strong>
      </h1>
      <GitHubButton>ENTRAR COM GITHUB</GitHubButton>
      <Divisor>
        <div></div>ou
        <div></div>
      </Divisor>
      <Inputs>
        <TextField
          label="Email"
          type="text"
          variant="outlined"
          error={!!error.email}
          onChange={handleChange("email")}
          sx={styles.input}
          helperText={error.email}
        />
        <PasswordInput
          onChange={handleChange("password")}
          sx={styles.input}
          value={values.password}
          error={error.password}
        />
        {type === "signup" ? (
          <PasswordInput
            onChange={handleChange("confirmPassword")}
            sx={styles.input}
            value={values.confirmPassword}
            error={error.confirmPassword}
          />
        ) : null}
      </Inputs>
      <Actions>
        <Link to={texts.linkTo}>{texts.linkText}</Link>
        <Button type="submit" variant="contained">
          {texts.buttonText}
        </Button>
      </Actions>
    </Container>
  );
}

const Actions = styled.div`
  width: 100%;
  margin-top: 8px;
  padding: 0 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    font-family: "Poppins";
    font-size: 16px;
    letter-spacing: 0.15px;
    text-decoration-line: underline;
    color: rgba(70, 115, 202, 0.8);
  }
`;

const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h1 {
    font-family: "Poppins";
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 16px;
  }
`;

const GitHubButton = styled.button`
  width: 100%;
  height: 36px;

  background: #424445;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;

  font-family: "Roboto";
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #ffffff;
`;

const Divisor = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 16px 0;
  div {
    width: 100%;
    height: 1px;
    background: #c4c4c4;
  }
  span {
    font-family: "Poppins";
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.15px;

    color: rgba(0, 0, 0, 0.8);
  }
`;
