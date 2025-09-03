import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import React from "react";
import PostboxArea from "./postbox-area";
import Footer from "@/src/layout/footers/footer";
import HeaderTwo from "@/src/layout/headers/header-2";

const Blog = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb
          title="Blog"
          innertitle="News Feeds"
          backgroundImage="/assets/img/avya/blogs.jpg"
        />
        <PostboxArea />
      </main>
      <Footer />
    </>
  );
};

export default Blog;
