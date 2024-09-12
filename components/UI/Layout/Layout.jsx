import React from "react";
import ZigZagCardsSection from "./Sections/ZigZagCardsSection";
import RowSection from "./Sections/RowSection";
import ServicesSection from "./Sections/ServicesSection";
import ProcessSection from "./Sections/ProcessSection";
import Video from "../Video/Video";
import VideoSection from "./Sections/VideoSection";
export default function Layout({ sections }) {
  const sectionsJSX = sections.map((section, index) => {
    if (section.acf_fc_layout === "zigzag_cards") {
      return (
        <ZigZagCardsSection
          key={index}
          title={section.title}
          subtitle={section.subtitle}
          cards={section.cards}
        />
      );
    }
    if (section.acf_fc_layout === "row") {
      return (
        <RowSection
          key={index}
          title={section.title}
          subtitle={section.subtitle}
          description={section.description}
          imageAlignment={section.image_alignment}
          image={section.image}
          ctaGroup={section.cta_group}
        />
      );
    }
    if (section.acf_fc_layout === "services") {
      return (
        <ServicesSection
          key={index}
          title={section.title}
          subtitle={section.subtitle}
          description={section.description}
          cards={section.card}
        />
      );
    }
    if (section.acf_fc_layout === "process") {
      return (
        <ProcessSection
          key={index}
          title={section.title}
          description={section.description}
          cards={section.cards}
        />
      );
    }
    if (section.acf_fc_layout === "video_section") {
      return (
        <VideoSection
          key={index}
          videoID={section.video_id}
          placeholderImage={section.placeholder_image}
        />
      );
    }
  });

  return <div>{sectionsJSX} </div>;
}
