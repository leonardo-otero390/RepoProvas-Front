import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import React, { useEffect } from "react";
import TermAccordion from "../components/TermAccordion";
import * as api from "../services/api";

export default function Home() {
  const [terms, setTerms] = React.useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("É necessário estar logado para acessar a página");
      navigate("/");
      return;
    }
    api.getTestsByDiscipline(token).then((response) => {
      setTerms(response.data);
    });
  }, [navigate]);
  return (
    <>
      <Header />
      <Title>Pesquise por disciplina</Title>
      <hr color="#C4C4C4" />
      <Container>
        <Stack spacing={16} direction="row">
          <Button variant="contained">Disciplinas</Button>
          <Button variant="outlined">Pessoa Instruturoa</Button>
          <Button variant="outlined">Adicionar</Button>
        </Stack>
        <TermAccordion terms={terms} />
      </Container>
    </>
  );
}

const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-family: "Poppins";
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.8);
  margin: 16px auto 24px auto;
`;

const Container = styled.main`
  width: 80%;
  max-width: 700px;
  margin: 16px auto;
`;
