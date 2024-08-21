"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React from "react";
import styled from "@emotion/styled";
import TechLogos from "@/components/UI/TechLogos/TechLogos";

import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("@/components/UI/Forms/ContactForm"));
export default function Contact({ pageData, techLogos }) {
  return (
    <>
      <ContainerStyled maxWidth="xl" className="row">
        <Box>
          <Typography variant="h2" component="h1">
            {pageData?.acf?.hero_section.title}
          </Typography>
          <Typography
            variant="h6"
            component="h2"
            sx={{ marginTop: "16px" }}
            className="description"
          >
            {pageData?.acf?.hero_section.description}
          </Typography>
        </Box>
        <Paper className="contact-form-wrapper" variant="outlined">
          <ContactForm />
        </Paper>
      </ContainerStyled>
    </>
  );
}
const ContainerStyled = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  padding-top: 120px;
  padding-bottom: 40px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding-top: 80px;
  }
  @media (max-width: 600px) {
    padding-top: 40px;
  }

  .description {
    font-weight: 350;
  }
  .contact-form-wrapper {
    background: var(--light-surface-container-lowest);
    padding: 0 16px;
    border-radius: 16px;

    min-height: 360px;
  }
`;
