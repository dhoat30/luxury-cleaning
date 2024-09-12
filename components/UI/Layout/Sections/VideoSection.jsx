import React from "react";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";
import Container from "@mui/material/Container";
import Video from "../../Video/Video";
export default function VideoSection({ videoID, placeholderImage }) {
  return (
    <Section>
      <Container maxWidth="xl">
        <Video videoID={videoID} placeholderImage={placeholderImage} />
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
`;
