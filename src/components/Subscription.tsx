/* eslint-disable react-hooks/exhaustive-deps */
// components/Subscription.tsx
"use client";
import { BusinessFormData } from "@/app/api/external/omnigateway/types/business";
import { useSubscription } from "@/hooks/useSubscription";
import { CheckCircle, Crown, Loader } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubscriptionStepOne from "./subscription/subscription-step-one";
import SubscriptionStepTwo from "./subscription/subscription-step-two";

const PLAN_IDS = {
  basic: {
    month: process.env.NEXT_PUBLIC_STRIPE_BASIC_PLAN_MONTHLY_ID,
    year: process.env.NEXT_PUBLIC_STRIPE_BASIC_PLAN_YEARLY_ID,
  },
  professional: {
    month: process.env.NEXT_PUBLIC_STRIPE_PROFESSIONAL_PLAN_MONTHLY_ID,
    year: process.env.NEXT_PUBLIC_STRIPE_PROFESSIONAL_PLAN_YEARLY_ID,
  },
};

const Subscription = () => {
  const router = useRouter();
  const params = useSearchParams();
  const userId = params?.get("userId");
  const businessId = params?.get("businessId");

  const [billingCycle, setBillingCycle] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [step, setStep] = useState(1); // 1: Plan selection, 2: Business details
  const { updateBusinessAndSubscribe, isLoading: isSubmitting } =
    useSubscription();

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
      toast.error("Invalid access. Please complete registration first.");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  }, [userId, businessId, router]);

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    setStep(2);
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...((prev[parent as keyof BusinessFormData] as Record<
            string,
            string
          >) || {}),
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name as keyof BusinessFormData]: value,
      }));
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPlan) {
      toast.error("Please select a plan first");
      return;
    }

    if (!businessId) {
      toast.error("Missing business information");
      return;
    }

    try {
      const businessDetails = {
        businessType: formData.businessType,
        phone: formData.phone || undefined,
        address: {
          street: formData.address.street || undefined,
          cityId: formData.address.city || undefined,
          stateId: formData.address.state || undefined,
          zip: formData.address.zip || undefined,
          countryId: formData.address.country || undefined,
        },
        taxId: formData.taxId || undefined,
        vatNumber: formData.vatNumber || undefined,
      };

      const stripePriceId =
        PLAN_IDS[selectedPlan as keyof typeof PLAN_IDS][
          billingCycle === "monthly" ? "month" : "year"
        ];

      const subscription = {
        planId: stripePriceId,
        interval: billingCycle === "monthly" ? "month" : "year",
      };

      const response = await updateBusinessAndSubscribe(
        businessId,
        businessDetails,
        subscription as { planId: string; interval: "month" | "year" }
      );

      if (response.checkoutUrl) {
        // Redirect to Stripe checkout
        window.location.href = response.checkoutUrl;
      }
    } catch (error) {
      console.error("Error submitting subscription:", error);
      toast.error(
        "There was a problem updating your subscription. Please try again."
      );
    }
  };

  // Don't render anything substantial if we don't have the required parameters
  if (!userId || !businessId) {
    return (
      <section className="md:py-10 py-10">
        <ToastContainer position="top-right" autoClose={5000} />
        <div className="max-w-[1200px] mx-auto px-4 flex justify-center items-center min-h-[60vh]">
          <div className="text-center">
            <Loader className="w-12 h-12 text-[#0A0A0A] animate-spin mx-auto mb-4" />
            <p className="text-[#3d495b]">Redirecting...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="md:py-10 py-10">
      <ToastContainer position="top-right" autoClose={5000} />
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
            <div
              className={`rounded-full w-8 h-8 flex items-center justify-center ${step === 1 ? "bg-[#0A0A0A] text-white" : "bg-green-500 text-white"}`}
            >
              {step > 1 ? <CheckCircle size={16} /> : 1}
            </div>
            <div className="w-16 h-1 bg-gray-200">
              <div
                className={`h-full ${step > 1 ? "bg-green-500" : "bg-gray-200"}`}
              ></div>
            </div>
            <div
              className={`rounded-full w-8 h-8 flex items-center justify-center ${step === 2 ? "bg-[#0A0A0A] text-white" : "bg-gray-200"}`}
            >
              2
            </div>
          </div>
        </div>

        {step === 1 && (
          <SubscriptionStepOne
            {...{ billingCycle, setBillingCycle, handlePlanSelect }}
          />
        )}

        {step === 2 && (
          <SubscriptionStepTwo
            {...{
              billingCycle,
              formData,
              handleFormChange,
              handleSubmit,
              selectedPlan,
              setStep,
              isSubmitting,
            }}
          />
        )}
      </div>
    </section>
  );
};

export default Subscription;
