import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Advantages = () => {
    const features = [
        { title: "Smart Tasking", icon: "/api/placeholder/24/24" },
        { title: "Automated Scheduling", icon: "/api/placeholder/24/24" },
        { title: "AI-Powered Reminders", icon: "/api/placeholder/24/24" },
        { title: "Predictive Analytics", icon: "/api/placeholder/24/24" }
    ];

    const aiFeatures = [
        { title: "Task Management", icon: "/api/placeholder/24/24" },
        { title: "Collaboration Tools", icon: "/api/placeholder/24/24" },
        { title: "Deadline Alerts", icon: "/api/placeholder/24/24" },
        { title: "Real-Time Sync", icon: "/api/placeholder/24/24" },
        { title: "Prioritization", icon: "/api/placeholder/24/24" }
    ];

    return (
        <>
            {/* First Advantage Section */}
            <section className="py-20" id="advantage">
                <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold">
                            Why Choose Staffluent
                        </h2>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {features.map((feature) => (
                                <div
                                    key={feature.title}
                                    className="bg-[#F8FAFC] border border-[#DEE5ED] rounded-xl p-4 flex items-center gap-3"
                                >
                                    <div className="w-8 h-8 bg-[#1c1c1c] rounded-lg flex items-center justify-center">
                                        <Image
                                            src={feature.icon}
                                            alt={feature.title}
                                            width={24}
                                            height={24}
                                            className="text-white"
                                        />
                                    </div>
                                    <span className="text-[#333333]">{feature.title}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/contact"
                            className="inline-block bg-[#1c1c1c] text-white px-6 py-4 rounded-xl hover:bg-black/90 transition-colors"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Image Section */}
                    <div className="relative rounded-3xl border border-[#DEE5ED] overflow-hidden aspect-[4/3]">
                        <Image
                            src="/api/placeholder/600/450"
                            alt="Advantage illustration"
                            width={600}
                            height={450}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Second Advantage Section */}
            <section className="py-20 bg-[#F8FAFC]">
                <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="relative rounded-3xl border border-[#DEE5ED] overflow-hidden aspect-[4/3]">
                        <Image
                            src="/api/placeholder/600/450"
                            alt="AI Features illustration"
                            width={600}
                            height={450}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-bold">
                                Explore Staffluent AI-Enhanced Features
                            </h2>
                            <p className="text-[#3d495b]">
                                Discover how AI streamlines tasks, predicts needs, and boosts productivity effortlessly.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="flex flex-wrap gap-3">
                            {aiFeatures.map((feature) => (
                                <div
                                    key={feature.title}
                                    className="bg-[#F8FAFC] border border-[#DEE5ED] rounded-full py-2 px-4 flex items-center gap-2"
                                >
                                    <Image
                                        src={feature.icon}
                                        alt={feature.title}
                                        width={24}
                                        height={24}
                                    />
                                    <span>{feature.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Advantages;