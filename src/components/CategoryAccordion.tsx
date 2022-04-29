import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CategoryWithTestsByDisciplineId as CategoryByD } from "../interfaces/Category";
import { CategoryWithTestsByTeacherId as CategoryByT } from "../interfaces/Category";
import { TestWithTDPartial as Test } from "../interfaces/Test";

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
                {category.tests.map(
                  ({ name, pdfUrl, teachersDisciplines }: Test, i) => (
                    <a href={pdfUrl} key={i}>
                      <Typography>
                        {name} -{" "}
                        {teachersDisciplines.teachers
                          ? teachersDisciplines.teachers.name
                          : null}
                        {teachersDisciplines.disciplines
                          ? teachersDisciplines.disciplines.name
                          : null}
                      </Typography>
                    </a>
                  )
                )}
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
