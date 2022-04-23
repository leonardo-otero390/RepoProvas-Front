import React from "react";
import styled from "styled-components";
import AuthForm from "../components/AuthForm";
import Logo from "../components/Logo";
import AuthTypes from "../interfaces/AuthTypes";

export default function AuthPage({ type }: AuthTypes) {
  return (
    <Container>
      <Logo />
      <AuthForm type={type} />
    </Container>
  );
}

const Container = styled.main`
  width: 80%;
  height: 100%;
  max-width: 464px;
  padding: 64px 0;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
