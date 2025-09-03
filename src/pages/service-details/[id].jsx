import React from "react";
import SEO from "../../common/seo";
import ServiceDetails from "../../components/service-details";
import Wrapper from "../../layout/wrapper";

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
      <ServiceDetails />
    </Wrapper>
  );
};

export default index;
