import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CategoryWithTests } from "../interfaces/CategoriesTypes";

interface Props {
  categories: CategoryWithTests[];
}

export default function CategoryAccordion({ categories }: Props) {
  return (
    <div>
      {categories.map((category, index) => (
        <Accordion disabled={!category.tests.length} key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{category.category.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {category.tests.map((test, index) => (
              <Typography key={index}>
                {test.name} - {test.discipline.name}
              </Typography>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
