import React from "react";
import Image from "next/image";

const About = () => {
  const stats = [
    { number: "10+", text: "Management Features" },
    { number: "100%", text: "Real-time Tracking" },
    { number: "24/7", text: "Project Monitoring" },
    { number: "360°", text: "Team Overview" },
  ];

  return (
    <section className="pt-20 w-full">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Logo and Title */}
        <div className="flex flex-col items-center mb-16 relative overflow-hidden">
          <Image
            src="https://framerusercontent.com/images/YWkjUs3TyLqowl3SfODlTHzg.png"
            alt="Staffluent - Centered Intelligence"
            width={100}
            height={100}
            className="mb-10"
          />
          <div className="blur-div"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 z-10">
            Streamline Your Project and Team Management
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#F8FAFC] border border-[#DEE5ED] rounded-2xl p-6 text-center"
            >
              <p className="text-[50px] leading-none font-semibold font-['Bricolage_Grotesque'] text-[#0c0c0c] mb-4">
                {stat.number}
              </p>
              <p className="text-[#3d495b]">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
