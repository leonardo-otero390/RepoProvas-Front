import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Terms } from "../interfaces/TermsTypes";
import DisciplineAccordion from "./DisciplineAccordion";

interface Props {
  terms: Terms;
}

export default function TermAccordion({ terms }: Props) {
  return (
    <div>
      {terms.map((term) => (
        <Accordion disabled={!term.disciplines.length}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{term.number} Período</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DisciplineAccordion disciplines={term.disciplines} />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
