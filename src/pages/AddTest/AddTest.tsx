import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Dashboard from "../../components/Dashboard";
import { NewTest } from "../../interfaces/Test";
import CategorySelect from "./components/CategorySelect";
import * as api from "../../services/api";
import * as disciplineService from "../../services/disciplineService";
import * as teacherService from "../../services/teacherService";
import useAuth from "../../hooks/useAuth";
import DisciplineSelect from "./components/DisciplineSelect";
import TeacherSelect from "./components/TeacherSelect";
import validateUrl from "../../services/validateUrl";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
  },
  input: {
    width: 300,
  },
  button: {
    width: 300,
  },
};

export default function AddTest() {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState<NewTest>({
    name: "",
    pdfUrl: "",
    categoryId: 0,
    teacherId: 0,
    disciplineId: 0,
  });
  const [lists, setLists] = useState({
    categories: [],
    disciplines: [],
    teachers: [],
  });
  const state = { values, setValues };
  const { token } = useAuth();
  useEffect(() => {
    if (!token) return;
    api
      .getCategories(token)
      .then((res) => setLists({ ...lists, categories: res.data }));
    if (values.categoryId) {
      disciplineService
        .get(token)
        .then((res) => setLists({ ...lists, disciplines: res.data }));
    }
    if (values.disciplineId) {
      teacherService
        .getByDisciplineId(values.disciplineId, token)
        .then((res) => setLists({ ...lists, teachers: res.data }));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, values.categoryId, values.disciplineId]);

  const handleChange =
    (prop: "name" | "pdfUrl") =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleSubmit = () => {
    if (!token) return;
    if (!validateUrl(values.pdfUrl)) return alert("URL inválida");
    if (!values.name || !values.teacherId) {
      return alert("Preencha todos os campos");
    }
    setLoading(true);
    api
      .postTest(values, token)
      .then(() => alert("Test criado com sucesso!"))
      .catch(() => alert("Erro ao criar teste"))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Dashboard type="add" />
      <Box sx={styles.container}>
        <TextField
          label="Nome da prova ex. (2022.1)"
          onChange={handleChange("name")}
          sx={styles.input}
        />
        <TextField
          label="PDF da prova"
          onChange={handleChange("pdfUrl")}
          sx={styles.input}
        />
        <CategorySelect categories={lists.categories} state={state} />
        <DisciplineSelect
          disabled={!values.categoryId}
          disciplines={lists.disciplines}
          state={state}
        />
        <TeacherSelect
          disabled={!values.disciplineId}
          teachers={lists.teachers}
          state={state}
        />
        <Button
          disabled={loading}
          variant="contained"
          sx={styles.button}
          onClick={handleSubmit}
        >
          {loading ? "Carregando" : "Enviar"}
        </Button>
      </Box>
    </>
  );
}
