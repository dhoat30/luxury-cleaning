"use client";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import Script from "next/script";
import TechLogos from "@/components/UI/TechLogos/TechLogos";

export default function BookConsultation({}) {
  const [key, setKey] = useState(Date.now);
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <ContainerStyled maxWidth="xl" className="row">
        <Box>
          <Typography variant="h2" component="h1">
            Book an Appointment
          </Typography>
          <Typography
            variant="h6"
            component="h2"
            sx={{ marginTop: "16px" }}
            className="description"
          >
            Ready to experience the luxury of a pristine, meticulously cleaned
            home? Booking an appointment with us is simple and hassle-free.
            Whether you need a one-time deep clean or regular maintenance, our
            team is here to provide the high-quality service you deserve.
          </Typography>
        </Box>
        <div className="hubspot-wrapper ">
          <div
            className="meetings-iframe-container"
            data-src="https://meetings.hubspot.com/hardeep-kaur-dhoat?embed=true"
          ></div>
        </div>
        <Script
          type="text/javascript"
          src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
        />
      </ContainerStyled>
    </>
  );
}

const ContainerStyled = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 24px;
    padding-top: 80px;
    padding-bottom: 40px;
  }
  gap: 80px;
  padding-top: 120px;
  padding-bottom: 40px;
  .description {
    font-weight: 350;
  }
  .contact-form-wrapper {
    padding: 0 16px;
  }
  .hubspot-wrapper {
    min-height: 690px;
  }
`;
