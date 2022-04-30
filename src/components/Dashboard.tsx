import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SearchInput from "./SearchInput";
import { Box } from "@mui/material";
import useGlobal from "../hooks/useGlobal";

interface Props {
  type: "disciplines" | "teachers";
}

const styles = {
  container: { width: "80%", maxWidth: 700, margin: "16px auto" },
  hr: { color: "#C4C4C4" },
};

export default function Dashboard({ type }: Props) {
  const { setName } = useGlobal();
  if (type !== "disciplines" && type !== "teachers") type = "disciplines";
  const navigate = useNavigate();
  const placeholder =
    type === "disciplines" ? "Buscar por disciplina" : "Buscar por professores";
  return (
    <>
      <Header />
      <SearchInput placeholder={placeholder} setName={setName} />
      <hr style={styles.hr} />
      <Box sx={styles.container}>
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
            Pessoa Instrutora
          </Button>
          <Button variant="outlined">Adicionar</Button>
        </Stack>
      </Box>
    </>
  );
}
