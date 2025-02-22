"use client";
import { useState } from "react";
import { Loader, CheckCircle, Star } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import { useTrialRegistration } from "@/hooks/useTrialRegistration";
import type { TrialRegistrationFormData } from "@/app/api/external/omnigateway/types/trial-registration";

interface FormErrors {
  [key: string]: string;
}

const RegisterTrial = () => {
  const [formData, setFormData] = useState<TrialRegistrationFormData>({
    fullName: "",
    businessEmail: "",
    businessName: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const { registerTrial, isLoading } = useTrialRegistration();

  const trialBenefits = [
    "Full Access to All Features",
    "Real-Time Project Monitoring",
    "AI-Powered Task Management",
    "Customizable Dashboards",
    "Team Collaboration Tools",
    "Premium Support"
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = "Business name is required";
    }

    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.businessEmail)) {
      newErrors.businessEmail = "Please enter a valid email";
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
      await registerTrial(formData);
      setFormData({
        fullName: "",
        businessEmail: "",
        businessName: "",
      });
    } catch {
      // Error handling is done in the hook
    }
  };

  const inputStyles =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white shadow-sm text-gray-900 placeholder-gray-500";
  const errorStyles = "text-red-500 text-sm mt-1";

  return (
    <div className="bg-[#F8FAFC] py-16">
      <ToastContainer position="top-right" autoClose={5000} />
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#DEE5ED] bg-white mb-6">
            <Star className="h-5 w-5" />
            <span className="text-[#0A0A0A] text-base">Free Trial</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#0A0A0A]">
            Start Optimizing Your Business Today
          </h1>
          <p className="text-[#3D495B] text-lg max-w-2xl mx-auto mb-8">
            Experience the full power of Staffluent with our comprehensive trial. 
            No credit card required.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
            {[
              { number: "14 Days", text: "Full Access" },
              { number: "24/7", text: "Premium Support" },
              { number: "100%", text: "Features Included" },
              { number: "0", text: "Credit Card Required" }
            ].map((stat, index) => (
              <div key={index} className="bg-white border border-[#DEE5ED] rounded-2xl p-4 text-center">
                <p className="text-2xl font-semibold text-[#0c0c0c] mb-2">{stat.number}</p>
                <p className="text-[#3d495b] text-sm">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form Section */}
          <div className="bg-white p-8 rounded-2xl border border-[#DEE5ED] shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Register for Free Trial</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  className={`${inputStyles} ${errors.fullName ? "border-red-500" : ""}`}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
                {errors.fullName && <p className={errorStyles}>{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Company Name"
                  className={`${inputStyles} ${errors.businessName ? "border-red-500" : ""}`}
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                />
                {errors.businessName && <p className={errorStyles}>{errors.businessName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className={`${inputStyles} ${errors.businessEmail ? "border-red-500" : ""}`}
                  value={formData.businessEmail}
                  onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                />
                {errors.businessEmail && <p className={errorStyles}>{errors.businessEmail}</p>}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 px-6 rounded-lg text-lg font-medium shadow-sm flex items-center justify-center gap-2
                  ${isLoading ? "bg-[#0A0A0A] cursor-not-allowed" : "bg-[#0A0A0A] hover:bg-[#171717]"} 
                  text-white transition-colors`}
              >
                {isLoading ? (
                  <>
                    <Loader className="animate-spin" size={20} />
                    Processing...
                  </>
                ) : (
                  "Start Free Trial"
                )}
              </button>
            </form>
          </div>

          {/* Benefits Section */}
          <div className="bg-white p-8 rounded-2xl border border-[#DEE5ED] shadow-sm">
            <h2 className="text-2xl font-bold mb-6">What's Included</h2>
            <div className="space-y-4">
              {trialBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#0A0A0A] rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#3D495B]">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-[#F8FAFC] rounded-lg border border-[#DEE5ED]">
              <h3 className="font-semibold mb-2">After Registration:</h3>
              <ol className="list-decimal list-inside space-y-2 text-[#3D495B]">
                <li>Check your email for verification link</li>
                <li>Complete email verification</li>
                <li>Set up your account password</li>
                <li>Choose your preferred plan</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterTrial;