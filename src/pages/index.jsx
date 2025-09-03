import SEO from "../common/seo";
import HomeTwo from "../components/homes";
import Notice from "../components/notice/notice";
import Wrapper from "../layout/wrapper";

export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle={"Avya Club"} />
      <HomeTwo />
      <Notice />
    </Wrapper>
  );
}
