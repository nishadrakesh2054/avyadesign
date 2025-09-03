import React from "react";
import SEO from "../../common/seo";
import Wrapper from "../../layout/wrapper";
import BlogDetails from "@/src/components/blog-details";

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
      <BlogDetails />
    </Wrapper>
  );
};

export default index;
