import React from "react";

const StatsSection = () => {
  const stats = [
    {
      value: "10+",
      label: "Core Features",
      description:
          "From project management to performance analytics, our platform offers comprehensive tools for modern team collaboration.",
    },
    {
      value: "24/7",
      label: "Real-time Tracking",
      description:
          "Monitor project progress, team performance, and key metrics in real-time with our advanced tracking capabilities.",
    },
    {
      value: "360°",
      label: "Team Overview",
      description:
          "Get complete visibility of your team's activities, projects, and performance with our comprehensive dashboard.",
    },
    {
      value: "100%",
      label: "Integration",
      description:
          "Seamlessly connect project management, time tracking, and client communication in one unified platform.",
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
