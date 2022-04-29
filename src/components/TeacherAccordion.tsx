import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as api from "../services/api";
import CategoryAccordion from "./CategoryAccordion";

interface Props {
  token: string;
}

export default function TeacherAccordion({ token }: Props) {
  const [teachers, setTeachers] = React.useState<any>([]);
  // React.useEffect(() => {
  //   api.getTestsByTeacher(token).then((response) => {
  //     setTeachers(response.data);
  //   });
  // }, [teachers, token]);
  return (
    <div>
      {teachers.map((teacher: { teacher: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }; categories: any[]; }, index: React.Key | null | undefined) => (
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
