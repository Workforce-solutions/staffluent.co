import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Check, X } from "lucide-react";

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState('monthly');

    const plans = [
        {
            name: "Free plan",
            price: { monthly: "$0", yearly: "$0" },
            description: "Basic tools to get you started.",
            features: [
                { name: "Task Management", included: true },
                { name: "Data Encryption", included: true },
                { name: "Custom Workflows", included: true },
                { name: "Deadline Alerts", included: false },
                { name: "Real-Time Sync", included: false },
                { name: "Collaboration Tools", included: false }
            ]
        },
        {
            name: "Pro plan",
            popular: true,
            price: { monthly: "$10", yearly: "$96" },
            description: "Advanced tools for productivity.",
            features: [
                { name: "Task Management", included: true },
                { name: "Data Encryption", included: true },
                { name: "Custom Workflows", included: true },
                { name: "Deadline Alerts", included: true },
                { name: "Real-Time Sync", included: false },
                { name: "Collaboration Tools", included: false }
            ]
        },
        {
            name: "Enterprise plan",
            price: { monthly: "$19", yearly: "$180" },
            description: "Comprehensive solutions for teams.",
            features: [
                { name: "Task Management", included: true },
                { name: "Data Encryption", included: true },
                { name: "Custom Workflows", included: true },
                { name: "Deadline Alerts", included: true },
                { name: "Real-Time Sync", included: true },
                { name: "Collaboration Tools", included: true }
            ]
        }
    ];

    const includedFeatures = [
        "Task Management",
        "Real-time Collaboration",
        "Document Sharing",
        "Client Communication"
    ];

    return (
        <section className="py-20" id="pricing">
            <div className="max-w-[1200px] mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-[#F8FAFC] border border-[#DEE5ED] rounded-full px-4 py-2 mb-4">
                        <Image src="/api/placeholder/24/24" alt="Pricing icon" width={24} height={24} className="mr-2" />
                        <span className="text-[#1c1c1c]">Pricing</span>
                    </div>
                    <h2 className="text-4xl font-bold mb-4">Flexible Pricing Plans</h2>
                    <p className="text-[#3d495b]">
                        Elevate your SaaS product with this expertly designed template, built for SaaS growth.
                    </p>
                </div>

                {/* Billing Toggle */}
                <div className="flex justify-center mb-12">
                    <div className="bg-[#F4F7F9] rounded-xl p-1 relative">
                        <div className="flex">
                            <button
                                onClick={() => setBillingCycle('monthly')}
                                className={
                                    'px-6 py-3 rounded-xl transition-all ' +
                                    (billingCycle === 'monthly'
                                        ? 'bg-white text-[#0c0c0c] shadow-sm'
                                        : 'text-[#4c4c4c]')
                                }
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setBillingCycle('yearly')}
                                className={
                                    'px-6 py-3 rounded-xl transition-all ' +
                                    (billingCycle === 'yearly'
                                        ? 'bg-white text-[#0c0c0c] shadow-sm'
                                        : 'text-[#4c4c4c]')
                                }
                            >
                                Yearly
                            </button>
                        </div>
                        {billingCycle === 'yearly' && (
                            <div className="absolute -top-8 right-4 bg-white border border-[#DEE5ED] rounded-full py-1 px-3 text-sm transform rotate-8">
                                40% OFF on Yearly Plan
                            </div>
                        )}
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={
                                'bg-white border border-[#DEE5ED] rounded-2xl overflow-hidden ' +
                                (plan.popular ? 'shadow-lg' : '')
                            }
                        >
                            <div className="bg-[#F8FAFC] p-8 border-b border-[#DEE5ED]">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                                    {plan.popular && (
                                        <span className="bg-[#1c1c1c] text-white px-3 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                                    )}
                                </div>
                                <div className="mb-4">
                  <span className="text-5xl font-semibold">
                    {billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                  </span>
                                    <span className="text-[#3d495b] ml-2">/ per month</span>
                                </div>
                                <p className="text-[#3d495b] mb-6">{plan.description}</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-[#1c1c1c] text-white text-center py-3 rounded-xl hover:bg-black/90 transition-colors"
                                >
                                    Get started
                                </Link>
                            </div>
                            <div className="p-8">
                                <h4 className="text-xl font-semibold mb-4">What's Included</h4>
                                <div className="space-y-4">
                                    {plan.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center">
                                            {feature.included ? (
                                                <Check className="w-5 h-5 text-[#1c1c1c] mr-3" />
                                            ) : (
                                                <X className="w-5 h-5 text-[#92959E] mr-3" />
                                            )}
                                            <span className={feature.included ? 'text-[#3d495b]' : 'text-[#92959E]'}>
                        {feature.name}
                      </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* All Plans Include */}
                <div className="mt-16 text-center">
                    <h3 className="text-xl font-semibold mb-8">All Plans Include</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {includedFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-[#F8FAFC] border border-[#DEE5ED] rounded-xl px-4 py-2 flex items-center"
                            >
                                <Image
                                    src="/api/placeholder/24/24"
                                    alt={feature}
                                    width={24}
                                    height={24}
                                    className="mr-2"
                                />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;