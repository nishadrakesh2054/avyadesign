import Link from "next/link";
import React, { useRef } from "react";
import Slider from "react-slick";

const setting = {
  fade: true,
  slidesToShow: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
      },
    },
  ],
};

const slider_data = [
  {
    id: 1,
    col: "col-xxl-6 col-xl-7 col-lg-8 col-md-12",
    bg_img: "/assets/img/avya/hero_2.png",
    sub_title: "Experience Wellness & Lifestyle",
    title: "Gym | Functional Fitness | Nutrition",
    info: (
      <>
        Achieve peak fitness with our modern gym, <br /> dynamic training
        programs, and expert nutrition plans.
      </>
    ),
    slider_service_title: (
      <>
        {" "}
        <b>Personal Training</b> <br /> + Diet Guidance{" "}
      </>
    ),
  },
  {
    id: 2,
    col: "col-xxl-6 col-xl-7 col-lg-8",
    bg_img: "/assets/img/avya/hero_1.png",
    sub_title: "Recover • Relax • Rejuvenate",
    title: "Physiotherapy | Massage | Spa",
    info: (
      <>
        Achieve peak fitness with our modern gym, <br /> dynamic training
        programs, and expert nutrition plans.
      </>
    ),
    slider_service_title: (
      <>
        {" "}
        <b>Personal Training</b> <br /> + Diet Guidance{" "}
      </>
    ),
  },
  {
    id: 3,
    col: "col-xxl-6 col-xl-7 col-lg-8",
    bg_img: "/assets/img/avya/hero_3.png",
    sub_title: "Stay Active • Stay Competitive",
    title: "Swimming | Tennis | Club House",
    info: (
      <>
        Enjoy premium sports facilities and <br /> a vibrant community
        experience at Avya Club.
      </>
    ),
    slider_service_title: (
      <>
        {" "}
        <b>Events</b> <br /> & Sports Coaching{" "}
      </>
    ),
  },
];
const SliderArea = () => {
  const sliderRef = useRef(null);

  return (
    <>
      <div className="tp-slider-area">
        <div className="slider-active slider-arrow-style p-relative">
          <button
            type="button"
            onClick={() => sliderRef.current?.slickPrev()}
            className="slick-prev slick-arrow"
          >
            <i className="flaticon-left-arrow"></i>
          </button>
          <button
            type="button"
            onClick={() => sliderRef.current?.slickNext()}
            className="slick-next slick-arrow"
          >
            <i className="flaticon-right-arrow"></i>
          </button>
          <Slider {...setting} ref={sliderRef}>
            {slider_data.map((item, i) => (
              <div key={i}>
                <div
                  className="tp-slider-item tp-slider-height tp-slider-overlay-2 d-flex align-items-center"
                  style={{ backgroundImage: `url(${item.bg_img})` }}
                >
                  <div className="container">
                    <div className="row justify-content-xxl-end">
                      <div className={item.col}>
                        <div className="tp-slider-content tp-slider-content-two ">
                          <span className="tp-slider-sub-title p-0">
                            {item.sub_title}
                          </span>
                          <h2 className="tp-slider-title">{item.title}</h2>
                          <p>{item.info}</p>
                          <div className="tp-slide-btn-box mt-45">
                            <div className="slider-btn">
                              <Link href="/register" className="tp-btn">
                                Become Membership
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SliderArea;
