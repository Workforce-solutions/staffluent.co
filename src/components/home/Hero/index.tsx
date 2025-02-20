import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="pt-10 w-full overflow-x-hidden">
            <div className="max-w-[1200px] mx-auto px-4 md:px-6 flex flex-col items-center text-center">
                {/* Tag Button */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(222,229,237,0.27)] hover:bg-black/5 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-[#0A0A0A] text-base">Coordinate - Schedule - Empower</span>
                    <div className="bg-[#0A0A0A] p-1 rounded-full">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>

                {/* Main Content */}
                <div className="mt-10 mb-6">
                    <h1 className="text-[68px] md:text-[68px] leading-[1.2] font-bold font-['Bricolage_Grotesque'] text-[#0c0c0c] max-w-[800px] mx-auto">
                        Elevate Your Staff Management with Cloud-Based Solutions
                    </h1>
                    <p className="text-lg text-[#3d495b] max-w-[600px] mx-auto mt-6">
                        The ultimate staff management platform that streamlines employee tracking, shift scheduling,
                        time-off requests, and attendance—all in one unified solution.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col md:flex-row items-center gap-6 mt-10">
                    <Link
                        href="/contact"
                        className="bg-[#0A0A0A] text-white text-[17px] px-6 py-4 rounded-xl hover:bg-black/90 transition-colors w-full md:w-auto"
                    >
                        Get Started
                    </Link>

                    <div className="flex items-center gap-3">
                        <div className="flex">
                            <div className="flex -space-x-2">
                                <Image
                                    src="https://framerusercontent.com/images/VLgy4LHFmPRcroCjnlXTid9rvcc.png"
                                    alt="Team member"
                                    width={32}
                                    height={32}
                                    className="rounded-full border-2 border-white relative z-30"
                                />
                                <Image
                                    src="https://framerusercontent.com/images/UENPQ6M5gthstqeACgcVeN76TZk.png"
                                    alt="Team member"
                                    width={32}
                                    height={32}
                                    className="rounded-full border-2 border-white relative z-20"
                                />
                                <Image
                                    src="https://framerusercontent.com/images/prQs9tObWVtpStifstN0OexkE.png"
                                    alt="Team member"
                                    width={32}
                                    height={32}
                                    className="rounded-full border-2 border-white relative z-10"
                                />
                            </div>
                        </div>
                        <span className="text-[#3d495b] text-base">How it works</span>
                    </div>
                </div>

                {/* Dashboard and Features combined container for proper overlap */}
                <div className="relative w-full mt-20">
                    {/* Dashboard Preview */}
                    <div className="w-[min(90vw,1140px)] mx-auto backdrop-blur-[6px] bg-gradient-to-b from-white to-white/20 rounded-[24px] p-1.5 shadow-lg">
                        <div className="w-full overflow-hidden rounded-[20px] bg-white">
                            <Image
                                src="https://framerusercontent.com/images/6R7Itar4Nwn8lsiojWr72ZW1uKk.png?scale-down-to=1024"
                                alt="Dashboard Preview"
                                width={1140}
                                height={600}
                                className="w-full h-auto"
                                priority
                            />
                        </div>
                    </div>

                    {/* Features Section - positioned for proper overlap */}
                    <div className="w-full mt-[-80px] relative z-10">
                        <div className="w-full bg-[#111111] rounded-[48px] pt-12 pb-16 px-4 md:px-20">
                            {/* Caption */}
                            <div className="flex items-center justify-center gap-2 bg-[#1E1E1E] text-white px-4 py-2.5 rounded-full w-fit mx-auto mb-12">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                    <path d="M6 12L10 16L18 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p className="text-[17px] text-white">
                                    Unlock smarter productivity with AI-driven tools, personalized workflows, and seamless collaboration.
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
                                {[
                                    {
                                        title: "Smart Task Prioritization with AI Insights",
                                        icon: "brain",
                                        url: "https://framerusercontent.com/images/sh29Ss025KGjtLmfxytiazc4EeI.svg"
                                    },
                                    {
                                        title: "Unified Workspace for Teamwork",
                                        icon: "users",
                                        url: "https://framerusercontent.com/images/TFPLWOVt43fxJQ2k2LQqnAd3Obs.svg"
                                    },
                                    {
                                        title: "Advanced Project Tracking & Analytics",
                                        icon: "chart",
                                        url:"https://framerusercontent.com/images/484M7kHBnbIGJMAnW6e3OEVKI.svg"
                                    },
                                    {
                                        title: "Real-time Sync Across All Devices",
                                        icon: "sync",
                                        url: "https://framerusercontent.com/images/wpnZoP3QjADuGfntbYdd3adrVpg.svg"
                                    }
                                ].map((feature, index) => (
                                    <div key={feature.title} className="relative">
                                        {index > 0 && (
                                            <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-20 bg-[#2A2A2A]" />
                                        )}
                                        <div className="flex flex-col items-center gap-4 px-4">
                                            <div className="w-12 h-12 rounded-full bg-[#1E1E1E] flex items-center justify-center">
                                                <Image
                                                    src={feature.url}
                                                    alt={feature.icon}
                                                    width={20}
                                                    height={20}
                                                    className="w-5 h-5"
                                                />
                                            </div>
                                            <p className="text-white text-center text-[17px] max-w-[200px]">
                                                {feature.title}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;