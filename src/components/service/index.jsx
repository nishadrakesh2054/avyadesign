import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import React from "react";
import ServiceArea from "./service-area";
import FeatureArea from "./feature-area";
// import PricingArea from "../homes/pricing-area";
import Footer from "@/src/layout/footers/footer";
import HeaderTwo from "@/src/layout/headers/header-2";

const Service = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb
        title="Service"
        innertitle="Our Services"
        backgroundImage="/assets/img/avya/bgservice.webp"
      />
      <ServiceArea />
      <FeatureArea />
      {/* <PricingArea /> */}
      <Footer />
    </>
  );
};

export default Service;
