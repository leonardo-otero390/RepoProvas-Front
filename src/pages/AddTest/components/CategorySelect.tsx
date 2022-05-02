import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { NewTest } from "../../../interfaces/Test";
import { Category } from "../../../interfaces/Category";

interface Props {
  categories: Category[];
  state: {
    values: NewTest;
    setValues: React.Dispatch<React.SetStateAction<NewTest>>;
  };
}

export default function CategorySelect({ categories, state }: Props) {
  const { values, setValues } = state;

  const handleChange = (event: SelectChangeEvent) => {
    setValues({ ...values, categoryId: Number(event.target.value) });
  };

  return (
    <Box sx={{ minWidth: 300 }}>
      <FormControl fullWidth>
        <InputLabel>Categoria</InputLabel>
        <Select
          value={values.categoryId ? values.categoryId.toString() : ""}
          label="Categoria"
          onChange={handleChange}
        >
          {categories.map((category, i) => (
            <MenuItem key={i} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
