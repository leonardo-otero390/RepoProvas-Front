import { Box, Typography } from "@mui/material";
import useAuth from "../hooks/useAuth";
import { TestWithTDPartial as Test } from "../interfaces/Test";
import * as api from "../services/api";

interface Props {
  tests: Test[];
}

export default function TestList({ tests }: Props) {
  const { token } = useAuth();
  if (!token) return <></>;
  const styles = {
    container: { display: "flex", gap: 16 },
    name: { color: "grey" },
    views: { color: "#3f61d8" },
  };
  return (
    <>
      {tests.map(
        ({ name, pdfUrl, teachersDisciplines, views, id }: Test, i) => (
          <a
            target="_blank"
            href={pdfUrl}
            onClick={() => api.incrementViews(id, token)}
            key={i}
            rel="noreferrer"
          >
            <Box sx={styles.container}>
              <Typography>{name}</Typography>
              <Typography sx={styles.name}>
                {teachersDisciplines.teachers
                  ? teachersDisciplines.teachers.name
                  : null}
                {teachersDisciplines.disciplines
                  ? teachersDisciplines.disciplines.name
                  : null}
              </Typography>
              <Typography sx={styles.views}>{views} visualizações</Typography>
            </Box>
          </a>
        )
      )}
    </>
  );
}
