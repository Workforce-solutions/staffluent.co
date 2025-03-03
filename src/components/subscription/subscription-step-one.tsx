import { plans } from "@/constants/subscription-data";
import { CheckCircle, XCircle } from "lucide-react";
import React from "react";

export interface SubscriptionStepProps {
  billingCycle: string;
  setBillingCycle: (value: string) => void;
  handlePlanSelect?: (planId: string) => void;
}

const SubscriptionStepOne = ({
  billingCycle,
  setBillingCycle,
  handlePlanSelect,
}: SubscriptionStepProps) => {
  return (
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
                onClick={() => handlePlanSelect?.(plan.id)}
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
  );
};

export default SubscriptionStepOne;
