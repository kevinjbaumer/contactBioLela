import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    serviceType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const serviceTypes = [
    'Daily Assistance & Personal Care',
    'Post-Surgery Recovery Support',
    'Rehabilitation & Recovery Assistance',
    'Meal Preparation & Nutrition',
    'Medication Management',
    'Companionship & Emotional Support',
    'General Inquiry'
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      // Replace with your Formspree endpoint
      const response = await fetch('https://formspree.io/f/mvgqylbp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          serviceType: '',
          message: ''
        });
      } else {
        alert('There was an error submitting the form. Please try again.');
      }
    } catch (error) {
      alert('There was an error submitting the form. Please try again.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm max-w-2xl mx-auto">
              <CheckCircle className="h-16 w-16 text-trust-green mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-trust-navy mb-4">Message Received</h3>
              <p className="text-gray-700 mb-6">
                Thank you for your inquiry. I will respond within 24 hours to discuss your care needs.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-trust-blue text-white px-6 py-2 rounded hover:bg-trust-navy transition-colors duration-200"
              >
                Send Another Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-trust-navy mb-8 text-center">Contact Information</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-trust-navy mb-4">Direct Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-trust-blue flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800 text-sm">Phone</p>
                      <p className="text-gray-600 text-sm">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-trust-blue flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800 text-sm">Email</p>
                      <p className="text-gray-600 text-sm">lenapjboost@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-trust-blue flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800 text-sm">Service Area</p>
                      <p className="text-gray-600 text-sm">Greater Metro Area</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-trust-blue flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800 text-sm">Response Time</p>
                      <p className="text-gray-600 text-sm">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-trust-navy mb-4">Availability</h4>
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
              <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-trust-navy mb-6">Inquiry Form</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 rounded border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:border-trust-blue focus:ring-1 focus:ring-trust-blue outline-none`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 rounded border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-trust-blue focus:ring-1 focus:ring-trust-blue outline-none`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 rounded border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:border-trust-blue focus:ring-1 focus:ring-trust-blue outline-none`}
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 rounded border ${errors.subject ? 'border-red-500' : 'border-gray-300'} focus:border-trust-blue focus:ring-1 focus:ring-trust-blue outline-none`}
                      placeholder="Brief subject line"
                    />
                    {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Type *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 rounded border ${errors.serviceType ? 'border-red-500' : 'border-gray-300'} focus:border-trust-blue focus:ring-1 focus:ring-trust-blue outline-none bg-white`}
                  >
                    <option value="">Select a service type</option>
                    {serviceTypes.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                  {errors.serviceType && <p className="mt-1 text-xs text-red-500">{errors.serviceType}</p>}
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-3 py-2 rounded border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:border-trust-blue focus:ring-1 focus:ring-trust-blue outline-none resize-vertical`}
                    placeholder="Please describe your care needs and requirements..."
                  ></textarea>
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
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
    </section>
  );
};

export default Contact;
