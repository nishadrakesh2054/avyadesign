import React, { useState } from "react";
import Slider from "react-slick";
const BASEURL = process.env.NEXT_PUBLIC_BASEURL;


const setting = {
  slidesToShow: 3,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};

const TestimonialArea = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    const fetchTestimonials = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`${BASEURL}/api/feedbacks`);
        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }
        const data = await response.json();
        setTestimonials(data.docs || []);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setError("Failed to load testimonials. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <>
      <div className="testimonial-area pt-120 pb-200 grey-bg">
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <div className="tp-section-box tp-section-gray z-index p-relative mb-60">
                <h3 className="tp-big-text tp-price-big tp-testimonial-big">
                  Feedback
                </h3>
                <span className="tp-section-subtitle d-inline-block mb-10">
                  testimonial
                </span>
                <h2 className="tp-section-title tp-price tp-section-title2">
                  Inspiring Journeys, Honest Feedback
                </h2>
              </div>
            </div>
          </div>
          <div className="tp-testimonial-active slider-space-30">
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
              <Slider {...setting}>
                {testimonials.map((item, i) => (
                  <div key={i} className="tp-test-slide">
                    <div className="tp-testimonial text-center">
                      <h4>{item.feedback}</h4>
                      <div className="testimonial-img">
                        <img
                          src={`${BASEURL}${item.image?.url}`}
                          alt={item.image?.alt || item.name}
                        />
                        <i className="fal fa-quote-left"></i>
                      </div>
                      <div className="testimonial-meta">
                        <h5 className="reviewer-name">{item.name}</h5>
                        <span className="reviewer-position">
                          {item.profession}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialArea;
