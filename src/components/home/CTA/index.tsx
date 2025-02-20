import React from "react";
import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  const features = [
    {
      text: "Instant Access",
      icon: "https://framerusercontent.com/images/y614ZOn5y3YhoWTwrEfyfwT6SOo.svg",
    },
    {
      text: "Boost Productivity",
      icon: "https://framerusercontent.com/images/y614ZOn5y3YhoWTwrEfyfwT6SOo.svg",
    },
    {
      text: "Easy Setup",
      icon: "https://framerusercontent.com/images/y614ZOn5y3YhoWTwrEfyfwT6SOo.svg",
    },
  ];

  return (
    <section className="py-20 relative" id="cta">
      <div className="max-w-[1200px] mx-auto px-4 relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://framerusercontent.com/images/OLqV2585eiBQ9OxbcpOqkJzPuYQ.svg"
            alt="Staffluent - Centered Intelligence"
            fill
            className="object-cover rounded-3xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Text Content */}
          <div className="max-w-3xl text-center lg:text-left px-10 py-14 rounded-xl">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simply Better Project & Team Management
            </h3>
            <p className="text-[#DDE5ED] text-lg mb-6">
              All your workflow needs in one powerful platform. Join companies
              that have transformed how they work, track, and collaborate.
            </p>

            {/* Features */}
            <div className="flex flex-col md:flex-row gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full p-2"
                >
                  <div className="w-6 h-6 relative">
                    <Image
                      src={feature.icon}
                      alt={feature.text}
                      width={24}
                      height={24}
                      className="w-full h-full"
                    />
                  </div>
                  <span className="text-white font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow and Button */}
          <div className="flex items-center justify-center my-auto gap-4">
            {/* Curved Arrow */}
            <Image
              src="https://framerusercontent.com/images/Pht5ouuJ9vLestX5AiQRKct5PuM.svg"
              alt="Staffluent - Centered Intelligence"
              width={48}
              height={48}
              className="w-full h-full mb-28"
            />
            <Link
              href="/request-demo"
              style={{width: "120%"}}
              className="bg-white text-[#262626] px-8 py-4 rounded-xl hover:bg-white/90 transition-colors text-lg font-medium w-full"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
