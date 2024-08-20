"use client";
import React from "react";

import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Image from "next/image";
import Link from "next/link";

export default function HeroContent({
  title,
  subtitle,
  description,
  ctaLabel,
  ctaLink,
  className,
}) {
  return (
    <Div className={className}>
      <div className="content-wrapper">
        <Typography
          className="subtitle"
          component="h2"
          variant="h4"
          color="secondary.main"
        >
          {subtitle}
        </Typography>
        <Typography component="h1" variant="h2" color="white" className="title">
          {title}
        </Typography>
        <Typography component="p" variant="h5" color="white">
          {description}
        </Typography>
        {ctaLink && (
          <div className="button-wrapper">
            <Link href={ctaLink}>
              <Button variant="contained" size="large">
                {ctaLabel}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </Div>
  );
}

const Div = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  text-align: center;
  width: 676px;
  height: 600px;
  border-radius: 338px 338px 0px 0px;
  border: 1px solid var(--Schemes-Inverse-Primary, #f6bc70);
  background: rgba(23, 14, 0, 0.2);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  @media (max-width: 676px) {
    width: 95%;
    padding: 16px;
  }
  @media (max-width: 500px) {
    width: 95%;
    height: 400px;
  }
  .content-wrapper {
    margin-top: 40px;
  }
  .subtitle {
    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  }
  .title {
    margin: 8px 0;
  }
  .button-wrapper {
    margin-top: 16px;
  }
`;
