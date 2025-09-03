import React, { useState, useEffect } from "react";
import Link from "next/link";

const BASEURL = process.env.NEXT_PUBLIC_BASEURL;

const ServiceArea = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`${BASEURL}/api/services?limit=10`);
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        const data = await response.json();
        const serviceItems = data.docs || [];
        setServices(serviceItems);
      } catch (error) {
        console.error("Error fetching services:", error);
        setError("Failed to load services. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <>
      <div className="service-area grey-bg pt-110 pb-90">
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <div className="tp-section-box tp-section-box-2 p-relative mb-45">
                <span className="tp-section-subtitle d-inline-block pre mb-10">
                  Services
                </span>
                <h2 className="tp-section-title">What We Provide</h2>
              </div>
            </div>
          </div>
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
            <div className="row">
              {services.map((item, i) => (
                <div key={item.id || i} className="col-lg-4 col-md-6">
                  <div className="tpsvbox mb-30">
                    <div className="tpsvbox__thumb">
                      <div className="fix">
                        <a href={`/service-details/${item.id}`}>
                          <img
                            src={`${BASEURL}${item.image?.url}`}
                            alt={
                              item.image?.alt || item.title || "Service Image"
                            }
                          />
                        </a>
                      </div>
                    </div>

                    <div className="tpsvbox__content text-senter p-md-4">
                      <div className="tpsvbox__big-text">
                        <h2>{item.sirial || i + 1}</h2>
                      </div>
                      <h3 className="tpsvbox__title text-uppercase">
                        <Link href={`/service-details/${item.id}`}>
                          {item.title || "Service Item"}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
