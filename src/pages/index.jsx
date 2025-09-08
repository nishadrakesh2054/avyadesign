import { useEffect, useState } from "react";
import SEO from "../common/seo";
import HomeTwo from "../components/homes";
import Notice from "../components/notice/notice";
import Wrapper from "../layout/wrapper";
import Preloader from "../common/Preloader";

export default function Home() {
  const [loading, setLoading] = useState(true);
    useEffect(() => {
    // Simulate initial data loading or wait for critical components
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5s minimum loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <Wrapper>
      <SEO pageTitle={"Avya Club"} />
      <HomeTwo />
      <Notice />
    </Wrapper>
  );
}
