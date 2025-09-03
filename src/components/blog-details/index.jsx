import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import React from "react";
import Footer from "@/src/layout/footers/footer";
import HeaderTwo from "@/src/layout/headers/header-2";
import PostboxArea from "./postbox";

const BlogDetails = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb title="Blog Details" innertitle="News Feed"  backgroundImage="/assets/img/avya/blogs.jpg" />
      <PostboxArea />
      <Footer />
    </>
  );
};

export default BlogDetails;
