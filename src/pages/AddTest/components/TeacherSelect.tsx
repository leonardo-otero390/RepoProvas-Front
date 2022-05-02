import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { NewTest } from "../../../interfaces/Test";
import { Teacher } from "../../../interfaces/Teacher";

interface apiTeacher {
  teachers: Teacher;
}

interface Props {
  teachers: apiTeacher[];
  disabled: boolean;
  state: {
    values: NewTest;
    setValues: React.Dispatch<React.SetStateAction<NewTest>>;
  };
}

export default function TeacherSelect({ teachers, state, disabled }: Props) {
  const { values, setValues } = state;

  const handleChange = (event: SelectChangeEvent) => {
    setValues({ ...values, teacherId: Number(event.target.value) });
  };
  return (
    <Box sx={{ minWidth: 300 }}>
      <FormControl fullWidth>
        <InputLabel>Pessoa instrutora</InputLabel>
        <Select
          value={values.teacherId ? values.teacherId.toString() : ""}
          label="Pessoa instrutora"
          onChange={handleChange}
          disabled={disabled || !teachers.length}
        >
          {teachers.map((teacher, i) => (
            <MenuItem key={i} value={teacher.teachers.id}>
              {teacher.teachers.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
