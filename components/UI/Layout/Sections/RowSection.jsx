import React from "react";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";
import Container from "@mui/material/Container";
export default function RowSection({
  title,
  subtitle,
  description,
  imageAlignment,
  image,
  ctaGroup,
}) {
  console.log(ctaGroup);
  const imgPadding = (image.height / image.width) * 100;
  const contentAlignment = imageAlignment === "left" ? "2 / 3" : "1 / 2";
  return (
    <Section>
      <Container maxWidth="xl">
        <div className="wrapper">
          <div
            className="content-wrapper"
            style={{ gridColumn: contentAlignment }}
          >
            <Typography variant="h6" component="div" className="subtitle">
              {subtitle}
            </Typography>
            <Typography variant="h3" component="h2" className="title">
              {title}
            </Typography>

            <div
              className="description body1"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            {ctaGroup.cta && (
              <Link href={ctaGroup.cta.url} className="cta">
                <Button variant={ctaGroup.cta_type} color="primary">
                  {ctaGroup.cta.title}
                </Button>
              </Link>
            )}
          </div>

          {/* image wrapper */}
          <div
            className="image-wrapper"
            style={{ paddingBottom: `${imgPadding}%` }}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              sizes="(max-width: 1100px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  background: var(--light-surface-container-low);
  padding: 80px 0;
  @media (max-width: 600px) {
    padding: 40px 0;
  }
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 40px;
    align-items: start;
    @media (max-width: 1100px) {
      grid-template-columns: 1fr;
      gap: 16px;
    }
    .content-wrapper {
      @media (min-width: 1100px) {
        position: sticky;
        top: 100px;
        grid-row: 1 / 2;
      }

      .subtitle {
        margin: 0 0 8px 0;
      }
      .cta {
        margin-top: 16px;
        display: inline-block;
      }
    }
    .image-wrapper {
      @media (min-width: 1100px) {
        grid-row: 1 / 2;
      }
    }
  }
`;
