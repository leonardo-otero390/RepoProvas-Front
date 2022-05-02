import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { NewTest } from "../../../interfaces/Test";
import { Discipline } from "../../../interfaces/Disicpline";

interface Props {
  disciplines: Discipline[];
  disabled: boolean;
  state: {
    values: NewTest;
    setValues: React.Dispatch<React.SetStateAction<NewTest>>;
  };
}

export default function DisciplineSelect({
  disciplines,
  state,
  disabled,
}: Props) {
  const { values, setValues } = state;

  const handleChange = (event: SelectChangeEvent) => {
    setValues({
      ...values,
      disciplineId: Number(event.target.value),
      teacherId: 0,
    });
  };

  return (
    <Box sx={{ minWidth: 300 }}>
      <FormControl fullWidth>
        <InputLabel>Disciplina</InputLabel>
        <Select
          value={values.disciplineId ? values.disciplineId.toString() : ""}
          label="Disciplina"
          onChange={handleChange}
          disabled={disabled || !disciplines.length}
        >
          {disciplines.map((discipline, i) => (
            <MenuItem key={i} value={discipline.id}>
              {discipline.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
