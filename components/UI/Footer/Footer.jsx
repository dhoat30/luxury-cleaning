"use client";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React, { use } from "react";
import Image from "next/image";
import NewsletterForm from "../Forms/NewsletterForm";
import { footerLinks, footerPolicies } from "./FooterLinks";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHub from "@mui/icons-material/GitHub";
import YouTube from "@mui/icons-material/YouTube";
import Copyright from "./Copyright";
import ContactInfo from "./ContactInfo";
import GetQuotePage from "@/components/Pages/GetQuotePage/GetQuotePage";
import Contact from "@/components/Pages/Contact/Contact";
import GetQuotePage2 from "@/components/Pages/GetQuotePage2/GetQuotePage";
export default function Footer({ showCTA = true }) {
  return (
    <>
      {showCTA && (
        <GetQuotePage2
          title="Get a Custom Cleaning Quote"
          description="Tell us a bit about your home and cleaning needs, and we'll provide you with a tailored quote. Our team of experts will create a bespoke cleaning plan designed to meet your exact preferences, ensuring your space is always immaculate. Simply fill out the form below, and we'll get back to you promptly with a personalised quote that reflects the luxury and quality you deserve."
        />
      )}

      <FooterContainer variant="outlined">
        <ContainerStyled maxWidth="xl" className="row">
          {/* logo wrapper */}
          <Box className="footer-wrapper">
            <Box className="logo-wrapper">
              <Link href="/">
                <Image
                  src="/logo.png"
                  width={48 * 3}
                  height={13 * 3}
                  quality={70}
                  alt="Logo"
                />
              </Link>
              <Typography
                variant="body1"
                component="p"
                sx={{ marginTop: "16px" }}
              >
                Luxury Cleaning offers premium cleaning services tailored for
                homeowners, busy professionals, and luxury rental hosts in
                Tauranga.
              </Typography>
              <div className="newsletter-wrapper" style={{ marginTop: "24px" }}>
                <NewsletterForm
                  className="newsletter-form"
                  formName="Newsletter Form"
                  formType="newsletter-form"
                  emailRoute={"/api/newsletter-hubspot"}
                  emailTo={process.env.emailTo}
                  btnLabel="Subscribe to newsletter"
                />
              </div>
            </Box>
            <div className="footer-useful-links links-container">
              <Typography
                variant="h6"
                component="div"
                color="white"
                sx={{ marginBottom: "8px" }}
              >
                Useful Links
              </Typography>
              <Box component="ul" sx={{ margin: 0, padding: 0 }}>
                {footerLinks.map((link, index) => {
                  return (
                    <li key={index}>
                      <Link href={link.url}>
                        <Typography
                          variant="body1"
                          component="span"
                          sx={{ padding: "6px 0", display: "block" }}
                        >
                          {link.label}
                        </Typography>
                      </Link>
                    </li>
                  );
                })}
              </Box>
            </div>
            <div className="footer-useful-links links-container">
              <Typography
                variant="h6"
                component="div"
                color="white"
                sx={{ marginBottom: "8px" }}
              >
                Legal
              </Typography>
              <Box component="ul" sx={{ margin: 0, padding: 0 }}>
                {footerPolicies.map((link, index) => {
                  return (
                    <li key={index}>
                      <Link href={link.url}>
                        <Typography
                          variant="body1"
                          component="span"
                          sx={{ padding: "6px 0", display: "block" }}
                        >
                          {link.label}
                        </Typography>
                      </Link>
                    </li>
                  );
                })}
              </Box>
            </div>
            <Box className="contact-wrapper">
              <div className="contact-section">
                <Typography
                  variant="h6"
                  component="div"
                  color="white"
                  sx={{ marginBottom: "8px" }}
                >
                  Contact
                </Typography>
                <ContactInfo />
              </div>
              {/* 
              <div className="social-wrapper">
                <Typography
                  variant="h6"
                  component="div"
                  color="white"
                  sx={{ marginBottom: "8px" }}
                >
                  Follow Us
                </Typography>
                <Box className="social-links">
                  <Link
                    aria-label="Facebook Link"
                    href="https://www.facebook.com/Luxury Cleaning"
                    target="_blank"
                  >
                    <FacebookIcon sx={{ fontSize: 32, color: "#959DA5" }} />
                  </Link>
                  <Link href="https://www.facebook.com/Luxury Cleaning">
                  <Instagram sx={{ fontSize: 32, color: "#959DA5" }} />
                  </Link>
                  <Link
                    aria-label="Youtube Link Link"
                    href="https://www.youtube.com/@Luxury Cleaning"
                    target="_blank"
                  >
                    <YouTube sx={{ fontSize: 32, color: "#959DA5" }} />
                  </Link>
                  <Link
                    aria-label="Github Link"
                    href="https://github.com/dhoat30"
                    target="_blank"
                  >
                    <GitHub sx={{ fontSize: 32, color: "#959DA5" }} />
                  </Link>
                </Box>
              </div> */}
            </Box>
          </Box>
        </ContainerStyled>
      </FooterContainer>
      {/* copyright container */}
      <Copyright />
    </>
  );
}
const FooterContainer = styled.div`
  background: var(--dark-surface-container);
  padding: 40px 0;
  @media (max-width: 900px) {
    padding: 32px 0;
  }
`;
const ContainerStyled = styled(Container)`
  a {
    color: var(--dark-on-surface);

    span {
      color: var(--dark-on-surface-variant);
    }
  }
  .footer-wrapper {
    display: grid;
    gap: 40px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    @media (max-width: 900px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
    .logo-wrapper {
      max-width: 300px;
      p {
        color: var(--dark-on-surface);
      }
    }
    .links-container {
      a {
      }
    }
  }
  .footer-useful-links {
    a {
      &:hover {
        span {
          color: var(--dark-secondary);
        }
      }
    }
  }
  .contact-wrapper {
    .social-wrapper {
      margin-top: 24px;
      .social-links {
        a {
          margin: 0 8px 0 0;
          &:hover {
            svg {
              path {
                fill: var(--dark-secondary);
              }
            }
          }
        }
      }
    }
  }
`;
