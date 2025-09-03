import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import About from "../components/about";

const index = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle={"About"}
        keywords="Avya Club, fitness center Nepal, wellness club Kathmandu, gym and spa"
        description="Learn about Avya Club, your premier destination for gym, spa, yoga, swimming, and club house memberships in Nepal."
        canonical="https://www.avyaclub.com/about"
        ogImage="/assets/img/avya/hero_2.png"
        
      />
      <About />
    </Wrapper>
  );
};

export default index;
