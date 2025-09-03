import React from "react";

// contact info data
const contact_info_data = [
  {
    id: 1,
    icon: "fas fa-phone-alt",
    title: "Call Us Here",
    info_1: "061-590648",
    info_2: " 9802855271",
    link_1: "tel:061-590648",
    link_2: "tel: 9802855271",
  },
  {
    id: 2,
    icon: "fas fa-envelope",
    title: "Email Address",
    info_1: " info@avya.club",
    link_1: "mailto: info@avya.club",
  },
  {
    id: 3,
    icon: "fas fa-map-marker-alt",
    title: "Call Us Here",
    info_1: "Gharipatan, Pokhara, Nepal",
    link_1: "#",
  },

];

const ContactInfo = () => {
  return (
    <>
      <div className="tp-contact-info pb-90">
        <div className="container">
          <div className="row contact-last-child">
            {contact_info_data.map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                <div className="contact-info-item text-center mb-30">
                  <i className={item.icon}></i>
                  <h5>{item.title}</h5>
                  <a href={item.link_1}>
                    {item.info_1}
                    <br />
                  </a>
                  <a href={item.link_2}>{item.info_2}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
