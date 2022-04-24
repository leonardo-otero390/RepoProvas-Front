import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Discipline } from "../interfaces/TermsTypes";
import TestAccordion from "./TestAccordion";

interface Props {
  disciplines: Discipline[];
}

export default function DisciplineAccordion({ disciplines }: Props) {
  return (
    <div>
      {disciplines.map((discipline) => (
        <Accordion disabled={!discipline.tests.length}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{discipline.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TestAccordion tests={discipline.tests} />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
