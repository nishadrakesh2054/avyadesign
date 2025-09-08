import React from "react";

const features = [
  {
    id: 1,
    serial: "03",
    icon: "/assets/img/avya/iconservice/swim.png",
    title: "Swimming Pool",
    description: "Train, swim, and relax ",
  },
  {
    id: 2,
    serial: "04",
    icon: "/assets/img/avya/iconservice/weightlifter.png",
    title: "GYM & Fitness",
    description: "Protecting your digital presence",
  },
  {
    id: 3,
    serial: "05",
    icon: "/assets/img/avya/iconservice/treadmill.png",
    title: "Functional Fitness",
    description: "High-resolution cameras ensuring",
  },
  {
    id: 4,
    serial: "06",
    icon: "/assets/img/avya/iconservice/tenniss.png",
    title: "Tennis Court",
    description: "Smart surveillance solutions",
  },
  {
    id: 5,
    serial: "07",
    icon: "/assets/img/avya/iconservice/physical.png",
    title: "Physiotherapy",
    description: "Seamless entry management",
  },
  {
    id: 6,
    serial: "08",
    icon: "/assets/img/avya/iconservice/massage.png",
    title: "Massage & Spa",
    description: "Instant alerts and monitoring",
  },
  {
    id: 7,
    serial: "01",
    icon: "/assets/img/avya/iconservice/club.png",
    title: "Club House",
    description: "Energy-efficient lighting",
  },
  {
    id: 8,
    serial: "02",
    icon: "/assets/img/avya/iconservice/diet.png",
    title: "Well-being & Nutrition",
    description: "Stay connected anywhere",
  },
];

const circle_img = "/assets/img/avya/avya.png";

const FeaturesLevel = () => {
  return (
    <div className="tp-feature-area pt-115 pb-90">
      <div className="container text-center">
        <div className="tp-section-box tp-section-box-2 p-relative mb-75">
          <span className="tp-section-subtitle d-inline-block pre mb-10">
            Facilities
          </span>
          <h2 className="tp-section-title">Core Level Facilities</h2>
        </div>

        {/* Circle Layout */}
        <div className="circle-wrapper">
          <div className="center-content d-none d-lg-block">
            <img
              src={circle_img}
              alt="Security Features"
              className="center-img"
                loading="lazy"
            />
            <div className="center-text">
              <h5 className="">Under the management of Vyayam Fitness Pvt. Ltd.</h5>
            </div>
          </div>

          {features.map((item, index) => {
            const angle = index * 45 * (Math.PI / 180);
            const radius = 300; // Increased radius for better spacing
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <div
                key={item.id}
                className="feature-item "
                style={{
                  position: "absolute",
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="feature-content">
                  <div className="serial-number">{item.serial}</div>
                  <div className="tp-fea-icon">
                    <img src={item.icon} />
                  </div>
                  <div className="tp-fea-content">
                    <h5 className="feature-title ">{item.title}</h5>
                    <p className="feature-desc">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .circle-wrapper {
          position: relative;
          width: auto;
          height: 750px;
          margin: 0 auto;
        }

        .center-content {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          width: 250px;
          z-index: 2;
        }

        .center-img {
          max-width: 200px;
          margin-bottom: 15px;
        }

        .center-text h5 {
          font-size: 15px;
          color: #3DBBAD;
        }

        .feature-item {
          width: 180px;
          transition: all 0.3s ease;
        }

        .feature-content {
          text-align: center;
          padding: 20px 15px;
          background: white;
          border-radius: 12px;
          border: 1px solid #e0e0e0;
          transition: all 0.3s ease;
        }

        .feature-item:hover .feature-content {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
        }

        .serial-number {
          position: absolute;
          top: -12px;
          right: -12px;
          width: 30px;
          height: 30px;
          background: #5190a2;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: bold;
        }

        .tp-fea-icon {
          margin-bottom: 15px;
          position: relative;
        }

        .tp-fea-icon i {
          font-size: 40px;
          color: #3dbbad;
        }

        .feature-title {
          font-size: 20px;
          margin-bottom: 8px;
          color: #2d3e50;
          font-weight: 600;
        }

        .feature-desc {
          font-size: 13px;
          color: #7f8c8d;
          line-height: 1.4;
          margin: 0;
        }

        @media (max-width: 768px) {
          .circle-wrapper {
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
          }

          .center-content {
            position: relative;
            margin-bottom: 40px;
            width: 100%;
          }

          .feature-item {
            position: relative !important;
            left: auto !important;
            top: auto !important;
            transform: none !important;
            margin: 10px;
            width: calc(50% - 40px);
          }
        }
      `}</style>
    </div>
  );
};

export default FeaturesLevel;
