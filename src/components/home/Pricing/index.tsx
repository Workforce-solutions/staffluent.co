import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Crown, XCircle } from "lucide-react";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Basic Plan",
      price: {
        monthly: "$29",
        yearly: "$23.20"
      },
      description: "Perfect for small teams getting started with project management.",
      features: [
        { name: "Core team dashboard", included: true },
        { name: "Essential project and task management", included: true },
        { name: "Time tracking and scheduling", included: true },
        { name: "Basic reports and notifications", included: true },
        { name: "Client portal access", included: false },
        { name: "Advanced integrations", included: false },
        { name: "Custom dashboards", included: false },
        { name: "Premium support", included: false },
      ]
    },
    {
      name: "Professional Plan",
      popular: true,
      price: {
        monthly: "$49",
        yearly: "$39.20"
      },
      description: "Ideal for growing businesses that need advanced features.",
      features: [
        { name: "Core team dashboard", included: true },
        { name: "Essential project and task management", included: true },
        { name: "Time tracking and scheduling", included: true },
        { name: "Advanced reporting and analytics", included: true },
        { name: "Quality inspections tracking", included: true },
        { name: "Full client portal access", included: true },
        { name: "Enhanced integrations", included: true },
        { name: "Custom dashboards", included: true },
      ]
    },
    {
      name: "Enterprise Plan",
      price: {
        monthly: "$69",
        yearly: "$55.20"
      },
      description: "The ultimate solution for large organizations.",
      features: [
        { name: "Everything in Professional", included: true },
        { name: "Dedicated account manager", included: true },
        { name: "Custom integrations", included: true },
        { name: "Multi-team management", included: true },
        { name: "Advanced security & compliance", included: true },
        { name: "White-labeling", included: true },
        { name: "Premium onboarding assistance", included: true },
        { name: "All add-on features", included: true },
      ]
    }
  ];

  const includedFeatures = [
    {
      title: "14-Day Free Trial",
      icon: "https://framerusercontent.com/images/uKcIDlgAZyRZYyVRxqM9O4CREf0.svg",
    },
    {
      title: "No Credit Card Required",
      icon: "https://framerusercontent.com/images/X9dLSrE97LggGEWbwCZN77cdSjU.svg",
    },
    {
      title: "Core Dashboard Access",
      icon: "https://framerusercontent.com/images/bvX5EBeBAMKczyExEfk9oNCsQ9A.svg",
    },
    {
      title: "Basic Task Management",
      icon: "https://framerusercontent.com/images/Z7J6959mSKIwttGnD0t9lDMpxA.svg",
    }
  ]

  return (
      <section className="md:py-10 py-10" id="pricing">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#F8FAFC] border border-[#DEE5ED] rounded-full px-4 py-2 mb-4">
              <Crown className="w-5 h-5 text-[#0A0A0A] mr-2" />
              <span className="text-[#0A0A0A]">Pricing</span>
            </div>
            <h2 className="md:text-6xl text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-[#3d495b] max-w-xl text-lg mx-auto">
              Start with a 14-day free trial. No credit card required.
            </p>
          </div>

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
                  <>
                    <svg
                        className="absolute -top-4 -right-16 w-24 h-12 text-[#DEE5ED]"
                        viewBox="0 0 96 48"
                        fill="none"
                        stroke="currentColor"
                    >
                      <path
                          d="M 10 38 C 30 38 70 38 90 10"
                          strokeWidth="2"
                          strokeLinecap="round"
                      />
                      <path
                          d="M 80 10 L 90 10 L 90 20"
                          strokeWidth="2"
                          strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute -top-10 -right-24 md:-right-44 bg-white shadow-sm border border-[#DEE5ED] rounded-full py-1.5 px-4 text-sm whitespace-nowrap">
                      20% OFF on Yearly Plan
                    </div>
                  </>
              )}
            </div>
          </div>

          {/* Trial Banner */}
          <div className="bg-[#F8FAFC] border border-[#DEE5ED] rounded-xl p-4 mb-8 text-center">
            <p className="text-[#0A0A0A] font-medium">
              Try any plan free for 14 days with full feature access. No credit card required.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
                <div
                    key={index}
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
                  <span className="md:text-6xl text-5xl font-semibold">
                    {billingCycle === "monthly" ? plan.price.monthly : plan.price.yearly}
                  </span>
                      <span className="text-[#3d495b] ml-2">/ user / month</span>
                    </div>
                    <p className="text-[#3d495b] mb-6">{plan.description}</p>
                    <Link
                        href="/contact"
                        className="block w-full bg-[#0A0A0A] text-white text-center py-3 rounded-xl hover:bg-black/90 transition-colors"
                    >
                      Start Free Trial
                    </Link>
                  </div>
                  <div className="p-8">
                    <h4 className="text-xl font-semibold mb-4">Features</h4>
                    <div className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            {feature.included ? (
                                <CheckCircle className="w-5 h-5 text-white mr-3 fill-green-500" />
                            ) : (
                                <XCircle className="w-5 h-5 text-white mr-3 fill-red-500" />
                            )}
                            <span className={feature.included ? "text-[#3d495b]" : "text-[#92959E]"}>
                        {feature.name}
                      </span>
                          </div>
                      ))}
                    </div>
                  </div>
                </div>
            ))}
          </div>

          {/* Trial Features */}
          <div className="mt-16 text-center border-t border-[#DEE5ED]">
            <h3 className="text-xl font-semibold py-6">All Plans Include</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {includedFeatures.map((feature, index) => (
                  <div
                      key={index}
                      className="bg-[#F8FAFC] border border-[#DEE5ED] rounded-xl p-2 flex gap-2 items-center"
                  >
                    <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={20}
                        height={20}
                    />
                    <span>{feature.title}</span>
                  </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-[1200px] mx-auto relative mt-16">
            <div className="absolute inset-0">
              <Image
                  src="https://framerusercontent.com/images/OLqV2585eiBQ9OxbcpOqkJzPuYQ.svg"
                  alt="Staffluent - Centered Intelligence"
                  fill
                  className="object-cover rounded-3xl"
              />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between md:gap-12">
              <div className="text-center lg:text-left px-14 py-16 rounded-xl lg:max-w-[45%]">
                <h3 className="text-3xl font-semibold text-gray-500 mb-4">
                  Start your free trial today
                </h3>
                <p className="text-gray-500 text-lg text-center lg:text-left max-w-lg mb-8">
                  Experience all premium features risk-free for 14 days, including advanced analytics, team collaboration tools, and full project management capabilities.
                </p>
                <div>
                  <Link
                      href="/contact"
                      className="inline-block bg-white text-gray-900 px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors text-lg font-medium"
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>

              <div className="lg:flex-1 flex items-end justify-end relative">
                <div className="relative">
                  <Image
                      src="https://framerusercontent.com/images/4Gs0etOnzevNvE6hc9z1SfqNYY.png"
                      alt="Staffluent - Centered Intelligence"
                      width={480}
                      height={260}
                      className="rounded-xl shadow-lg ml-auto"
                  />
                  <div className="absolute -bottom-[29%] -left-16 hidden md:block">
                    <Image
                        src="https://framerusercontent.com/images/4Gs0etOnzevNvE6hc9z1SfqNYY.png"
                        alt="Staffluent - Centered Intelligence"
                        width={700}
                        height={20}
                        className="rounded-xl shadow-lg w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
      </section>
  );
};

export default Pricing;