import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
var settings = {
  dots: true,
  arrows: false,
  infinite: false,
  slidesToShow: 3,
  autoplay: false,
  padding: "40px",
  cssEase: "ease-in-out",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "40px",
      },
    },
  ],
};
export default function ProcessSection({ title, description, cards }) {
  if (!cards) return null;

  const cardsJSX = cards.map((card, index) => {
    return (
      <div key={index} className="card">
        <div className="content-wrapper">
          <Typography variant="h1" component="div" className="step-count">
            0{index + 1}
          </Typography>
          <Typography variant="h6" component="h3" className="title">
            {card?.title}
          </Typography>

          {/* set html dangerously  */}
          <div
            className="description body1"
            dangerouslySetInnerHTML={{ __html: card?.description }}
          />
        </div>
      </div>
    );
  });
  return (
    <Section>
      <Container maxWidth="xl" className="container">
        <Typography variant="h3" component="h2" className="title">
          {title}
        </Typography>
        <div className="cards-wrapper">
          <Slider {...settings}>{cardsJSX}</Slider>
        </div>
      </Container>
    </Section>
  );
}
const Section = styled.section`
  padding: 24px 0;
  overflow: hidden !important;
  .cards-wrapper {
    margin-top: 16px;
    @media (max-width: 1000px) {
      margin-top: 24px;
    }
    .slick-slider {
      margin-inline: -16px; //  space between slides * (-1)
    }

    .slick-slide {
      > div {
        // automatically generated 'div' by 'react-slick'
        margin-inline: 8px; //  space between slides / 2
      }
    }

    .card {
      background: var(--light-secondary-container);
      border: 1px solid var(--light-outline-variant);
      .content-wrapper {
        padding: 16px;
        @media (min-width: 1000px) {
          padding: 24px;
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
