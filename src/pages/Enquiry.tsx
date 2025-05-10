import { useState } from 'react';
import { motion } from 'framer-motion';

interface EnquiryFormData {
  enquiryType: 'Channel Partner' | 'Business Associate';
  name: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  email: string;
  hasSolarExperience: 'Yes' | 'No';
  sellProposal: string;
  companyName: string;
  businessType: string[];
  otherBusiness: string;
  agencyCompanyName: string;
  timeframe: 'Within 1 WEEK' | 'Within 1 MONTH' | 'Next 3 MONTHS' | 'No Solid time frame, just ENQUIRING';
  remarks: string;
}

const initialFormData: EnquiryFormData = {
  enquiryType: 'Channel Partner',
  name: '',
  city: '',
  state: '',
  address: '',
  phone: '',
  email: '',
  hasSolarExperience: 'No',
  sellProposal: '',
  companyName: '',
  businessType: [],
  otherBusiness: '',
  agencyCompanyName: '',
  timeframe: 'Within 1 WEEK',
  remarks: ''
};

const Enquiry = () => {
  const [formData, setFormData] = useState<EnquiryFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<EnquiryFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const validateForm = (): boolean => {
    const newErrors: Partial<EnquiryFormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    
    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.hasSolarExperience === 'No' && !formData.sellProposal.trim()) {
      newErrors.sellProposal = 'Please explain how you propose to sell';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Updated handleSubmit function with inline status messages
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submission attempted");
    
    // Reset status message
    setSubmitStatus(null);
    
    if (validateForm()) {
      try {
        setIsSubmitting(true);
        console.log("Form validated successfully, sending data...");
        
        // Prepare form data for Web3Forms
        const formDataToSend = new FormData();
        
        // Add your Web3Forms access key - replace with your actual access key
        formDataToSend.append("access_key", "a44157d3-745c-4fea-858e-f562633ebfaf");
        
        // Add form fields
        formDataToSend.append("enquiryType", formData.enquiryType);
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("phone", formData.phone);
        formDataToSend.append("address", `${formData.address}, ${formData.city}, ${formData.state}`);
        formDataToSend.append("hasSolarExperience", formData.hasSolarExperience);
        formDataToSend.append("sellProposal", formData.sellProposal);
        formDataToSend.append("businessType", formData.businessType.join(', '));
        formDataToSend.append("timeframe", formData.timeframe);
        formDataToSend.append("remarks", formData.remarks);
        
        // Optional: Add subject line
        formDataToSend.append("subject", `New Enquiry from ${formData.name}`);
        
        // Optional: Add from_name (will appear in email headers)
        formDataToSend.append("from_name", "Solar Website Enquiry");
        
        // Honeypot field to prevent spam
        formDataToSend.append("botcheck", "");
        
        // Convert FormData to JSON
        const object = Object.fromEntries(formDataToSend);
        const json = JSON.stringify(object);
        
        console.log("Sending data to Web3Forms:", object);
        
        // Send data to Web3Forms API
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then(res => res.json());
        
        console.log("Response from Web3Forms:", response);
        
        if (response.success) {
          // Set success status instead of alert
          setSubmitStatus({
            success: true,
            message: 'Your enquiry has been submitted successfully! We will get back to you soon.'
          });
          setFormData(initialFormData);
          setErrors({});
          
          // Scroll to top of form to show success message
          window.scrollTo({ top: document.getElementById('enquiry-form')?.offsetTop || 0, behavior: 'smooth' });
        } else {
          throw new Error(response.message || "Something went wrong");
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        // Set error status instead of alert
        setSubmitStatus({
          success: false,
          message: `Failed to submit enquiry: ${error instanceof Error ? error.message : 'Unknown error'}`
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      console.log("Form validation failed", errors);
      // Set validation error status instead of alert
      setSubmitStatus({
        success: false,
        message: 'Please fill all required fields correctly.'
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof EnquiryFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      businessType: checked 
        ? Array.from(new Set([...prev.businessType, value]))
        : prev.businessType.filter(type => type !== value)
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-white to-primary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 relative py-16"
          style={{
            backgroundImage: 'url("/assets/img1.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 'auto',
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-white mb-4">Apply For Business Partner Program </h1>
            <p className="text-xl text-gray-200">
              Interested in becoming a Partner? Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-soft p-8"
        >
          {/* Status message display */}
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 mb-6 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {submitStatus.success ? (
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </div>
                <div className="ml-auto pl-3">
                  <div className="-mx-1.5 -my-1.5">
                    <button
                      onClick={() => setSubmitStatus(null)}
                      className="inline-flex rounded-md p-1.5 text-gray-500 hover:bg-gray-100 focus:outline-none"
                    >
                      <span className="sr-only">Dismiss</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          <form id="enquiry-form" onSubmit={handleSubmit} className="space-y-6">
            {/* Form fields remain the same */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Enquiry For *</label>
              <div className="flex space-x-4">
                {['Channel Partner', 'Business Associate'].map((type) => (
                  <label key={type} className="inline-flex items-center">
                    <input
                      type="radio"
                      name="enquiryType"
                      value={type}
                      checked={formData.enquiryType === type}
                      onChange={handleRadioChange}
                      className="form-radio h-4 w-4 text-primary-600"
                    />
                    <span className="ml-2">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Add similar error message displays for other fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  City/District *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Enter your city/district"
                />
                {errors.city && (
                  <p className="mt-1 text-sm text-red-600">{errors.city}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                  State *
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${errors.state ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Enter your state"
                />
                {errors.state && (
                  <p className="mt-1 text-sm text-red-600">{errors.state}</p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Contact No. *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Enter your contact number"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Full Address *
              </label>
              <textarea
                id="address"
                name="address"
                rows={3}
                value={formData.address}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter your full address"
              ></textarea>
              {errors.address && (
                <p className="mt-1 text-sm text-red-600">{errors.address}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email ID *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Do you have Experience in Solar? *</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="hasSolarExperience"
                    value="Yes"
                    checked={formData.hasSolarExperience === 'Yes'}
                    onChange={handleRadioChange}
                    className="form-radio h-4 w-4 text-primary-600"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="hasSolarExperience"
                    value="No"
                    checked={formData.hasSolarExperience === 'No'}
                    onChange={handleRadioChange}
                    className="form-radio h-4 w-4 text-primary-600"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>

            {formData.hasSolarExperience === 'No' && (
              <div>
                <label htmlFor="sellProposal" className="block text-sm font-medium text-gray-700 mb-1">
                  If NO, then how do you propose to Sell? *
                </label>
                <textarea
                  id="sellProposal"
                  name="sellProposal"
                  rows={2}
                  value={formData.sellProposal}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${errors.sellProposal ? 'border-red-500' : 'border-gray-300'}`}
                ></textarea>
                {errors.sellProposal && (
                  <p className="mt-1 text-sm text-red-600">{errors.sellProposal}</p>
                )}
              </div>
            )}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Describe Your Business</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="businessType"
                    value="EPC Company / Installer"
                    checked={formData.businessType.includes("EPC Company / Installer")}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-4 w-4 text-primary-600"
                  />
                  <span className="ml-2">EPC Company / Installer</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="businessType"
                    value="Manufacturer"
                    checked={formData.businessType.includes('Manufacturer')}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-4 w-4 text-primary-600"
                  />
                  <span className="ml-2">Manufacturer</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="businessType"
                    value="Trader/ Distributor"
                    checked={formData.businessType.includes('Trader/ Distributor')}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-4 w-4 text-primary-600"
                  />
                  <span className="ml-2">Trader/ Distributor</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="businessType"
                    value="Govt. Projects"
                    checked={formData.businessType.includes('Govt. Projects')}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-4 w-4 text-primary-600"
                  />
                  <span className="ml-2">Govt. Projects</span>
                </label>
              </div>
            </div>
                      <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">When do you plan to finalize your partnership with us? *</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="timeframe"
                    value="Within 1 WEEK"
                    checked={formData.timeframe === 'Within 1 WEEK'}
                    onChange={handleRadioChange}
                    className="form-radio h-4 w-4 text-primary-600"
                  />
                  <span className="ml-2">Within 1 WEEK</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="timeframe"
                    value="Within 1 MONTH"
                    checked={formData.timeframe === 'Within 1 MONTH'}
                    onChange={handleRadioChange}
                    className="form-radio h-4 w-4 text-primary-600"
                  />
                  <span className="ml-2">Within 1 MONTH</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="timeframe"
                    value="Next 3 MONTHS"
                    checked={formData.timeframe === 'Next 3 MONTHS'}
                    onChange={handleRadioChange}
                    className="form-radio h-4 w-4 text-primary-600"
                  />
                  <span className="ml-2">Next 3 MONTHS</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="timeframe"
                    value="No Solid time frame, just ENQUIRING"
                    checked={formData.timeframe === 'No Solid time frame, just ENQUIRING'}
                    onChange={handleRadioChange}
                    className="form-radio h-4 w-4 text-primary-600"
                  />
                  <span className="ml-2">No Solid time frame, just ENQUIRING</span>
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="remarks" className="block text-sm font-medium text-gray-700 mb-1">
                Remarks :
              </label>
              <textarea
                id="remarks"
                name="remarks"
                rows={3}
                value={formData.remarks}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              ></textarea>
            </div>

            <div className="text-center">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className={`inline-block bg-gradient-to-r from-primary-500 to-primary-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-primary-600 hover:to-primary-800'}`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </div>
                ) : 'Submit Form'}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Enquiry;
