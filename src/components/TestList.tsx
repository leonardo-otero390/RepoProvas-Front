import { Box, Typography } from "@mui/material";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { TestWithTDPartial as Test } from "../interfaces/Test";
import * as api from "../services/api";

interface Props {
  tests: Test[];
}

function DisplayTest({ test, token }: { test: Test; token: string }) {
  const { name, pdfUrl, teachersDisciplines, views, id } = test;
  const [counter, setCounter] = useState(views);

  const styles = {
    container: { display: "flex", gap: 16 },
    name: { color: "grey" },
    views: { color: "#3f61d8" },
  };

  return (
    <a
      target="_blank"
      href={pdfUrl}
      onClick={() => {
        setCounter(counter + 1);
        api.incrementViews(id, token);
      }}
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
        <Typography sx={styles.views}>{counter} visualizações</Typography>
      </Box>
    </a>
  );
}

export default function TestList({ tests }: Props) {
  const { token } = useAuth();
  if (!token) return <></>;
  return (
    <>
      {tests.map((test, index) => (
        <DisplayTest key={index} test={test} token={token} />
      ))}
    </>
  );
}
