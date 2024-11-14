import React from "react";

const StatsSection = () => {
  const stats = [
    {
      value: "50M+",
      label: "Global users",
      description:
        "We offer flexible pricing plans tailoned to meet the need of diffrent business. our pricing inculed mothly and annual",
    },
    {
      value: "$100M+",
      label: "Capital raised",
      description:
        "We offer flexible pricing plans tailoned to meet the need of diffrent business. our pricing inculed mothly and annual",
    },
    {
      value: "40%",
      label: "Fast work",
      description:
        "We offer flexible pricing plans tailoned to meet the need of diffrent business. our pricing inculed mothly and annual",
    },
    {
      value: "100+",
      label: "Support team",
      description:
        "We offer flexible pricing plans tailoned to meet the need of diffrent business. our pricing inculed mothly and annual",
    },
  ];

  return (
    <div className="bg-[#F6F9FF]">
      <section className="max-w-[1200px] px-[20px] mx-auto py-16 mx-auto">
        <h2 className="text-4xl font-bold text-center text-black mb-16">
          We do this differently
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-4">
              <div className="text-5xl font-bold text-black">{stat.value}</div>
              <div className="text-2xl text-gray-600">{stat.label}</div>
              <p className="text-gray-500 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StatsSection;
