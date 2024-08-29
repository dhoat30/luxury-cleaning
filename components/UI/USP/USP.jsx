"use client";
import React from "react";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Container } from "@mui/material";

export default function USP({ data, showTitle = false, marginTop = 0 }) {
  const { section_title, description, cards } = data;
  const marginTopCalc = marginTop ? "70px" : "0";
  if (!cards.length) return null;
  return (
    <Section style={{ marginTop: marginTopCalc }}>
      <Container maxWidth="xl">
        {showTitle && (
          <div className="title-wrapper">
            <Typography variant="h5" component="h2" className="title">
              {section_title}
            </Typography>
            <Typography variant="body1" component="p" className="description">
              {description}
            </Typography>
          </div>
        )}
        <div className="cards-wrapper">
          {cards.map((card, index) => (
            <div key={index} className="card">
              <Image
                src={card.icon.url}
                alt={card.icon.alt}
                width="80"
                height="80"
                className="image"
              />
              <div className="content">
                <Typography variant="h6" component="h3" className="title">
                  {card.title}
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  className="description"
                >
                  {card.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
const Section = styled.section`
  background: var(--light-surface-container);
  padding: 16px 0;
  .title {
    color: var(--light-on-surface);
  }
  .description {
    color: var(--light-on-surface-variant);
  }
  .cards-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
    @media (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
    .card {
      /* display: flex; */
      /* align-items: center; */
      gap: 16px;
      border: 1px solid var(--light-outline-variant);
      background: var(--light-surface-container-low);
      padding: 16px;
      .title {
        margin: 8px 0 0 0;
      }
      .image {
      }
    }
  }
`;
