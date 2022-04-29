import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TermAccordion from "../components/TermAccordion";
import TeacherAccordion from "../components/TeacherAccordion";

export default function Search() {
  let { type } = useParams();
  if (type !== "terms" && type !== "teachers") type = "terms";
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    alert("É necessário estar logado para acessar a página");
    navigate("/");
    return <></>;
  }
  const title =
    type === "terms" ? "Buscar por disciplina" : "Buscar por professores";

  return (
    <>
      <Header />
      <Title>{title}</Title>
      <hr color="#C4C4C4" />
      <Container>
        <Stack spacing={16} direction="row">
          <Button
            variant={type === "terms" ? "contained" : "outlined"}
            onClick={() => navigate("/search/terms")}
          >
            Disciplinas
          </Button>
          <Button
            variant={type === "teachers" ? "contained" : "outlined"}
            onClick={() => navigate("/search/teachers")}
          >
            Pessoa Instruturoa
          </Button>
          <Button variant="outlined">Adicionar</Button>
        </Stack>
        {type === "terms" ? (
          <TermAccordion token={token} />
        ) : (
          <TeacherAccordion token={token} />
        )}
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
