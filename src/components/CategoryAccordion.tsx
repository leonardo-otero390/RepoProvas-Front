import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CategoryWithTestsByDisciplineId as Category } from "../interfaces/Category";

interface Props {
  categories: Category[];
}

export default function CategoryAccordion({ categories }: Props) {
  return (
    <div>
      {categories.map((category, index) => (
        <>
          {category.tests.length ? (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{category.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {category.tests.map((test, index) => (
                  <a href={test.pdfUrl} key={index}>
                    <Typography>
                      {test.name} - {test.teachersDisciplines.teachers.name}
                    </Typography>
                  </a>
                ))}
              </AccordionDetails>
            </Accordion>
          ) : (
            <></>
          )}
        </>
      ))}
    </div>
  );
}
