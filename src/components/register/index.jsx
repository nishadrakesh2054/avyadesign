import React, { useState } from "react";
import axios from "axios";
import pricing_data from "../../data/pricing-data";
const BASEURL = process.env.NEXT_PUBLIC_BASEURL;


const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    service: "",
    plan: "",
    priceOption: "",
    date: "",
    time: "",
    people: 1,
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.match(/^[A-Za-z\s]{2,}$/)) {
      newErrors.name =
        "Name must contain only letters and spaces, minimum 2 characters.";
    }
    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.match(/^\+?\d{10,15}$/)) {
      newErrors.phone =
        "Phone number must be 10-15 digits, optionally starting with +.";
    }
    if (formData.address.length < 5) {
      newErrors.address = "Address must be at least 5 characters.";
    }
    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }
    if (!formData.plan && selectedCategory) {
      newErrors.plan = "Please select a plan.";
    }
    if (!formData.priceOption && selectedPlan) {
      newErrors.priceOption = "Please select a price option.";
    }
    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (!formData.date || selectedDate < today) {
      newErrors.date = "Please select today or a future date.";
    }
    if (
      !formData.time ||
      (formData.service ===
        "Daily use (9am – 4pm Sun-Fri/ anytime on Saturday and Public Holidays)" &&
        (formData.time < "09:00" || formData.time > "16:00"))
    ) {
      newErrors.time =
        "Time must be between 9 AM and 4 PM for daily use services.";
    }
    if (formData.people < 1) {
      newErrors.people = "Number of people must be at least 1.";
    }
    if (!formData.agree) {
      newErrors.agree = "You must agree to the terms and conditions.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error for the field being edited
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleServiceChange = (e) => {
    const serviceValue = e.target.value;
    setFormData((prev) => ({
      ...prev,
      service: serviceValue,
      plan: "",
      priceOption: "",
    }));

    if (serviceValue) {
      const category = pricing_data.find(
        (cat) => cat.category === serviceValue
      );
      setSelectedCategory(category);
    } else {
      setSelectedCategory(null);
    }
    setSelectedPlan(null);
    setErrors((prev) => ({ ...prev, service: "", plan: "", priceOption: "" }));
  };

  const handlePlanChange = (e) => {
    const planTitle = e.target.value;
    setFormData((prev) => ({ ...prev, plan: planTitle, priceOption: "" }));

    if (planTitle && selectedCategory) {
      const plan = selectedCategory.plans.find((p) => p.title === planTitle);
      setSelectedPlan(plan);
    } else {
      setSelectedPlan(null);
    }
    setErrors((prev) => ({ ...prev, plan: "", priceOption: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await axios.post(`${BASEURL}/api/membership`, formData, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Booking request submitted successfully!");
      // Reset form
      setFormData({
        name: "",
        address: "",
        phone: "",
        email: "",
        service: "",
        plan: "",
        priceOption: "",
        date: "",
        time: "",
        people: 1,
        agree: false,
      });
      setSelectedCategory(null);
      setSelectedPlan(null);
      setErrors({});
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("Failed to submit booking. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-5 bg-light">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-xl-12">
            <div className="tp-section-box tp-section-box-2 p-relative mb-45">
              <span className="tp-section-subtitle d-inline-block pre mb-10">
                Booking
              </span>
              <h2 className="tp-section-title">Register for Services</h2>
              <p className="mx-auto" style={{ maxWidth: "1000px" }}>
                Fill out the form below to book your preferred service. Our team
                will contact you to confirm your booking details.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-10 mx-auto">
            <form
              onSubmit={handleSubmit}
              className="border shadow p-4 p-md-5 rounded bg-white"
            >
              <div className="row g-4">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className={`form-control py-2 py-2 ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="col-md-6">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className={`form-control py-2 py-2 ${
                      errors.address ? "is-invalid" : ""
                    }`}
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter your address"
                    required
                  />
                  {errors.address && (
                    <div className="invalid-feedback">{errors.address}</div>
                  )}
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className={`form-control py-2 ${
                      errors.phone ? "is-invalid" : ""
                    }`}
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required
                  />
                  {errors.phone && (
                    <div className="invalid-feedback">{errors.phone}</div>
                  )}
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className={`form-control py-2 ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="col-md-6">
                  <label htmlFor="service" className="form-label">
                    Service
                  </label>
                  <select
                    className={`form-select ${
                      errors.service ? "is-invalid" : ""
                    }`}
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleServiceChange}
                    required
                  >
                    <option value="" disabled>
                      Select Service
                    </option>
                    {pricing_data.map((category) => (
                      <option key={category.id} value={category.category}>
                        {category.category}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <div className="invalid-feedback">{errors.service}</div>
                  )}
                </div>
                {selectedCategory && (
                  <div className="col-md-6">
                    <label htmlFor="plan" className="form-label">
                      Plan
                    </label>
                    <select
                      className={`form-select ${
                        errors.plan ? "is-invalid" : ""
                      }`}
                      id="plan"
                      name="plan"
                      value={formData.plan}
                      onChange={handlePlanChange}
                      required
                    >
                      <option value="" disabled>
                        Select Plan
                      </option>
                      {selectedCategory.plans.map((plan, index) => (
                        <option key={index} value={plan.title}>
                          {plan.title}
                        </option>
                      ))}
                    </select>
                    {errors.plan && (
                      <div className="invalid-feedback">{errors.plan}</div>
                    )}
                  </div>
                )}
                {selectedPlan && (
                  <div className="col-md-6">
                    <label htmlFor="priceOption" className="form-label">
                      Price Option
                    </label>
                    <select
                      className={`form-select ${
                        errors.priceOption ? "is-invalid" : ""
                      }`}
                      id="priceOption"
                      name="priceOption"
                      value={formData.priceOption}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>
                        Select Option
                      </option>
                      {selectedPlan.prices.map((price, index) => (
                        <option key={index} value={price}>
                          {price}
                        </option>
                      ))}
                    </select>
                    {errors.priceOption && (
                      <div className="invalid-feedback">
                        {errors.priceOption}
                      </div>
                    )}
                  </div>
                )}
                <div className="col-md-6">
                  <label htmlFor="date" className="form-label">
                    Date
                  </label>
                  <input
                    type="date"
                    className={`form-control py-2 ${
                      errors.date ? "is-invalid" : ""
                    }`}
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split("T")[0]}
                    required
                  />
                  {errors.date && (
                    <div className="invalid-feedback">{errors.date}</div>
                  )}
                </div>
                <div className="col-md-6">
                  <label htmlFor="time" className="form-label">
                    Time
                  </label>
                  <input
                    type="time"
                    className={`form-control py-2 ${
                      errors.time ? "is-invalid" : ""
                    }`}
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    min="09:00"
                    max="16:00"
                    required
                  />
                  {errors.time && (
                    <div className="invalid-feedback">{errors.time}</div>
                  )}
                </div>
                <div className="col-md-6">
                  <label htmlFor="people" className="form-label">
                    Number of People
                  </label>
                  <input
                    type="number"
                    className={`form-control py-2 ${
                      errors.people ? "is-invalid" : ""
                    }`}
                    id="people"
                    name="people"
                    value={formData.people}
                    onChange={handleInputChange}
                    min="1"
                    required
                  />
                  {errors.people && (
                    <div className="invalid-feedback">{errors.people}</div>
                  )}
                </div>
                <div className="col-12">
                  <div className="form-check mb-3">
                    <input
                      className={`form-check-input ${
                        errors.agree ? "is-invalid" : ""
                      }`}
                      type="checkbox"
                      id="agree"
                      name="agree"
                      checked={formData.agree}
                      onChange={handleInputChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="agree">
                      I agree to the terms and conditions.
                    </label>
                    {errors.agree && (
                      <div className="invalid-feedback">{errors.agree}</div>
                    )}
                  </div>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className=" w-100 tp-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span
                        className="spinner-border spinner-border-sm me-2 "
                        role="status"
                        aria-hidden="true"
                      ></span>
                    ) : (
                      <>
                        Submit <i className="fal fa-long-arrow-right"></i>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
