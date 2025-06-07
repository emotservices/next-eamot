"use client";
import { useState } from "react";

export default function RequestDemoForm({ isPopup = false, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    module: "",
  });

  const modules = [
    "Asset Management",
    "Preventive Maintenance",
    "Predictive Maintenance",
    "Work Order Management",
    "Inventory Management",
    "Equipment Monitoring",
    "Compliance & Safety",
    "Energy Management",
    "Sustainability",
    "Maintenance Analytics",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add form submission logic
    console.log("Form submitted:", formData);
    if (isPopup && onClose) {
      onClose();
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={`request-demo-form ${isPopup ? "popup-form" : ""}`}>
      <div className="form-container">
        {isPopup && (
          <button className="close-button" onClick={onClose}>
            <i className="icon-close" />
          </button>
        )}
        <h2>{isPopup ? "Request a Demo" : "Get Started with EAMOT"}</h2>
        <p className="form-description">
          Experience the power of modern asset management and maintenance
          solutions
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="company"
              placeholder="Company Name *"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Work Email *"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <select
              name="module"
              value={formData.module}
              onChange={handleChange}
              required
            >
              <option value="">Select Module *</option>
              {modules.map((module, index) => (
                <option key={index} value={module}>
                  {module}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="tf-button">
            <span>Submit Request</span>
            <i className="icon-arrow-right2" />
          </button>
        </form>
      </div>
    </div>
  );
}
