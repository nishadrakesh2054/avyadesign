import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import React from "react";
import ServiceDetailsArea from "./service-details-area";
import Footer from "@/src/layout/footers/footer";
import HeaderTwo from "@/src/layout/headers/header-2";

const ServiceDetails = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb title="Service Details" innertitle="Services "  backgroundImage="/assets/img/avya/services.jpg" />
      <ServiceDetailsArea />
      <Footer />
    </>
  );
};

export default ServiceDetails;
