import Link from "next/link";
import React from "react";

const fetures_content = {
  bg_img: "/assets/img/avya/bgservice.webp",
  subtitle: "features",
  title: "Opting For Security & Making You Free",
  fetures: [
   { id: 1, icon: "flaticon-cctv-camera", title: "Train in a Safe, Secure Space " },
  { id: 2, icon: "flaticon-bubble-chat-1", title: "High-Quality, Reliable Services " },
  { id: 3, icon: "flaticon-group", title: "Experienced & Certified Guidance" },
  { id: 4, icon: "flaticon-secure", title: "24/7 Dedicated Support Team" },
  { id: 5, icon: "flaticon-web-security", title: "Free Consultation " },
  { id: 6, icon: "flaticon-chat", title: "Easy Contact & Quick Response" },
  ],
};
const { bg_img, subtitle, title, fetures } = fetures_content;

const FeatureArea = () => {
  return (
    <>
      <div
        className="feature-third-area feature-bg-img pt-110 pb-110"
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        <div className="container">
          <div className="row justify-content-lg-end">
            <div className="col-xxl-6 col-xl-7 col-lg-8">
              <div className="tp-section-box tp-section-box-2 p-relative mb-45">
                <span className="tp-section-subtitle d-inline-block right mb-10">
                  {subtitle}
                </span>
              </div>
              <div className="row">
                {fetures.map((item, i) => (
                  <div key={i} className="col-lg-6 col-md-6">
                    <div className="fea-list d-flex align-items-center mb-30">
                      <i className={item.icon}></i>
                      <div className="fea-ctn pl-20">
                        <h5 className="m-0">{item.title}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureArea;
