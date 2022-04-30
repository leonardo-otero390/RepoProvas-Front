import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SearchInput from "./SearchInput";
import { Box, Typography } from "@mui/material";
import useGlobal from "../hooks/useGlobal";

interface Props {
  type: "disciplines" | "teachers" | "add";
}

const styles = {
  container: { width: "80%", maxWidth: 700, margin: "16px auto" },
  hr: { color: "#C4C4C4" },
  title: { width: "100%", textAlign: "center"},
};

export default function Dashboard({ type }: Props) {
  const { setName } = useGlobal();
  const navigate = useNavigate();
  const placeholder =
    type === "disciplines" ? "Buscar por disciplina" : "Buscar por professores";
  return (
    <>
      <Header />

      {type === "add" ? (
        <Typography variant="h5" sx={styles.title}>Adicionar teste</Typography>
      ) : (
        <SearchInput placeholder={placeholder} setName={setName} />
      )}

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
          <Button
            variant={type === "add" ? "contained" : "outlined"}
            onClick={() => navigate("/add")}
          >
            Adicionar
          </Button>
        </Stack>
      </Box>
    </>
  );
}
