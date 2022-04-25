import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Test } from "../interfaces/TermsTypes";

interface Props {
  tests: Test[];
}

export default function TestWithCategoryAccordion({ tests }: Props) {
  return (
    <div>
      {tests.map((test, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{test.category.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {test.name} - {test.teacher.name}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
