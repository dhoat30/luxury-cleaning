"use client";
import React from "react";
import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
export default function HtmlPageTemplate({ pageData }) {
  return (
    <Paper elevation={1}>
      <ContainerStyled maxWidth="xl">
        <Box className="title">
          <Typography variant="h2" component="h1">
            {pageData.title.rendered}
          </Typography>
        </Box>
        <Box className="content">
          <Typography
            variant="body1"
            component="div"
            dangerouslySetInnerHTML={{ __html: pageData.content.rendered }}
          ></Typography>
        </Box>
      </ContainerStyled>
    </Paper>
  );
}
const ContainerStyled = styled(Container)`
  padding-top: 120px;
  padding-bottom: 40px;
  .title {
    h1 {
      font-family: var(--font-work-sans), Segoe UI, sans-serif;
    }
  }
  .content {
    strong {
    }

    h2 {
      font-size: 2rem;
      margin-bottom: 8px;
      margin-top: 40px;
    }
    h3 {
      font-size: 1.5rem;
      margin-top: 24px;
    }
    p {
      margin: 8px 0 8px 0;
      font-weight: 350;
      color: var(--light-on-surface-variant);
      font-size: 1rem;
      line-height: 1.5;
    }
    ul {
      list-style: disc !important;
      margin-left: 16px;
    }
  }
`;
