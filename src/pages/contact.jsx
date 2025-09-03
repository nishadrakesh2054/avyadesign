import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Contact from "../components/contact";

const index = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle="Contact Us"
        description="Get in touch with Avya Club for inquiries about gym, spa, yoga, swimming, or club house memberships in Nepal."
        canonical="https://www.avyaclub.com/contact"
        ogImage="/assets/img/avya/hero_2.png"
        keywords="Contact Avya Club, fitness center inquiries Nepal, gym membership questions Kathmandu, spa services contact, yoga class info, swimming pool access, club house membership details"
      />
      <Contact />
    </Wrapper>
  );
};

export default index;
