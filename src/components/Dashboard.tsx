import { useNavigate} from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

interface Props {
  type: "disciplines" | "teachers";
}

export default function Dashboard({ type }: Props) {
  if (type !== "disciplines" && type !== "teachers") type = "disciplines";
  const navigate = useNavigate();
  const title =
    type === "disciplines" ? "Buscar por disciplina" : "Buscar por professores";

  return (
    <>
      <Header />
      <Title>{title}</Title>
      <hr color="#C4C4C4" />
      <Container>
        <Stack spacing={16} direction="row">
          <Button
            variant={type === "disciplines" ? "contained" : "outlined"}
            onClick={() => navigate("/home")}
          >
            Disciplinas
          </Button>
          <Button
            variant={type === "teachers" ? "contained" : "outlined"}
            onClick={() => navigate("/home/teachers")}
          >
            Pessoa Instruturoa
          </Button>
          <Button variant="outlined">Adicionar</Button>
        </Stack>
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
