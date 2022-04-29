import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CategoryAccordion from "./CategoryAccordion";
import { Discipline } from "../interfaces/Disicpline";
import { CategoryWithTestsByDisciplineId as Category } from "../interfaces/Category";
import * as api from "../services/api";

interface Props {
  disciplines: Discipline[];
  token: string;
}

export default function DisciplineAccordion({ disciplines, token }: Props) {
  const [selectedDisciplineId, setSelectedDisciplineId] = React.useState<
    number | false
  >(false);
  const [categories, setCategories] = React.useState<Category[]>([]);

  const handleChange =
    (id: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      if (isExpanded) {
        api.getTestsByDisciplineId(id, token).then((response) => {
          setCategories(response.data);
        });
        setSelectedDisciplineId(id);
      } else {
        setSelectedDisciplineId(false);
      }
    };

  return (
    <div>
      {disciplines.map(({ id, name }, index) => (
        <Accordion
          expanded={selectedDisciplineId === id}
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
