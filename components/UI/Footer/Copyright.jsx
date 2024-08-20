import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React from "react";

export default function Copyright() {
  return (
    <CopyRight className="row">
      <Typography variant="body2" component="p">
        <span> Luxury Cleaning © 2024. All right reserved | Built By</span>
        <a href="https://luxurycleaning.nz" target="_blank" rel="nofollow">
          &nbsp;Web<strong>DUEL</strong>
        </a>
      </Typography>
    </CopyRight>
  );
}
const CopyRight = styled.div`
  background: var(--dark-surface-container-high);
  padding: 8px 0;
  text-align: center;
  p {
    color: var(--dark-on-surface);
  }
  a {
    color: var(--dark-primary);
    &:hover {
      text-decoration: underline;
    }
    strong {
      color: var(--dark-primary);
      font-weight: 700;
      letter-spacing: 0;
    }
  }
`;
