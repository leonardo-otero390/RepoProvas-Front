import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as api from "../../../services/api";
import * as teacherService from "../../../services/teacherService";
import CategoryAccordion from "./CategoryAccordion";
import { Teacher } from "../../../interfaces/Teacher";
import { CategoryWithTestsByTeacherId as Category } from "../../../interfaces/Category";
import useAuth from "../../../hooks/useAuth";
import useGlobal from "../../../hooks/useGlobal";

export default function TeacherAccordion() {
  const { token } = useAuth();
  const { name } = useGlobal();
  const [teachers, setTeachers] = React.useState<Teacher[]>([]);
  const [selectedTeacherId, setSelectedTeacherId] = React.useState<
    number | false
  >(false);
  const [categories, setCategories] = React.useState<Category[]>([]);
  React.useEffect(() => {
    if (!token) return;
    if (name) {
      teacherService
        .getByName({ name, token })
        .then((res) => setTeachers(res.data));
    } else {
      teacherService.get(token).then((res) => setTeachers(res.data));
    }
  }, [name, token]);

  const handleChange =
    (id: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      if (!token) return;
      if (isExpanded) {
        api.getTestsByTeacherId(id, token).then((response) => {
          setCategories(response.data);
        });
        setSelectedTeacherId(id);
      } else {
        setSelectedTeacherId(false);
      }
    };

  return (
    <div>
      {teachers.map(({ name, id }, index) => (
        <Accordion
          expanded={selectedTeacherId === id}
          onChange={handleChange(id)}
          key={index}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CategoryAccordion categories={categories} />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
