import React from "react";

const SkillArea = () => {
  return (
    <>
      <div className="tp-team-progress-area  grey-bg p-relative pt-115 pb-90">
        <div
          className="tp-progress-overlay d-none d-lg-block"
          style={{ backgroundImage: `url(/assets/img/avya/aboutsmall.png)` }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-skil-wrap mb-30">
                <div className="tp-section-box tp-section-box-2 mb-40 p-relative">
                  <span className="tp-section-subtitle right d-inline-block">
                    Expert Trainers. Real Guidance.
                  </span>
                  <h2 className="tp-section-title mb-20">
                    Connect Your Mind With Your Body
                  </h2>
                  <p>
                    {" "}
                    Our certified trainers don’t just coach - they share their
                    knowledge, motivation, and proven techniques to help you
                    succeed. From strength building to endurance training,
                    you’ll gain expert insights and personalized support
                    designed to keep you inspired. Every session is about
                    unlocking your full potential and creating a healthier,
                    stronger you.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tp-progres-img text-start text-lg-end mb-30">
                <img src="/assets/img/avya/parallex_1.png" alt="theme-pure" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillArea;
