// import Link from "next/link";
import React from "react";
import pricing_data from "../../data/pricing-data";
import Link from "next/link";

const PricingArea = () => {
  return (
    <div className="pricing-area pb-90">
      <div className="container">
        <div className="row text-center">
          <div className="col-xl-12">
            <div className="tp-section-box tp-section-box-2 p-relative mb-45">
              <span className="tp-section-subtitle d-inline-block pre mb-10">
                pricing
              </span>
              <h2 className="tp-section-title">Our Services & Pricing</h2>
            </div>
          </div>
        </div>

        <div className="row">
          {pricing_data.map((category) => (
            <div key={category.id} className="col-lg-6 col-xl-4 mb-4">
              <div className="pricing-category-card h-100">
                <div className="pricing-category-header">
                  <h3>{category.category}</h3>
                </div>
                <div className="pricing-plans-container">
                  {category.plans.map((plan, index) => (
                    <div key={index} className="pricing-plan-card">
                      <h4 className="plan-title text-uppercase">
                        {plan.title}
                      </h4>
                      <div className="price-options">
                        {plan.prices.map((price, i) => (
                          <div key={i} className="price-option">
                            {price}
                          </div>
                        ))}
                      </div>
                      {/* Features (optional per plan) */}
                      {plan.features && plan.features.length > 0 && (
                        <ul className="plan-features mt-2">
                          {plan.features.map((feature, fIndex) => (
                            <li key={fIndex} className="feature-option">
                              <i className="fal fa-check"></i> {feature}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
            
              </div>
            </div>
          ))}

              <div className="pricing-card-footer bg-white">
                  <Link href="/register" className="tp-btn">
                    Join Us Now <i className="fal fa-long-arrow-right"></i>
                  </Link>
                </div>
        </div>
      </div>

      <style jsx>{`
        .pricing-category-card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          display: flex;
          max-height: 650px;
          flex-direction: column;
        }
        .pricing-category-card:hover {
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
        }

        .pricing-category-header {
          background: linear-gradient(135deg, #3dbbad 10%, #29c7ac 100%);

          color: white;
          padding: 20px;
          text-align: center;
        }

        .pricing-category-header h3 {
          margin: 0;
          font-size: 1.4rem;
          font-weight: 600;
        }

        .pricing-plans-container {
          padding: 20px;
          flex-grow: 1;
          overflow-y: auto;
        }

        .pricing-plan-card {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 15px;
          margin-bottom: 15px;
          transition: all 0.2s ease;
        }

        .pricing-plan-card:last-child {
          margin-bottom: 0;
        }

        .pricing-plan-card:hover {
          background: #eef2f7;
        }

        .plan-title {
          color: #2d3436;
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 10px 0;
          border-bottom: 1px dashed #ddd;
          padding-bottom: 8px;
        }

        .price-option {
          color: #636e72;
          padding: 5px 0;
          font-size: 0.95rem;
          position: relative;
          padding-left: 15px;
        }

        .price-option:before {
          content: "•";
          position: absolute;
          left: 0;
          color: #6c5ce7;
        }

        .pricing-card-footer {
          padding: 20px;
          background: #f8f9fa;
          text-align: center;
        }

        .tp-btn {
          display: inline-block;
          background: #3a8ffe;
          color: white;
          padding: 12px 25px;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .tp-btn:hover {
          background: #6c5ce7;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(108, 92, 231, 0.3);
        }
        .plan-features {
          margin: 10px 0 0 0;
          padding-left: 20px;
          list-style: none;
        }

        .feature-option {
          color: #2d3436;
          font-size: 0.9rem;
          padding: 4px 0;
          position: relative;
        }

        .feature-option i {
          color: #6c5ce7;
          margin-right: 6px;
        }
      `}</style>
    </div>
  );
};

export default PricingArea;
