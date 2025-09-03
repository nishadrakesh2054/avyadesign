import ContactForm from "@/src/forms/contact-form";
import React from "react";

const ContactArea = () => {
  return (
    <>
      <div className="contact-page pt-115 pb-115">
        <div className="container">
          <div className="contact-bg grey-bg">
            <div className="row">
              <div className="col-xxl-6 col-xl-7 col-lg-6">
                <div className="contact-map">
                  <iframe
                    src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2957.091331929243!2d83.97616039742577!3d28.18925875346686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995954ea2e0ad13%3A0x42ce2f145dfadeb9!2sAvya%20Club!5e0!3m2!1sen!2snp!4v1641378632195!5m2!1sen!2snp"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-5 col-lg-6">
                <div className="contact-us">
                  <div className="tp-section-box tp-section-box-2  p-relative">
                    <span className="tp-section-subtitle right d-inline-block">
                      contact us
                    </span>
                    <h2 className="tp-section-title mb-35">Get In Touch</h2>
                  </div>
                  <div className="contact">
                    <div className="contact__form">
                      <ContactForm />
                      <p className="ajax-response"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;
