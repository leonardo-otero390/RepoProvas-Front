import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CategoryWithTestsByDisciplineId as CategoryByD } from "../interfaces/Category";
import { CategoryWithTestsByTeacherId as CategoryByT } from "../interfaces/Category";
import TestList from "./TestList";

interface Props {
  categories: CategoryByD[] | CategoryByT[];
}

export default function CategoryAccordion({ categories }: Props) {
  return (
    <>
      {categories.map((category, index) => (
        <div key={index}>
          {category.tests.length ? (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{category.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TestList tests={category.tests} />
              </AccordionDetails>
            </Accordion>
          ) : (
            <></>
          )}
        </div>
      ))}
    </>
  );
}
