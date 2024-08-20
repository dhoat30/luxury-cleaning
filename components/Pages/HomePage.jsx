"use client";
import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import RowCard from "../UI/Card/RowCard";
import RowCardTabs from "../UI/Card/RowCardTabs";
import TechLogos from "../UI/TechLogos/TechLogos";
import FooterCta from "../UI/CTA/FooterCta";
import Layout from "../UI/Layout/Layout";
export default function HomePage({ data, techLogos }) {
  console.log(data[0].acf.sections);
  if (!data.length) return null;

  const sections = data[0].acf?.sections;
  return <>{sections && <Layout sections={sections} />}</>;
}
const UspContainer = styled(Box)`
  padding-bottom: 80px;
  background: var(--dark-surface-container-lowest);
  .cards-wrapper {
    display: grid;
    gap: 32px;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 1020px) {
      grid-template-columns: repeat(1, 1fr);
      padding: 8px !important;
    }
  }
`;
