import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Blog from "../components/blog";

const index = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle="Blog"
        description="Read the latest fitness tips, wellness advice, and updates from Avya Club in Nepal. Stay motivated with our blog!"
        canonical="https://www.avyaclub.com/blog"
        ogImage="/assets/img/avya/hero_2.png"
        keywords="Avya Club blog, fitness articles Nepal, wellness tips Kathmandu, gym updates, spa news, yoga insights, swimming advice, club house events"
      />
      <Blog />
    </Wrapper>
  );
};

export default index;
