import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import PortfolioArea from "../components/portfolio/portfolio-area";
import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import HeaderTwo from "../layout/headers/header-2";

const index = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle="Gallery"
        description="Explore Avya Club’s state-of-the-art gym, spa, swimming pool, and club house facilities in Nepal through our gallery."
        canonical="https://www.avyaclub.com/gallery"
        ogImage="/assets/img/avya/hero_2.png"
        keywords="Avya Club gallery, gym photos Nepal, spa images Kathmandu, yoga studio pictures, swimming pool photos, club house images, fitness center gallery"
        
      />

      <HeaderTwo />
      <Breadcrumb
        title={" Gallery"}
        innertitle={"Explore Photos"}
        backgroundImage="/assets/img/avya/hero_2.png"
      />

      <PortfolioArea />
    </Wrapper>
  );
};

export default index;
