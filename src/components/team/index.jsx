import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import Footer from "@/src/layout/footers/footer";
import React from "react";
import TeamArea from "./team-area";
import SkillArea from "./skill-area";
import HeaderTwo from "@/src/layout/headers/header-2";

const Team = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb title=" Team" innertitle="Meet Our Teams " />
        <TeamArea />
        <SkillArea />
      </main>
      <Footer />
    </>
  );
};

export default Team;
