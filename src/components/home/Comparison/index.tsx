import React from "react";
import Image from "next/image";
import { Info, Zap } from "lucide-react";

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
    "Limited Reporting Features",
  ];

  const staffluentFeatures = [
    "Fully Customizable Tasks",
    "Real-Time Progress Updates",
    "Intuitive User Experience",
    "Automated Data Entry",
    "Smooth Tool Integrations",
    "Powerful Bulk Action Support",
    "Efficient Document Organization",
    "Detailed Reporting Insights",
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
            <h2 className="text-5xl uppercase font-bold font-['Bricolage_Grotesque'] text-[#0c0c0c]">
              Staffluent
            </h2>
          </div>
          <p className="text-[#3d495b] text-lg max-w-[600px] mx-auto">
            See how Staffluent outperforms other platforms with superior
            features, seamless integration, and unmatched efficiency.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          {/* Other Platforms */}
          <div className="bg-white rounded-xl border border-[#DEE5ED]">
            <div className="flex justify-center bg-[#F1F4F8] rounded-t-xl p-6">
              <h3 className="text-[22px] font-bold text-center text-[#0A0A0A]">
                OTHER PLATFORMS
              </h3>
            </div>
            <div className="py-6">
              {otherPlatforms.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 py-3 px-10 rounded-xl bg-white"
                >
                  <Info className="text-[#3d495b]" />
                  <span className="text-[#3d495b] text-lg font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Staffluent Features */}
          <div className="bg-white rounded-xl border border-[#DEE5ED]">
            <div className="py-6">
              {staffluentFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 py-3 px-10 rounded-xl bg-white"
                >
                  <Zap className="text-[#3d495b] fill-[#3d495b]" />
                  <span className="text-[#3d495b] text-lg font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-center bg-[#F1F4F8] rounded-b-xl p-6">
              <Image
                src="https://framerusercontent.com/images/YWkjUs3TyLqowl3SfODlTHzg.png"
                alt="Staffluent"
                width={70}
                height={70}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
