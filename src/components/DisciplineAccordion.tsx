import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CategoryAccordion from "./CategoryAccordion";
import { Discipline } from "../interfaces/Disicpline";
import { CategoryWithTestsByDisciplineId as Category } from "../interfaces/Category";
import * as api from "../services/api";
import useAuth from "../hooks/useAuth";
import { useState, SyntheticEvent } from "react";

interface Props {
  disciplines: Discipline[];
}

export default function DisciplineAccordion({ disciplines }: Props) {
  const [selectedDisciplineId, setSelectedDisciplineId] = useState<
    number | false
  >(false);
  const [categories, setCategories] = useState<Category[]>([]);

  const { token } = useAuth();
  if (!token) return <></>;

  const handleChange =
    (id: number) => (event: SyntheticEvent, isExpanded: boolean) => {
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
