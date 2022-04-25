import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as api from "../services/api";
import { TeachersWithCategories } from "../interfaces/TeachersTypes";
import CategoryAccordion from "./CategoryAccordion";

interface Props {
  token: string;
}

export default function TeacherAccordion({ token }: Props) {
  const [teachers, setTeachers] = React.useState<TeachersWithCategories>([]);
  React.useEffect(() => {
    api.getTestsByTeacher(token).then((response) => {
      setTeachers(response.data);
    });
  }, [teachers, token]);
  return (
    <div>
      {teachers.map((teacher, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{teacher.teacher.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CategoryAccordion categories={teacher.categories} />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
