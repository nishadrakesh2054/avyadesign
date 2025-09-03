import React, { useState } from "react";
import axios from "axios";

const BASEURL = process.env.NEXT_PUBLIC_BASEURL;


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null); // Clear error on input change
    setSuccess(null); // Clear success on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name || !formData.phone || !formData.message) {
      setError("All fields are required.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post(`${BASEURL}/api/contacts`, formData);
      setSuccess(
        response.data.message || "Contact form submitted successfully!"
      );
      setFormData({ name: "", phone: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(
        error.response?.data?.error ||
          "Failed to submit form. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
            <div className="contact__input">
              <i className="fas fa-user"></i>
              <input
                className="w-100"
                type="text"
                placeholder="Enter name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
            <div className="contact__input">
              <i className="fas fa-phone"></i>
              <input
                className="w-100"
                type="text"
                placeholder="Enter Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
            <div className="contact__input">
              <i className="fas fa-pen pen"></i>
              <textarea
                className="w-100"
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
          <div className="col-xxl-12 col-lg-12 col-md-12">
            <div className="contact__btn">
              <button
                className="tp-btn w-100"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                ) : (
                  <>
                    Get A Quotation <i className="fal fa-long-arrow-right"></i>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
        {error && (
          <div className="alert alert-danger text-center mt-3" role="alert">
            {error}
          </div>
        )}
        {success && (
          <div className="alert alert-success text-center mt-3" role="alert">
            {success}
          </div>
        )}
      </form>
    </>
  );
};

export default ContactForm;
