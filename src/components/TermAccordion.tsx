import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DisciplineAccordion from "./DisciplineAccordion";
import * as api from "../services/api";
import { Term } from "../interfaces/Terms";
import { Discipline } from "../interfaces/Disicpline";
import useAuth from "../hooks/useAuth";
import { useState, useEffect, SyntheticEvent } from "react";

export default function TermAccordion() {
  const { token } = useAuth();

  const [terms, setTerms] = useState<Term[]>([]);
  const [selectedTermId, setSelectedTermId] = useState<number | false>(false);
  const [disciplines, setDisciplines] = useState<Discipline[]>([]);

  useEffect(() => {
    if (!token) return;
    api.getTerms(token).then((response) => {
      setTerms(response.data);
    });
  }, [token]);

  const handleChange =
    (id: number) => (event: SyntheticEvent, isExpanded: boolean) => {
      if (!token) return;
      if (isExpanded) {
        api.getDisciplinesByTermId(id, token).then((response) => {
          setDisciplines(response.data);
        });
        setSelectedTermId(id);
      } else {
        setSelectedTermId(false);
      }
    };

  return (
    <div>
      {terms.map(({ id, number }, index) => (
        <Accordion
          expanded={selectedTermId === id}
          onChange={handleChange(id)}
          key={index}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{number} Período</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {disciplines.length ? (
              <DisciplineAccordion disciplines={disciplines} />
            ) : (
              <Typography>Não há disciplinas para exibir</Typography>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
