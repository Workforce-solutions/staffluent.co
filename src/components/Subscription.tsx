"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircle, Crown, XCircle, Loader, Building2 } from "lucide-react";
import { SubscriptionPlan } from "@/app/api/external/omnigateway/types/subscription-plan";
import { BusinessFormData } from "@/app/api/external/omnigateway/types/business";


const Subscription = () => {
  const router = useRouter();
  const params = useSearchParams();
  const userId = params?.get("userId");
  const businessId = params?.get("businessId");
  
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1); // 1: Plan selection, 2: Business details

  // Form state
  const [formData, setFormData] = useState<BusinessFormData>({
    businessType: "OTHER",
    phone: "",
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    },
    taxId: "",
    vatNumber: "",
  });

  // Check if the page is accessed properly
  useEffect(() => {
    if (!userId || !businessId) {
      // Redirect to homepage if missing parameters
      router.push("/");
    }
  }, [userId, businessId, router]);

  const plans = [
    {
      id: "basic",
      name: "Basic Plan",
      price: {
        monthly: "$29",
        yearly: "$23",
      },
      description:
        "Perfect for small teams getting started with staff management.",
      features: [
        { name: "Up to 10 staff members", included: true },
        { name: "Core scheduling features", included: true },
        { name: "Basic reporting", included: true },
        { name: "Email support", included: true },
        { name: "Advanced analytics", included: false },
        { name: "Custom integrations", included: false },
      ],
    },
    {
      id: "professional",
      name: "Professional Plan",
      popular: true,
      price: {
        monthly: "$49",
        yearly: "$39",
      },
      description: "Ideal for growing businesses that need advanced features.",
      features: [
        { name: "Unlimited staff members", included: true },
        { name: "Advanced scheduling", included: true },
        { name: "Comprehensive reporting", included: true },
        { name: "Priority support", included: true },
        { name: "Team management tools", included: true },
        { name: "Custom integrations", included: true },
      ],
    },
  ];

  const businessTypes = [
    { value: "RESTAURANT", label: "Restaurant" },
    { value: "BAR", label: "Bar" },
    { value: "CAFE", label: "Cafe" },
    { value: "CLUB", label: "Club" },
    { value: "RETAIL", label: "Retail" },
    { value: "CORPORATION", label: "Corporation" },
    { value: "LLC", label: "LLC" },
    { value: "SOLE_PROPRIETORSHIP", label: "Sole Proprietorship" },
    { value: "FREELANCER", label: "Freelancer" },
    { value: "STARTUP", label: "Startup" },
    { value: "OTHER", label: "Other" },
  ];

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    setStep(2);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof prev],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPlan) return;

    setIsSubmitting(true);

    try {
      // TODO: Implement the API call to update business details and subscription
      const subscriptionData: SubscriptionPlan = {
        planId: selectedPlan,
        interval: billingCycle === 'monthly' ? 'month' : 'year'
      };

      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Redirect to success page or dashboard
      router.push("/subscription-success");
    } catch (error) {
      console.error("Error submitting subscription:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white shadow-sm text-gray-900 placeholder-gray-500";

  return (
    <section className="md:py-10 py-10">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#F8FAFC] border border-[#DEE5ED] rounded-full px-4 py-2 mb-4">
            <Crown className="w-5 h-5 text-[#0A0A0A] mr-2" />
            <span className="text-[#0A0A0A]">Complete Your Setup</span>
          </div>
          <h2 className="md:text-5xl text-4xl font-bold mb-4">
            Choose Your Subscription Plan
          </h2>
          <p className="text-[#3d495b] max-w-xl text-lg mx-auto">
            Select the plan that best fits your business needs
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center">
            <div className={`rounded-full w-8 h-8 flex items-center justify-center ${step === 1 ? 'bg-[#0A0A0A] text-white' : 'bg-green-500 text-white'}`}>
              {step > 1 ? <CheckCircle size={16} /> : 1}
            </div>
            <div className="w-16 h-1 bg-gray-200">
              <div className={`h-full ${step > 1 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
            </div>
            <div className={`rounded-full w-8 h-8 flex items-center justify-center ${step === 2 ? 'bg-[#0A0A0A] text-white' : 'bg-gray-200'}`}>
              2
            </div>
          </div>
        </div>

        {step === 1 && (
          <>
            {/* Billing Toggle */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="bg-[#F4F7F9] rounded-xl p-2 border border-[#DEE5ED]">
                  <div className="flex">
                    <button
                      onClick={() => setBillingCycle("monthly")}
                      className={
                        "px-6 py-3 rounded-xl transition-all " +
                        (billingCycle === "monthly"
                          ? "bg-white text-[#0c0c0c] shadow-sm border border-[#DEE5ED]"
                          : "text-[#4c4c4c]")
                      }
                    >
                      Monthly
                    </button>
                    <button
                      onClick={() => setBillingCycle("yearly")}
                      className={
                        "px-6 py-3 rounded-xl transition-all " +
                        (billingCycle === "yearly"
                          ? "bg-white text-[#0c0c0c] shadow-sm border border-[#DEE5ED]"
                          : "text-[#4c4c4c]")
                      }
                    >
                      Yearly
                    </button>
                  </div>
                </div>

                {billingCycle === "yearly" && (
                  <div className="absolute -top-10 -right-24 md:-right-44 bg-white shadow-sm border border-[#DEE5ED] rounded-full py-1.5 px-4 text-sm whitespace-nowrap">
                    20% OFF on Yearly Plan
                  </div>
                )}
              </div>
            </div>

            {/* Trial Banner */}
            <div className="bg-[#F8FAFC] border border-[#DEE5ED] rounded-xl p-4 mb-8 text-center">
              <p className="text-[#0A0A0A] font-medium">
                All plans include your 14-day free trial
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={
                    "bg-white border border-[#DEE5ED] rounded-2xl overflow-hidden " +
                    (plan.popular ? "shadow-lg" : "")
                  }
                >
                  <div className="bg-[#F8FAFC] p-8 border-b border-[#DEE5ED]">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                      {plan.popular && (
                        <span className="bg-[#0A0A0A] text-white px-3 py-1 rounded-full text-sm">
                          Most Popular
                        </span>
                      )}
                    </div>
                    <div className="mb-4">
                      <span className="md:text-5xl text-4xl font-semibold">
                        {billingCycle === "monthly"
                          ? plan.price.monthly
                          : plan.price.yearly}
                      </span>
                      <span className="text-[#3d495b] ml-2">/ month</span>
                    </div>
                    <p className="text-[#3d495b] mb-6">{plan.description}</p>
                    <button
                      onClick={() => handlePlanSelect(plan.id)}
                      className="block w-full bg-[#0A0A0A] text-white text-center py-3 rounded-xl hover:bg-black/90 transition-colors"
                    >
                      Select Plan
                    </button>
                  </div>
                  <div className="p-8">
                    <h4 className="text-xl font-semibold mb-4">Features</h4>
                    <div className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          {feature.included ? (
                            <CheckCircle className="text-green-500 w-5 h-5 mr-3" />
                          ) : (
                            <XCircle className="text-red-500 w-5 h-5 mr-3" />
                          )}
                          <span
                            className={
                              feature.included ? "text-[#3d495b]" : "text-[#92959E]"
                            }
                          >
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {step === 2 && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-[#DEE5ED] rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Building2 className="w-6 h-6 text-[#0A0A0A] mr-2" />
                <h3 className="text-2xl font-bold">Business Details</h3>
              </div>
              
              <div className="mb-4 p-4 bg-[#F8FAFC] rounded-lg">
                <p className="text-[#3d495b]">
                  You&apos;ve selected the <span className="font-semibold">{plans.find(p => p.id === selectedPlan)?.name}</span> with {billingCycle} billing.
                </p>
              </div>

              <p className="mb-6 text-[#3d495b]">
                Please provide some additional details about your business (optional):
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Type
                    </label>
                    <select
                      name="businessType"
                      className={inputStyles}
                      value={formData.businessType}
                      onChange={handleFormChange}
                    >
                      {businessTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (123) 456-7890"
                      className={inputStyles}
                      value={formData.phone}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-3">Address Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Street Address
                      </label>
                      <input
                        type="text"
                        name="address.street"
                        className={inputStyles}
                        value={formData.address.street}
                        onChange={handleFormChange}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        name="address.city"
                        className={inputStyles}
                        value={formData.address.city}
                        onChange={handleFormChange}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        State/Province
                      </label>
                      <input
                        type="text"
                        name="address.state"
                        className={inputStyles}
                        value={formData.address.state}
                        onChange={handleFormChange}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        name="address.zip"
                        className={inputStyles}
                        value={formData.address.zip}
                        onChange={handleFormChange}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country
                      </label>
                      <input
                        type="text"
                        name="address.country"
                        className={inputStyles}
                        value={formData.address.country}
                        onChange={handleFormChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tax ID (Optional)
                    </label>
                    <input
                      type="text"
                      name="taxId"
                      className={inputStyles}
                      value={formData.taxId}
                      onChange={handleFormChange}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      VAT Number (Optional)
                    </label>
                    <input
                      type="text"
                      name="vatNumber"
                      className={inputStyles}
                      value={formData.vatNumber}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-3 border border-[#DEE5ED] rounded-xl hover:bg-gray-50"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-[#0A0A0A] text-white py-3 rounded-xl hover:bg-black/90 transition-colors flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="animate-spin mr-2" size={20} />
                        Processing...
                      </>
                    ) : (
                      "Complete Setup"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Subscription;