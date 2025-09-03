import Link from "next/link";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
const BASEURL = process.env.NEXT_PUBLIC_BASEURL;


const setting = {
  slidesToShow: 4,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};

const TeamArea = () => {
  const sliderRef = useRef(null);
  const [teamMembers, setTeamMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    const fetchTeamMembers = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${BASEURL}/api/trainers`);
        setTeamMembers(response.data.docs || []);
      } catch (error) {
        console.error("Error fetching team members:", error);
        setError("Failed to load team members. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchTeamMembers();
  }, []);

  return (
    <>
      <div className="tp-team-area grey-bg pt-115 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-section-box tp-section-box-2 p-relative mb-45">
                <span className="tp-section-subtitle d-inline-block right mb-10">
                  team
                </span>
                <h2 className="tp-section-title">The Power Behind Our Club</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              {isLoading ? (
                <div className="text-center py-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : error ? (
                <div className="alert alert-danger text-center" role="alert">
                  {error}
                </div>
              ) : (
                <div className="team-slider-active tp-team-space slick-initialized slick-slider">
                  <button
                    type="button"
                    onClick={() => sliderRef.current?.slickPrev()}
                    className="slick-prev slick-arrow"
                  >
                    <i className="far fa-long-arrow-alt-left"></i>
                  </button>
                  <button
                    type="button"
                    onClick={() => sliderRef.current?.slickNext()}
                    className="slick-next slick-arrow"
                  >
                    <i className="far fa-long-arrow-alt-right"></i>
                  </button>
                  <Slider {...setting} ref={sliderRef}>
                    {teamMembers.map((item, i) => (
                      <div key={item.id || i}>
                        <div className="tp-team-item">
                          <div className="tp-team-img p-relative">
                            <div className="fix">
                              <a href="#">
                                <img
                                  src={`${BASEURL}${item.img?.url}`}
                                  alt={item.img?.alt || item.name}
                                />
                              </a>
                            </div>
                            <div className="tp-team-overlay">
                              <div className="team-overlay-icon">
                                <a className="team-icon-main" href="#">
                                  <i className="fal fa-plus"></i>
                                </a>
                                <div className="team-icon-bottom">
                                  <a href="#">
                                    <i className="fab fa-instagram"></i>
                                  </a>
                                  <a href="#">
                                    <i className="fab fa-google"></i>
                                  </a>
                                  <a href="#">
                                    <i className="fab fa-facebook-f"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tp-team-designation text-center pt-35">
                            <h5 className="client-name">
                              <Link href="/team-details">{item.name}</Link>
                            </h5>
                            <a className="client-position" href="#">
                              {item.Profession}
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamArea;
