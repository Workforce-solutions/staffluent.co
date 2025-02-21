"use client";
import { useState } from "react";
import { Mail, Loader, CheckCircle } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSubmissions } from "@/hooks/useSubmissions";
import { SubmissionType } from "@/app/api/external/omnigateway/types/submissions";

interface FormData {
  companyName: string;
  businessType: string;
  teamSize: string;
  contactPerson: string;
  email: string;
  phone: string;
  interestedFeatures: string[];
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const RegisterTrial = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    businessType: "",
    teamSize: "",
    contactPerson: "",
    email: "",
    phone: "",
    interestedFeatures: [],
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const { submitForm, isLoading: isSubmitting } = useSubmissions();

  const teamSizes = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-500 employees",
    "500+ employees",
  ];

  const featureOptions = [
    "Workforce Management",
    "Time & Attendance",
    "Project Management",
    "Performance Analytics",
    "Client Portal",
    "Service Management",
    "Team Collaboration",
    "Reporting & Analytics",
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!formData.businessType.trim()) {
      newErrors.businessType = "Business type is required";
    }

    if (!formData.teamSize) {
      newErrors.teamSize = "Please select team size";
    }

    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = "Contact person is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (formData.interestedFeatures.length === 0) {
      newErrors.interestedFeatures = "Please select at least one feature";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please check the form for errors");
      return;
    }

    try {
      // Split contact person into first and last name
      const nameParts = formData.contactPerson.trim().split(" ");
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(" ");

      await submitForm({
        firstName,
        lastName,
        email: formData.email,
        phone: formData.phone,
        content: formData.message,
        type: SubmissionType.REQUEST_DEMO,
        metadata: {
          companyName: formData.companyName,
          businessType: formData.businessType,
          teamSize: formData.teamSize,
          interestedFeatures: formData.interestedFeatures,
          timestamp: new Date(),
          userAgent: window.navigator.userAgent,
          ipHash: "", // This will be handled by the backend
        },
      });

      setFormData({
        companyName: "",
        businessType: "",
        teamSize: "",
        contactPerson: "",
        email: "",
        phone: "",
        interestedFeatures: [],
        message: "",
      });
    } catch {
      // Error handling is done in the hook
    }
  };

  const inputStyles =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white shadow-sm text-gray-900 placeholder-gray-500";
  const errorStyles = "text-red-500 text-sm mt-1";

  return (
    <div className="bg-gray-50 py-16">
      <ToastContainer position="top-right" autoClose={5000} />
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Start Optimizing Your Business Today
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Learn how Staffluent can help streamline your operations, boost team
            productivity, and improve project management efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">
                Why Choose Staffluent
              </h3>

              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="font-medium flex items-center gap-2 text-gray-800">
                    <CheckCircle className="text-green-500" size={20} />
                    Comprehensive Management Suite
                  </p>
                  <p className="font-medium flex items-center gap-2 text-gray-800">
                    <CheckCircle className="text-green-500" size={20} />
                    Real-time Analytics
                  </p>
                  <p className="font-medium flex items-center gap-2 text-gray-800">
                    <CheckCircle className="text-green-500" size={20} />
                    Team Collaboration Tools
                  </p>
                  <p className="font-medium flex items-center gap-2 text-gray-800">
                    <CheckCircle className="text-green-500" size={20} />
                    Custom Integration Options
                  </p>
                  <p className="font-medium flex items-center gap-2 text-gray-800">
                    <CheckCircle className="text-green-500" size={20} />
                    24/7 Technical Support
                  </p>
                </div>

                <div className="pt-6 border-t">
                  <p className="font-medium text-gray-900">Contact Support:</p>
                  <a
                    href="mailto:support@staffluent.co"
                    className="text-[#0A0A0A] hover:text-[#171717] flex items-center gap-2 mt-2"
                  >
                    <Mail size={20} />
                    support@staffluent.co
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Request Demo Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  className={`${inputStyles} ${
                    errors.companyName ? "border-red-500" : ""
                  }`}
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData({ ...formData, companyName: e.target.value })
                  }
                />
                {errors.companyName && (
                  <p className={errorStyles}>{errors.companyName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Type *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Technology, Construction, Retail"
                  className={`${inputStyles} ${
                    errors.businessType ? "border-red-500" : ""
                  }`}
                  value={formData.businessType}
                  onChange={(e) =>
                    setFormData({ ...formData, businessType: e.target.value })
                  }
                />
                {errors.businessType && (
                  <p className={errorStyles}>{errors.businessType}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Team Size *
                </label>
                <select
                  required
                  className={`${inputStyles} ${
                    errors.teamSize ? "border-red-500" : ""
                  }`}
                  value={formData.teamSize}
                  onChange={(e) =>
                    setFormData({ ...formData, teamSize: e.target.value })
                  }
                >
                  <option value="">Select team size</option>
                  {teamSizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
                {errors.teamSize && (
                  <p className={errorStyles}>{errors.teamSize}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Person *
                </label>
                <input
                  type="text"
                  required
                  className={`${inputStyles} ${
                    errors.contactPerson ? "border-red-500" : ""
                  }`}
                  value={formData.contactPerson}
                  onChange={(e) =>
                    setFormData({ ...formData, contactPerson: e.target.value })
                  }
                />
                {errors.contactPerson && (
                  <p className={errorStyles}>{errors.contactPerson}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Email *
                </label>
                <input
                  type="email"
                  required
                  className={`${inputStyles} ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {errors.email && <p className={errorStyles}>{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className={inputStyles}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Features of Interest *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {featureOptions.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <input
                        type="checkbox"
                        id={feature}
                        value={feature}
                        className="rounded text-indigo-600 focus:ring-indigo-500"
                        onChange={(e) => {
                          const newFeatures = e.target.checked
                            ? [...formData.interestedFeatures, e.target.value]
                            : formData.interestedFeatures.filter(
                                (f) => f !== e.target.value
                              );
                          setFormData({
                            ...formData,
                            interestedFeatures: newFeatures,
                          });
                        }}
                        checked={formData.interestedFeatures.includes(feature)}
                      />
                      <label
                        htmlFor={feature}
                        className="ml-2 text-sm text-gray-700"
                      >
                        {feature}
                      </label>
                    </div>
                  ))}
                </div>
                {errors.interestedFeatures && (
                  <p className={errorStyles}>{errors.interestedFeatures}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your specific needs or challenges"
                  className={inputStyles}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg text-lg font-medium shadow-sm flex items-center justify-center gap-2
                                        ${
                                          isSubmitting
                                            ? "bg-[#0A0A0A] cursor-not-allowed"
                                            : "bg-[#0A0A0A] hover:bg-[#171717]"
                                        } 
                                        text-white transition-colors`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="animate-spin" size={20} />
                      Processing...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterTrial;
