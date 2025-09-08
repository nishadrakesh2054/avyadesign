import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
// const BASEURL = process.env.NEXT_PUBLIC_BASEURL;

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
    bg_img: "/assets/img/avya/gym2.jpg",
    sub_title: "Strength • Energy • Balance",
    title: "Gym | Functional Fitness | Nutrition",
    info: (
      <>
        Achieve peak fitness with our modern gym, <br /> dynamic training
        programs, and expert nutrition plans.
      </>
    ),
  },
  {
    id: 2,
    col: "col-xxl-6 col-xl-7 col-lg-8",
    bg_img: "/assets/img/avya/bgservice.webp",
    sub_title: "Recover • Relax • Revive",
    title: "Physiotherapy | Wellness Massage | Spa",
    info: (
      <>
        Recover and Revive with professional physiotherapy, <br /> relaxing
        massages, and holistic spa treatments.
      </>
    ),
  },
  {
    id: 3,
    col: "col-xxl-6 col-xl-7 col-lg-8",
    bg_img: "/assets/img/avya/club3.jpg",
    sub_title: "Sports • Community • Lifestyle",
    title: "Swimming | Tennis | Club House",
    info: (
      <>
        Enjoy  sports facilities, <br /> expert coaching, and a vibrant
        community at Avya Club.
      </>
    ),
  },
];
const SliderArea = () => {
  const sliderRef = useRef(null);

  //   const [hero, setHero] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [error, setError] = useState(null);

  //   useEffect(() => {
  //     const fetchHero = async () => {
  //       setIsLoading(true);
  //       setError(null);
  //       try {
  //         const response = await fetch(`${BASEURL}/api/banners?limit=10`);
  //         if (!response.ok) {
  //           throw new Error("Failed to fetch hero");
  //         }
  //         const data = await response.json();
  //         const serviceItems = data.docs || [];
  //         setHero(serviceItems);
  //       } catch (error) {
  //         console.error("Error fetching hero:", error);
  //         setError("Failed to load hero. Please try again later.");
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     };
  //     fetchHero();
  //   }, []);

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
                          <p className="d-none d-md-block">{item.info}</p>
                          <div className="tp-slide-btn-box mt-45">
                            <div className="slider-btn">
                              <Link href="/register" className="tp-btn">
                                Become a Membership
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
