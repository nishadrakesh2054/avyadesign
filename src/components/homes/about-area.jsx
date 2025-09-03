import Link from "next/link";
import React from "react";

const about_content = {
  about: "About Us",
  title: "A Holistic Haven for Health, Fitness & Well-being",
  info: (
    <>
      Established in 2018, Avya Club was founded to transform health and
      wellness in Nepal. Inspired by the Sanskrit word *Avya*, meaning “pure”
      and “first light,” we blend fitness, healing, and mindfulness into a
      holistic experience. Spanning 110,000 sq. ft. with panoramic Himalayan
      views, Avya is more than a gym — it’s a space for growth, recovery, and
      performance at any level. Designed for all ages, our inclusive facilities
      offer everything from child-friendly amenities to elite athletic services.
      We continue to evolve with our community, always welcoming your feedback
      as part of our journey.
    </>
  ),

  right_img: "/assets/img/avya/aboutphoto.png",
};
const { about, title, info, right_img } = about_content;

const AboutArea = () => {
  return (
    <>
      <div className="tp-about-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              <div className="tp-about-wrapper tp-about-wrapper-2 pt-40 mb-40 pr-40">
                <div className="tp-section-box tp-section-box-2  p-relative">
                  <span className="tp-section-subtitle right d-inline-block">
                    {about}
                  </span>
                  <h2 className="tp-section-title mb-15">{title}</h2>
                  <p>{info}</p>
                </div>

                <div className="tp-about-fea-signature d-flex align-items-center mt-25">
                  <div className="sig-btn mr-30 mb-10">
                    <Link className="tp-btn-border" href="/about">
                      Learn More <i className="fal fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="tp-about-wapper2 pl-10 ">
                <img src={right_img} alt="theme-pure" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutArea;
