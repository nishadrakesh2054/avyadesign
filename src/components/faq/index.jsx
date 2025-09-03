import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import Footer from "@/src/layout/footers/footer";
import React from "react";
import FaqArea from "./faq-area";
import HeaderTwo from "@/src/layout/headers/header-2";

const Faq = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb title="faq" innertitle="Frequently Asked Questions" />
      <FaqArea />
   
      <Footer />
    </>
  );
};

export default Faq;
