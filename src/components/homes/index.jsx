import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import SliderArea from "./slider-area";
import AboutArea from "./about-area";
import ServiceArea from "./service-area";
import TeamArea from "./team-area";
import FeaturesLevel from "./features-level";
import Footer from "@/src/layout/footers/footer";
import TestimonialArea from "./testimonial-area";
import VideoArea from "./video-area";
import FactArea from "./fact-area";
import ProjectArea from "./project-area";
import PricingArea from "./pricing-area";
// import BrandArea from "./brand-area";

const HomeTwo = () => {
  return (
    <>
      <HeaderTwo />
      <SliderArea />
      <AboutArea />
      <ServiceArea />
      <ProjectArea />
      <FeaturesLevel />
      <TeamArea />
      <FactArea />

      <TestimonialArea />
      <VideoArea />
      <PricingArea />
      {/* <BrandArea /> */}
      {/* <Footer style_2={true} /> */}
      <Footer />
    </>
  );
};

export default HomeTwo;
