import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";

import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import HeaderTwo from "../layout/headers/header-2";
import Register from "../components/register";
import PricingArea from "../components/homes/pricing-area";

const index = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle="Book Now"
        description="Book your gym, spa, yoga, zumba, swimming, or club house membership at Avya Club in Nepal. Secure your spot today!"
        canonical="https://www.avyaclub.com/register"
        ogImage="/assets/img/avya/hero_2.png"
        keywords="Avya Club registration, gym membership Nepal, spa booking Kathmandu, yoga class sign-up, zumba sessions, swimming pool access, club house membership"
      />

      <HeaderTwo />
      <Breadcrumb
        title={" Register"}
        innertitle={"Join Avya Club Today!"}
        backgroundImage="/assets/img/avya/hero_2.png"
      />
      <Register />
      <PricingArea />
    </Wrapper>
  );
};

export default index;
