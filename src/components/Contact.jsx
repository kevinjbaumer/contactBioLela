import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  XCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    serviceType: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState({ show: false, type: "", message: "" });

  const serviceTypes = [
    "Daily Assistance & Personal Care",
    "Post-Surgery Recovery Support",
    "Rehabilitation & Recovery Assistance",
    "Meal Preparation & Nutrition",
    "Medication Management",
    "Companionship & Emotional Support",
    "General Inquiry",
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.serviceType)
      newErrors.serviceType = "Please select a service type";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast({ show: false, type: "", message: "" });
    }, 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch("https://formspree.io/f/mvgqylbp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showToast("success", "Your inquiry was sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          serviceType: "",
          message: "",
        });
      } else {
        showToast(
          "error",
          "Something went wrong. Please check your details and try again."
        );
      }
    } catch (error) {
      showToast("error", "Network error. Please try again later.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <section id="contact" className="py-16 bg-white relative">
      {/* Toast Notification */}
      {toast.show && (
        <div
          className={`fixed top-4 left-4 flex items-center space-x-3 px-4 py-3 rounded shadow-lg text-white transform transition-transform duration-500 z-50 ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          } animate-slideIn`}
        >
          {toast.type === "success" ? (
            <CheckCircle className="w-5 h-5" />
          ) : (
            <XCircle className="w-5 h-5" />
          )}
          <span>{toast.message}</span>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-trust-navy mb-8 text-center">
            Contact Information
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-trust-navy mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-trust-blue" />
                    <div>
                      <p className="font-medium text-gray-800 text-sm">Phone</p>
                      <p className="text-gray-600 text-sm">+1 (401) 830-4396</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-trust-blue" />
                    <div>
                      <p className="font-medium text-gray-800 text-sm">Email</p>
                      <p className="text-gray-600 text-sm">lenapjboost.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-trust-blue" />
                    <div>
                      <p className="font-medium text-gray-800 text-sm">
                        Service Area
                      </p>
                      <p className="text-gray-600 text-sm">
                        Greater Metro Area
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-trust-blue" />
                    <div>
                      <p className="font-medium text-gray-800 text-sm">
                        Response Time
                      </p>
                      <p className="text-gray-600 text-sm">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-trust-navy mb-4">
                  Availability
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Flexible scheduling</li>
                  <li>• Emergency support</li>
                  <li>• Short & long-term care</li>
                  <li>• Respite care available</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-trust-navy mb-6">
                  Inquiry Form
                </h3>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 rounded border ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } focus:border-trust-blue focus:ring-1`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 rounded border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } focus:border-trust-blue focus:ring-1`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 rounded border ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      } focus:border-trust-blue focus:ring-1`}
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 rounded border ${
                        errors.subject ? "border-red-500" : "border-gray-300"
                      } focus:border-trust-blue focus:ring-1`}
                      placeholder="Brief subject line"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.subject}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Type *
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 rounded border ${
                      errors.serviceType ? "border-red-500" : "border-gray-300"
                    } focus:border-trust-blue focus:ring-1 bg-white`}
                  >
                    <option value="">Select a service type</option>
                    {serviceTypes.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.serviceType && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.serviceType}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-3 py-2 rounded border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } focus:border-trust-blue focus:ring-1 resize-vertical`}
                    placeholder="Please describe your care needs and requirements..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white px-6 py-3 rounded hover:bg-trust-navy transition-colors duration-200 font-medium flex items-center justify-center space-x-2"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Inquiry</span>
                </button>

                <p className="mt-3 text-xs text-gray-600 text-center">
                  * Required fields. Response within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes slideIn {
          0% { transform: translateX(-120%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default Contact;
