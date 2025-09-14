import Count from "@/src/common/count";
import React from "react";

const fact_data = [
  {
    id: 1,
    counte: 150,
    titile: "Happy Members",
    description: (
      <>We have over 150 active members achieving their fitness goals.</>
    ),
  },
  {
    id: 2,
    counte: 45,
    titile: "Certified Trainers",
    description: (
      <>Our team of 45 certified trainers provide expert guidance.</>
    ),
  },
  {
    id: 3,
    counte: 30,
    titile: "Fitness Programs",
    description: <>Offering 30 specialized programs for all ages and levels.</>,
  },
  {
    id: 4,
    counte: 10,
    titile: "Years of Excellence",
    description: <>We have been transforming lives for over 10 years.</>,
  },
];

const FactArea = () => {
  return (
    <>
      <div className="tp-fact-area theme-bg pt-70 pb-40">
        <div className="container">
          <div className="row counter-row">
            {fact_data.map((item, i) => (
              <div key={i} className="col-xl-3 col-md-6">
                <div className="tp-fact mb-10 flex-column align-items-center">
                  <div className="fact-number">
                    <h2 className="counter">
                      <Count number={item.counte} />
                    </h2>
                  </div>
                  <div className="fact-content text-center">
                    <h4>{item.titile}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FactArea;
