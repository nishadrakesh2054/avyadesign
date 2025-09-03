import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Faq from "../components/faq";

const index = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle="FAQ"
        description="Find answers to common questions about Avya Club's gym, spa, yoga, swimming, and club house memberships in Nepal."
        canonical="https://www.avyaclub.com/faq"
        ogImage="/assets/img/avya/hero_2.png"
        keywords="Avya Club FAQ, gym membership questions, spa services info, yoga classes details, swimming pool access, club house membership inquiries Nepal"
      />
      <Faq />
    </Wrapper>
  );
};

export default index;
