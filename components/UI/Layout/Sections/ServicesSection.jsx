import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import CenterAlignHeadings from "../../Headings/CenterAlignHeadings";
import Image from "next/image";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function ServicesSection({ title, subtitle, cards }) {
  if (!cards) return null;

  const cardsJSX = cards.map((card, index) => {
    const imgPadding = (card.image.height / card.image.width) * 100;
    const contentAlignment = card.imageAlignment === "left" ? "2 / 3" : "1 / 2";

    return (
      <div key={index} className="card">
        <Container maxWidth="xl" className="container">
          <div
            className="image-wrapper"
            style={{ paddingBottom: `${imgPadding}%` }}
          >
            <Image
              src={card.image.url}
              alt={card.image.alt}
              fill
              quality={100}
              sizes="(max-width: 1100px) 100vw, 50vw"
            />
          </div>
          <div className="content-wrapper">
            <Typography variant="h6" component="div" className="subtitle">
              {card?.subtitle}
            </Typography>
            <Typography variant="h4" component="h3" className="title">
              {card?.title}
            </Typography>

            {/* set html dangerously  */}
            <div
              className="description body1"
              dangerouslySetInnerHTML={{ __html: card?.description }}
            />
            {card.cta_group.cta && (
              <Link href={card.cta_group.cta.url} className="cta">
                <Button variant={card.cta_group.cta_type} color="primary">
                  {card.cta_group.cta.title}
                </Button>
              </Link>
            )}
          </div>
        </Container>
      </div>
    );
  });
  return (
    <Section id="our-services">
      <Container maxWidth="xl" className="container">
        <CenterAlignHeadings title={title} subtitle={subtitle} />
      </Container>
      <div className="cards-wrapper">{cardsJSX}</div>
    </Section>
  );
}
const Section = styled.section`
  padding: 80px 0 16px 0;
  @media (max-width: 600px) {
    padding: 40px 0 16px 0;
  }
  .container {
  }
  .cards-wrapper {
    margin-top: 40px;
    @media (max-width: 1000px) {
      margin-top: 24px;
    }
    .card {
      background: var(--light-surface-container-low);
      margin-bottom: 16px;
      padding: 80px 0;
      @media (max-width: 1000px) {
        padding: 24px 0;
      }
      .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 40px;
        align-items: start;

        @media (max-width: 1100px) {
          grid-template-columns: 1fr;
          gap: 16px;
        }
        display: grid;
        align-items: center;
      }

      .image-wrapper {
      }
      .content-wrapper {
        padding: 0;
        @media (min-width: 1000px) {
          padding: 32px;
        }
        .subtitle {
          margin: 0 0 8px 0;
        }
        .cta {
          margin-top: 16px;
          display: inline-block;
        }
      }
    }
  }
`;
