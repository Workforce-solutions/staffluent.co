// src/components/home/Hero.tsx
"use client";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="pt-[180px] pb-0">
            <div className="max-w-[956px] mx-auto px-4 flex flex-col items-center gap-[40px] text-center">
                {/* Tag Button */}
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-full border border-[rgba(222,229,237,0.27)] bg-white/0 hover:bg-black/5 transition-colors"
                >
                    <Image
                        src="https://framerusercontent.com/images/IMr6LHJrnxrNlwu88UNWxCvghkA.svg"
                        alt="Lightning"
                        width={24}
                        height={24}
                    />
                    <span className="text-[#1c1c1c] text-base">Coordinate - Schedule - Empower</span>
                    <div className="bg-[#1c1c1c] p-1 rounded-full">
                        <Image
                            src="https://framerusercontent.com/images/NFHpR9izwGvMD8R1mdW1dbERF0.svg"
                            alt="Arrow"
                            width={18}
                            height={18}
                        />
                    </div>
                </Link>

                {/* Profile Images */}
                <div className="relative w-[253px] h-[26px]">
                    <div className="absolute left-0 w-[26px] h-[26px]">
                        <Image
                            src="https://framerusercontent.com/images/VLgy4LHFmPRcroCjnlXTid9rvcc.png"
                            alt="Profile"
                            width={26}
                            height={26}
                            className="rounded-full border-2 border-white"
                        />
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-[26px] h-[26px]">
                        <Image
                            src="https://framerusercontent.com/images/UENPQ6M5gthstqeACgcVeN76TZk.png"
                            alt="Profile"
                            width={26}
                            height={26}
                            className="rounded-full border-2 border-white"
                        />
                    </div>
                    <div className="absolute right-0 w-[26px] h-[26px]">
                        <Image
                            src="https://framerusercontent.com/images/prQs9tObWVtpStifstN0OexkE.png"
                            alt="Profile"
                            width={26}
                            height={26}
                            className="rounded-full border-2 border-white"
                        />
                    </div>
                </div>

                {/* Main Content */}
                <div className="space-y-6">
                    <h1 className="text-[68px] leading-[1.2] font-bold font-['Bricolage_Grotesque'] text-[#0c0c0c] max-w-[800px]">
                        Elevate Your Staff Management with Cloud-Based Solutions
                    </h1>
                    <p className="text-lg text-[#3d495b] max-w-[600px] mx-auto">
                        The ultimate staff management platform that streamlines employee tracking, shift scheduling,
                        time-off requests, and attendance—all in one unified solution.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-6">
                    <Link
                        href="/contact"
                        className="bg-[#1c1c1c] text-white text-[17px] px-6 py-4 rounded-xl hover:bg-black/90 transition-colors"
                    >
                        Get Started
                    </Link>

                    <button className="flex items-center gap-2">
                        <div className="p-2.5 bg-[#1c1c1c] rounded-full">
                            <div className="w-5 h-5 flex items-center justify-center">
                                <span className="text-white text-xs">▶</span>
                            </div>
                        </div>
                        <span className="text-[#3d495b]">How it works</span>
                    </button>
                </div>

                {/* Bottom Features Section */}
                <div className="w-full mt-[436px]">
                    <div className="relative w-full bg-black rounded-[55px] rounded-b-[30px] pt-[200px] pb-20 px-20 flex flex-col items-center gap-[50px]">
                        {/* Floating Dashboard Preview */}
                        <div className="absolute top-[-440px] left-1/2 -translate-x-1/2 w-[88%] backdrop-blur-[6px] bg-gradient-to-b from-white to-white/20 rounded-[24px] p-1.5">
                            <div className="aspect-[1.9/1] w-[1010px] overflow-hidden">
                                <Image
                                    src="https://framerusercontent.com/images/6R7Itar4Nwn8lsiojWr72ZW1uKk.png"
                                    alt="Staffluent Dashboard"
                                    width={1010}
                                    height={532}
                                    className="w-full h-auto"
                                    priority
                                />
                            </div>
                            <div className="absolute left-0 right-0 -bottom-[60px] flex justify-center">
                                <Image
                                    src="https://framerusercontent.com/images/RSB3RaVzZzLl89FgKNNA9ZPblY.svg"
                                    alt="Shape"
                                    width={1010}
                                    height={201}
                                    className="w-full"
                                />
                            </div>
                        </div>

                        {/* Caption Bar */}
                        <div className="flex items-center gap-1 bg-[#262626] text-white px-4 py-2.5 rounded-full">
                            <Image
                                src="https://framerusercontent.com/images/gJmClwmVIPZAuSVHIZ7k95jx04.svg"
                                alt="Sparkles"
                                width={24}
                                height={24}
                            />
                            <p className="text-[17px] text-white">
                                Unlock smarter productivity with AI-driven tools, personalized workflows, and seamless collaboration.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="flex w-full gap-[15px]">
                            {/* Feature 1 */}
                            <div className="flex-1">
                                <div className="bg-[#262626] p-7 rounded-[100px] flex flex-col items-center gap-4">
                                    <div className="w-[30px] h-[30px] rounded-full border border-[#333333] bg-[#262626] p-3">
                                        <Image
                                            src="https://framerusercontent.com/images/sh29Ss025KGjtLmfxytiazc4EeI.svg"
                                            alt="AI Icon"
                                            width={30}
                                            height={30}
                                        />
                                    </div>
                                    <p className="text-white text-center text-[17px]">
                                        Smart Task Prioritization with AI Insights
                                    </p>
                                </div>
                            </div>

                            <div className="w-[1px] h-[108px] bg-[#3d3d3d] border-dashed self-center"></div>

                            {/* Feature 2 */}
                            <div className="flex-1">
                                <div className="bg-[#262626] p-7 rounded-[100px] flex flex-col items-center gap-4">
                                    <div className="w-[30px] h-[30px] rounded-full border border-[#333333] bg-[#262626] p-3">
                                        <Image
                                            src="https://framerusercontent.com/images/TFPLWOVt43fxJQ2k2LQqnAd3Obs.svg"
                                            alt="Team Icon"
                                            width={30}
                                            height={30}
                                        />
                                    </div>
                                    <p className="text-white text-center text-[17px]">
                                        Unified Workspace for Teamwork
                                    </p>
                                </div>
                            </div>

                            <div className="w-[1px] h-[108px] bg-[#3d3d3d] border-dashed self-center"></div>

                            {/* Feature 3 */}
                            <div className="flex-1">
                                <div className="bg-[#262626] p-7 rounded-[100px] flex flex-col items-center gap-4">
                                    <div className="w-[30px] h-[30px] rounded-full border border-[#333333] bg-[#262626] p-3">
                                        <Image
                                            src="https://framerusercontent.com/images/484M7kHBnbIGJMAnW6e3OEVKI.svg"
                                            alt="Analytics Icon"
                                            width={30}
                                            height={30}
                                        />
                                    </div>
                                    <p className="text-white text-center text-[17px]">
                                        Advanced Project Tracking & Analytics
                                    </p>
                                </div>
                            </div>

                            <div className="w-[1px] h-[108px] bg-[#3d3d3d] border-dashed self-center"></div>

                            {/* Feature 4 */}
                            <div className="flex-1">
                                <div className="bg-[#262626] p-7 rounded-[100px] flex flex-col items-center gap-4">
                                    <div className="w-[30px] h-[30px] rounded-full border border-[#333333] bg-[#262626] p-3">
                                        <Image
                                            src="https://framerusercontent.com/images/wpnZoP3QjADuGfntbYdd3adrVpg.svg"
                                            alt="Sync Icon"
                                            width={30}
                                            height={30}
                                        />
                                    </div>
                                    <p className="text-white text-center text-[17px]">
                                        Real-time Sync Across All Devices
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;