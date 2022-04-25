import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DisciplineAccordion from "./DisciplineAccordion";
import * as api from "../services/api";
import { Terms } from "../interfaces/TermsTypes";

interface Props {
  token: string;
}

export default function TermAccordion({ token }: Props) {
  const [terms, setTerms] = React.useState<Terms>([]);
  React.useEffect(() => {
    api.getTestsByDiscipline(token).then((response) => {
      setTerms(response.data);
    });
  }, [token]);

  return (
    <div>
      {terms.map((term, index) => (
        <Accordion disabled={!term.disciplines.length} key={index}>
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
