import React from "react";
import SEO from "../common/seo";
import Team from "../components/team";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle="Our Team"
        description="Meet the expert trainers and staff at Avya Club, dedicated to your fitness and wellness journey in Nepal."
        canonical="https://www.avyaclub.com/team"
        ogImage="/assets/img/avya/hero_2.png"
        keywords="Avya Club team, fitness trainers Nepal, wellness staff Kathmandu, gym experts, spa professionals, yoga instructors, swimming coaches"
      />
      <Team />
    </Wrapper>
  );
};

export default index;
