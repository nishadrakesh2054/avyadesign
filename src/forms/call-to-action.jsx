"use client";
import React, { useState } from "react";
import axios from "axios";

const BASEURL = process.env.NEXT_PUBLIC_BASEURL;

const CallToAction = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form validation (basic)
  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      setError("Please fill all required fields.");
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post(`${BASEURL}/api/cta`, formData, {
        headers: { "Content-Type": "application/json" },
      });
      setSuccess("Your request has been submitted successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" }); // reset form
    } catch (err) {
      setError("Failed to submit. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <div className="p-relative">
          <i className="fal fa-user"></i>
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
        <div className="p-relative">
          <i className="fal fa-envelope"></i>
          <input
            className="w-100"
            type="email"
            placeholder="Email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="p-relative">
          <i className="fal fa-phone"></i>
          <input
            className="w-100"
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="p-relative">
          <i className="fal fa-pen pen"></i>
          <textarea
            className="w-100"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="tp-btn-2 w-100" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Get A Quote"}
        </button>
      </form>
    </>
  );
};

export default CallToAction;
