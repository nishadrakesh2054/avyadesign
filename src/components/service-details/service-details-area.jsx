import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CallToAction from "@/src/forms/call-to-action";

const BASEURL = process.env.NEXT_PUBLIC_BASEURL;

const service_details_content = {
  // over-veiw-list
over_veiw_list: [
  { id: 1, icon: "flaticon-cctv-camera", title: "Train in a Safe, Secure Space " },
  { id: 2, icon: "flaticon-bubble-chat-1", title: "High-Quality, Reliable Services " },
  { id: 3, icon: "flaticon-group", title: "Experienced & Certified Guidance" },
  { id: 4, icon: "flaticon-secure", title: "24/7 Dedicated Support Team" },
  { id: 5, icon: "flaticon-web-security", title: "Free Consultation " },
  { id: 6, icon: "flaticon-security", title: "Easy Contact & Quick Response" },
],

  service: [
    {
      id: 1,
      serial: "03",
      icon: "/assets/img/avya/iconservice/swim.png",
      title: "Swimming Pool",
    },
    {
      id: 2,
      serial: "04",
      icon: "/assets/img/avya/iconservice/weightlifter.png",
      title: "GYM & Fitness",
    },
    {
      id: 3,
      serial: "05",
      icon: "/assets/img/avya/iconservice/treadmill.png",
      title: "Functional Fitness",
    },
    {
      id: 4,
      serial: "06",
      icon: "/assets/img/avya/iconservice/tenniss.png",
      title: "Tennis Court",
    },
    {
      id: 5,
      serial: "07",
      icon: "/assets/img/avya/iconservice/physical.png",
      title: "Physiotherapy",
    },
    {
      id: 6,
      serial: "08",
      icon: "/assets/img/avya/iconservice/massage.png",
      title: "Massage & Spa",
    },
    {
      id: 7,
      serial: "01",
      icon: "/assets/img/avya/iconservice/club.png",
      title: "Club House",
    },
    {
      id: 8,
      serial: "02",
      icon: "/assets/img/avya/iconservice/diet.png",
      title: "Well-being & Nutrition",
    },
  ],
};
const { service, over_veiw_list } = service_details_content;
// Helper to extract plain text from content object
const extractContentText = (content) => {
  if (!content || !content.root || !content.root.children) return "";
  return content.root.children
    .map(
      (para) => para.children.map((child) => child.text || "").join("") // join text pieces in paragraph
    )
    .join("\n\n"); // join paragraphs
};

const ServiceDetailsArea = () => {
  const router = useRouter();
  const { id } = router.query;
  const [serviceDetails, setServiceDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchServiceDetails = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`${BASEURL}/api/services/${id}`);
        if (!response.ok) throw new Error("Failed to fetch service details");

        const data = await response.json();
        setServiceDetails(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load service details. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchServiceDetails();
  }, [id]);

  if (isLoading)
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  if (error)
    return <div className="alert alert-danger text-center">{error}</div>;

  if (!serviceDetails) return null;

  const contentText = extractContentText(serviceDetails.content);

  return (
    <div className="tp-service-details-area pt-115 pb-115">
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <div className="tp-service-overveiw-area mr-20">
              <img
                className="w-100"
                src={`${BASEURL}${serviceDetails.image?.url}`}
                alt={
                  serviceDetails.image?.alt ||
                  serviceDetails.title ||
                  "Service Image"
                }
              />
              
              <div className="tp-overview-details">
                <h2 className="overview-title text-uppercase">
                  {serviceDetails.title}
                </h2>
                {/* Render content */}
                {contentText.split("\n\n").map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}


                {/* Checklist */}
                <div className="tp-overview-fea-list">
                  <h4>Exclusive Features</h4>
                  <div className="row">
                    {serviceDetails.checklist?.map((item, i) => (
                      <div key={i} className="col-xl-6 col-lg-6 col-md-6">
                        <div className="tp-overview-feature mb-15">
                          <ul>
                            <li>
                              <i className="fal fa-check"></i> {item.item}
                            </li>
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <hr />
                <div className="row over-veiw-list counter-row">
                  {over_veiw_list.map((item, i) => (
                    <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                      <div className="tp-over-view-item mb-30">
                        <div className="over-veiw-counter"></div>
                        <i className={item.icon}></i>

                        <h5>{item.title}</h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar can go here if needed */}
          <div className="col-xl-3">
            <div className="tp-sidebar-widget">
              <h4 className="tp-widget-title">Our Services</h4>
              <div className="tp-widget-item">
                <ul>
                  {service.map((item, i) => (
                    <li key={i}>
                      <a href="#">
                        <span className="d-flex gap-2">
                          <img src={item.icon} alt={item.title}   loading="lazy"/>

                          {item.title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="tp-sidebar-widget pt-50">
              <h4 className="tp-widget-title">Call To Action</h4>
              <div className="widget-form grey-bg">
                <CallToAction />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsArea;
