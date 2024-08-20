"use client";
import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import { lightTheme } from "@/utlis/themeSettings";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";

const WebsiteInquiryLongForm = dynamic(() =>
  import("@/components/UI/Forms/WebsiteInquiryLongForm")
);

export default function GetQuotePage2({ title, description }) {
  return (
    <>
      <Section>
        <ContainerStyled maxWidth="xl" className="row">
          <div className="content-wrapper">
            <Typography variant="h3" component="h1">
              {title}
            </Typography>
            <Typography
              variant="body1"
              component="div"
              sx={{ marginTop: "16px" }}
            >
              {description}
            </Typography>
          </div>
          <Paper className="form-wrapper" variant="outlined">
            <WebsiteInquiryLongForm />
          </Paper>
        </ContainerStyled>
      </Section>
    </>
  );
}
const Section = styled.section`
  background: var(--light-surface-container-low);
  margin-top: 16px;
`;
const ContainerStyled = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  gap: 80px;
  padding-top: 80px;
  padding-bottom: 80px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .content-wrapper {
    @media (min-width: 900px) {
      position: sticky;
      top: 80px;
    }
  }
  .form-wrapper {
    padding: 0 16px;
    border-radius: 16px;
    background: var(--light-surface-container-lowest);
    min-height: 563px;
  }
`;
