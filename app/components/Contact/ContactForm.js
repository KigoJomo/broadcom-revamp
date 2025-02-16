'use client'

import React, { useState } from 'react'
import {
  LuAlertCircle as AlertCircle,
  LuCheckCircle2 as CheckCircle2,
  LuChevronRight as ChevronRight,
} from 'react-icons/lu'

// Input wrapper component for consistent styling and structure
const InputWrapper = ({ label, children, required, error, className = '' }) => (
  <div className={`mb-4 ${className}`}>
    <label className="block text-sm font-medium mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {children}
    {error && (
      <p className="mt-1 text-sm text-red-500 flex items-center">
        <AlertCircle className="w-4 h-4 mr-1" />
        {error}
      </p>
    )}
  </div>
)

const ContactForm = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredContact: 'email',
    inquiryType: '',
    subject: '',
    message: '',
    companyName: '',
    role: '',
    industry: '',
    responseTime: 'within24',
    bestTimeToReach: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when field is modified
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const validateStep = (stepNumber) => {
    const newErrors = {}

    if (stepNumber === 1) {
      if (!formData.fullName.trim())
        newErrors.fullName = 'Full name is required'
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required'
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email'
      }
    }

    if (stepNumber === 2) {
      if (!formData.inquiryType)
        newErrors.inquiryType = 'Please select an inquiry type'
      if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
      if (!formData.message.trim()) newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateStep(step)) {
      if (step < 4) {
        setStep(step + 1)
      } else {
        // Submit form
        setIsSubmitted(true)
        // Here you would typically send the data to your backend
        console.log('Form submitted:', formData)
      }
    }
  }

  const renderProgressBar = () => (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        {['Personal Details', 'Inquiry', 'Company Info', 'Preferences'].map(
          (label, index) => (
            <div
              key={label}
              className={`flex-1 text-center text-sm ${
                index + 1 === step
                  ? 'text-cyan font-medium'
                  : index + 1 < step
                  ? 'text-green-600'
                  : 'text-slate-400'
              }`}
            >
              {label}
            </div>
          )
        )}
      </div>
      <div className="h-2 bg-slate-200 rounded-full">
        <div
          className="h-full bg-cyan rounded-full transition-all duration-300"
          style={{ width: `${(step / 4) * 100}%` }}
        />
      </div>
    </div>
  )

  if (isSubmitted) {
    return (
      <div className="w-full p-6 bg-background shadow-2xl">
        <div className="text-center">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">
            Thank You for Contacting Us!
          </h2>
          <p className="text-slate-600 mb-4">
            We&apos;ve received your message and will get back to you within 24
            hours.
          </p>
          <p className="text-sm bg-slate-50 p-4 rounded">
            Your reference number:{' '}
            <span className="font-mono font-medium">
              BRD-{Date.now().toString(36).toUpperCase()}
            </span>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full p-6 bg-background shadow-2xl">
      <h1 className="text-2xl font-bold mb-6">
        Contact Broadband Communication Networks Ltd
      </h1>
      {renderProgressBar()}

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-4">
            <InputWrapper label="Full Name" required error={errors.fullName}>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </InputWrapper>

            <InputWrapper label="Email Address" required error={errors.email}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email address"
              />
            </InputWrapper>

            <InputWrapper label="Phone Number">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </InputWrapper>

            <InputWrapper label="Preferred Contact Method">
              <select
                name="preferredContact"
                value={formData.preferredContact}
                onChange={handleChange}
                className="w-full p-2 border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
              </select>
            </InputWrapper>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <InputWrapper
              label="Inquiry Type"
              required
              error={errors.inquiryType}
            >
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full p-2 border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select an inquiry type</option>
                <option value="technical">Technical Support</option>
                <option value="sales">Sales Inquiry</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="network">Network Solutions</option>
                <option value="managed">Managed Services</option>
                <option value="billing">Billing</option>
                <option value="general">General Inquiry</option>
              </select>
            </InputWrapper>

            <InputWrapper label="Subject" required error={errors.subject}>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-2 border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                maxLength={100}
                placeholder="Enter the subject of your inquiry"
              />
            </InputWrapper>

            <InputWrapper label="Message" required error={errors.message}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={4}
                placeholder="Please provide details about your inquiry"
              />
            </InputWrapper>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <InputWrapper label="Company Name">
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full p-2 border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your company name"
              />
            </InputWrapper>

            <InputWrapper label="Role">
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full p-2 border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select your role</option>
                <option value="it_manager">IT Manager</option>
                <option value="purchasing">Purchasing Manager</option>
                <option value="executive">Executive</option>
                <option value="other">Other</option>
              </select>
            </InputWrapper>

            <InputWrapper label="Industry">
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full p-2 border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select your industry</option>
                <option value="telecom">Telecommunications</option>
                <option value="finance">Finance</option>
                <option value="energy">Energy</option>
                <option value="other">Other</option>
              </select>
            </InputWrapper>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <InputWrapper label="Preferred Response Time">
              <select
                name="responseTime"
                value={formData.responseTime}
                onChange={handleChange}
                className="w-full p-2 border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="asap">As soon as possible</option>
                <option value="within24">Within 24 hours</option>
                <option value="within72">Within 2-3 days</option>
              </select>
            </InputWrapper>

            <InputWrapper label="Best Time to Reach You">
              <select
                name="bestTimeToReach"
                value={formData.bestTimeToReach}
                onChange={handleChange}
                className="w-full p-2 border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select preferred time</option>
                <option value="morning">Morning (9AM - 12PM)</option>
                <option value="afternoon">Afternoon (12PM - 5PM)</option>
                <option value="evening">Evening (5PM - 8PM)</option>
              </select>
            </InputWrapper>
          </div>
        )}

        <div className="mt-6 flex justify-between">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 text-cyan hover:text-indigo font-medium"
            >
              Back
            </button>
          )}
          <button
            type="submit"
            className={`ml-auto px-6 py-2 ${
              step === 4 ? 'bg-indigo' : 'bg-light-blue'
            } text-background hover:bg-indigo focus:ring-2 focus:ring-indigo focus:ring-offset-2 flex items-center`}
          >
            {step === 4 ? 'Submit' : 'Next'}
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
