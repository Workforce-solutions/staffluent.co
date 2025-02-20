import React from 'react';
import Image from "next/image";

const Comparison = () => {
    // Features lists for comparison
    const otherPlatforms = [
        "Limited Task Customization",
        "Slow Progress Tracking",
        "Complex User Interface",
        "Manual Data Entry Required",
        "Lack of Seamless Integration",
        "No Bulk Actions Support",
        "Inconsistent Document Management",
        "Limited Reporting Features"
    ];

    const staffluentFeatures = [
        "Fully Customizable Tasks",
        "Real-Time Progress Updates",
        "Intuitive User Experience",
        "Automated Data Entry",
        "Smooth Tool Integrations",
        "Powerful Bulk Action Support",
        "Efficient Document Organization",
        "Detailed Reporting Insights"
    ];

    return (
        <section className="py-20" id="comparison">
            <div className="max-w-[1200px] mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16 max-w-[800px] mx-auto">
                    <div className="flex justify-center items-center gap-8 mb-8">
                        <div className="text-center">
                            <h2 className="text-[33px] uppercase font-bold font-['Bricolage_Grotesque'] text-[#0c0c0c]">
                                Other
                            </h2>
                            <h2 className="text-[33px] uppercase font-bold font-['Bricolage_Grotesque'] text-[#0c0c0c]">
                                Platforms
                            </h2>
                        </div>
                        <div className="relative w-20 h-20">
                            <Image
                                src="/api/placeholder/80/80"
                                alt="VS"
                                width={80}
                                height={80}
                            />
                        </div>
                        <Image
                            src="/api/placeholder/60/60"
                            alt="Staffluent Logo"
                            width={60}
                            height={60}
                            className="rounded-xl"
                        />
                    </div>
                    <p className="text-[#3d495b] text-lg">
                        See how Staffluent outperforms other platforms with superior features, seamless integration, and unmatched efficiency.
                    </p>
                </div>

                {/* Comparison Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
                    {/* Other Platforms */}
                    <div className="bg-white p-6 rounded-xl border border-[#DEE5ED]">
                        <h3 className="text-[22px] font-bold text-center text-[#0A0A0A] mb-6">
                            OTHER PLATFORMS
                        </h3>
                        <div className="space-y-4">
                            {otherPlatforms.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 p-4 rounded-xl bg-white"
                                >
                                    <div className="w-6 h-6">
                                        <Image
                                            src="/api/placeholder/24/24"
                                            alt="X"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <span className="text-[#3d495b] text-lg font-medium">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Staffluent Features */}
                    <div className="bg-white p-6 rounded-xl border border-[#DEE5ED]">
                        <div className="flex justify-center mb-6">
                            <Image
                                src="/api/placeholder/60/60"
                                alt="Staffluent"
                                width={60}
                                height={60}
                                className="rounded-xl"
                            />
                        </div>
                        <div className="space-y-4">
                            {staffluentFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 p-4 rounded-xl bg-[#F8FAFC]"
                                >
                                    <div className="w-6 h-6">
                                        <Image
                                            src="/api/placeholder/24/24"
                                            alt="Check"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <span className="text-[#262626] text-lg font-medium">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;