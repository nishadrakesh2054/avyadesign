import Link from "next/link";
import React from "react";

const about_content = {
  about: "About Us",
  title: "A Holistic Haven for Health, Fitness & Well-being",
  info: (
    <>
      Founded in 2018, Avya Club was created to redefine health and wellness in
      Nepal. Inspired by the Sanskrit word Avya, meaning “pure” and “first
      light,” we seamlessly blend fitness, healing, and mindfulness to offer a
      truly holistic experience. <br />
      Spread across 110,000 sq. ft. with breathtaking views of the Himalayas,
      Avya is more than a gym - it’s a space for personal growth, recovery, and
      peak performance, regardless of your fitness level. Our inclusive
      facilities cater to all ages, from child-friendly zones to elite athletic
      services. <br />
      As we grow alongside our community, we embrace your feedback, ensuring
      that Avya remains a place where wellness is not just a goal, but a
      lifestyle
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
                  <p style={{ textAlign: 'justify', whiteSpace: 'pre-line'  }}>{info}</p>
                </div>

                <div className="tp-about-fea-signature d-flex align-items-center mt-25">
                  <div className="sig-btn mr-30 mb-10">
                    <Link className="tp-btn" href="/about">
                      Learn More <i className="fal fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="tp-about-wapper2 pl-10 ">
                <img src={right_img} alt="theme-pure"    loading="lazy"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutArea;
