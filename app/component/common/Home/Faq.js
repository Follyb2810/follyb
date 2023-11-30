import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import * as React from "react";
import WrapperTemplate from "../../shared/WrapperTemplate";
import { data } from "../data";

export default function Faq() {
  const { faqData } = data[6];
  return (
    <WrapperTemplate head={faqData[0].head}>
      {faqData[0].faqDetails.map((data, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{data.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{data.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </WrapperTemplate>
  );
}
