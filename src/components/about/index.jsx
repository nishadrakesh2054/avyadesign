import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import AboutArea from "./about-area";
import Footer from "@/src/layout/footers/footer";
const About = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb
        title="About"
        innertitle="About AVYA CLUB"
        backgroundImage="/assets/img/avya/about.jpg"
      />
      <AboutArea />
      <Footer />
    </>
  );
};

export default About;
