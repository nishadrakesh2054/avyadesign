// import HeaderTwo from "@/src/layout/headers/header-2";
// import React from "react";
// import SliderArea from "./slider-area";
// import AboutArea from "./about-area";
// import ServiceArea from "./service-area";
// import TeamArea from "./team-area";
// import FeaturesLevel from "./features-level";
// import Footer from "@/src/layout/footers/footer";
// import TestimonialArea from "./testimonial-area";
// import VideoArea from "./video-area";
// import FactArea from "./fact-area";
// import ProjectArea from "./project-area";
// import PricingArea from "./pricing-area";
// import BrandArea from "./brand-area";

import React from "react";
import dynamic from "next/dynamic";

// Always loaded (lightweight)
import HeaderTwo from "@/src/layout/headers/header-2";
import Footer from "@/src/layout/footers/footer";

// Lazy loaded (heavy or optional)
const SliderArea = dynamic(() => import("./slider-area"), { ssr: false });
const AboutArea = dynamic(() => import("./about-area"), { ssr: false });
const ServiceArea = dynamic(() => import("./service-area"), { ssr: false });
const ProjectArea = dynamic(() => import("./project-area"), { ssr: false });
const FeaturesLevel = dynamic(() => import("./features-level"), { ssr: false });
const TeamArea = dynamic(() => import("./team-area"), { ssr: false });
const FactArea = dynamic(() => import("./fact-area"), { ssr: false });
const TestimonialArea = dynamic(() => import("./testimonial-area"), { ssr: false });
const VideoArea = dynamic(() => import("./video-area"), { ssr: false });
const PricingArea = dynamic(() => import("./pricing-area"), { ssr: false });
// const BrandArea = dynamic(() => import("./brand-area"), { ssr: false });


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
