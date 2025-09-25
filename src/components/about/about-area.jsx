import React, { useState } from "react";

const about_content = {
  img: "/assets/img/avya/aboutphoto.png",
  title: (
    <>
      Good Experience <br /> In Last
    </>
  ),
  year_count: "7",
  year: "Years",
  about: "Fitness For All",
  about_title: " Destination for Wellness & Transformation",

  mission:
    "To empower individuals through a body, mind, spirit approach, offering world-class fitness, therapeutic spa experiences, mental wellness support, and personalized nutrition plans. We are committed to helping people discover their purest form of life, renewed, strong, and balanced",
  vision:
    "To become Nepal’s leading holistic wellness destination, where fitness, mindfulness, and relaxation come together. At Avya Club, we envision a world where well-being is not a luxury, but a lifestyle accessible to all. We strive to inspire lifelong habits of self-care, personal growth, and balance. By blending ancient wisdom with modern wellness practices, we aim to uplift individuals and communities alike.",
  goal: "We aim to deliver exceptional wellness experiences by combining advanced fitness facilities, personalized nutrition and mental wellness services, and restorative spa therapies. Our goal is to support both locals and visitors in achieving holistic health, while promoting Pokhara as a hub for sports, adventure, and relaxation.",
  fetoure_1: "New Business Ideas create",
  fetoure_2: "Grow corporate financial system",
};
const {
  img,
  title,
  year_count,
  year,
  about,
  about_title,
  mission,
  vision,
  goal,
} = about_content;

const AboutArea = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const renderContent = () => {
    if (activeTab === "mission") return <p>{mission}</p>;
    if (activeTab === "vision") return <p>{vision}</p>;
    if (activeTab === "goal") return <p>{goal}</p>;
  };
  return (
    <>
      <div className="tp-about-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-5">
              <div className="ab-wrapper-4 p-relative">
                <div className="ab-right-img shadow">
                  <img src={img} alt="theme-pure" className="image-fluid"   loading="lazy" />
                </div>
                <div className="tp-ab-left-meta">
                  <h3>{title}</h3>
                  <h4>{year_count}</h4>
                  <h5>{year}</h5>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="tp-about-info-wrapper pl-50">
                <div className="tp-section-box tp-section-box-2  p-relative">
                  <span className="tp-section-subtitle right d-inline-block">
                    {about}
                  </span>
                  <h2 className="tp-section-title mb-15">{about_title}</h2>
                  <p>
                    In Hinduism, Avya means the first life form that is all-pure
                    and also signifies the first ray of the sun. As the name
                    suggests, Avya Club is Nepal’s pioneer recreational centre
                    that focuses not only on physical fitness, but also on a
                    holistic approach to the continuous betterment of the body,
                    mind and spirit <br />
                    With state-of-the-art facilities sprawled over 110,000sq.ft
                    of area and overlooking the majestic Himalayas, Avya Club
                    welcomes people from all walks of life, as it is our ethos
                    that well-being is for all. Whether you are someone making
                    your first ever visit to a gym or you are someone who is
                    looking for rejuvenation and motivation, we offer packages
                    and services that fit your needs and goals.
                  </p>
                </div>
                <hr className="mt-25 mb-30" />
                {/* Buttons */}
                <div className="d-flex gap-3 mb-3">
                  <button
                    className={`btn text-uppercase font-bold  ${
                      activeTab === "mission"
                        ? "theme-bg text-light "
                        : "btn-outline-info"
                    }`}
                    onClick={() => setActiveTab("mission")}
                  >
                    Mission
                  </button>
                  <button
                    className={`btn text-uppercase font-bold ${
                      activeTab === "vision"
                        ? "theme-bg text-light "
                        : "btn-outline-info"
                    }`}
                    onClick={() => setActiveTab("vision")}
                  >
                    Vision
                  </button>
                  <button
                    className={`btn  text-uppercase font-bold ${
                      activeTab === "goal"
                        ? "theme-bg text-light "
                        : "btn-outline-info"
                    }`}
                    onClick={() => setActiveTab("goal")}
                  >
                    Goal
                  </button>
                </div>
                {/* Content */}
                <div className="tab-content mt-4">{renderContent()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutArea;
