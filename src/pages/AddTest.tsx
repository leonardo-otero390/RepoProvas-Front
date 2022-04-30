import { Box, TextField } from "@mui/material";
import Dashboard from "../components/Dashboard";

export default function AddTest() {
  return (
    <>
      <Dashboard type="add"/>
      <Box>
        <TextField label="Test Name" />
        <TextField label="PDF da prova" />
      </Box>
    </>
  );
}
