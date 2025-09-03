import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Service from "../components/service";
// import ServiceArea from '../components/about/service-area';

const index = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle={"Service"}
        description="Explore Avya Club’s premium services: gym memberships, spa treatments, yoga, zumba, swimming pool, and club house memberships in Nepal."
        canonical="https://www.avyaclub.com/service"
        ogImage="/assets/img/avya/hero_2.png"
        keywords="Avya Club services, gym membership Nepal, spa treatments Kathmandu, yoga classes, zumba sessions, swimming pool access, club house membership"
        
      />
  

      <Service />
    </Wrapper>
  );
};

export default index;
