import React from "react";
import { UserRoundIcon } from "lucide-react";

const AboutPageComponent = () => {
    return (
        <section className="py-20" id="about">
            <div className="max-w-[1200px] mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-[#F8FAFC] border border-[#DEE5ED] rounded-full px-4 py-2 mb-4">
                        <UserRoundIcon className="w-6 h-6 mr-2" />
                        <span className="text-[#0A0A0A]">About Us</span>
                    </div>
                    <h2 className="text-5xl font-bold mb-4">Empowering Teams Through Intelligent Project Management</h2>
                    <p className="text-[#3d495b] max-w-3xl mx-auto">
                        We are revolutionizing how teams work together by providing comprehensive project tracking,
                        real-time collaboration tools, and powerful analytics in one integrated platform.
                    </p>
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="space-y-6">
                        <p className="text-lg text-[#3d495b]">
                            At Staffluent, we believe that workforce management should be seamless, data‑driven, and adaptable to organizations of any size. Founded by a team of seasoned professionals in technology and operations, we set out to develop a unified platform that streamlines project tracking, time & attendance, quality control, and client engagement—all under one intuitive interface.
                        </p>
                        <p className="text-lg text-[#3d495b]">
                            Our mission is simple yet transformative: empower businesses to operate with clarity and precision, whether they&apos;re coordinating remote teams, managing on‑site field workers, or scaling across multiple locations.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <p className="text-lg text-[#3d495b]">
                            By integrating advanced AI insights, customizable dashboards, and real‑time analytics, we help you optimize day‑to‑day tasks, reduce overhead, and drive sustainable growth.
                        </p>
                        <p className="text-lg text-[#3d495b]">
                            We pride ourselves on innovation, collaboration, and customer success. Through continuous feedback loops and an agile development approach, Staffluent evolves with your organization—ensuring that you can adapt swiftly to new challenges and opportunities. Whether you&apos;re a lean startup or an enterprise with thousands of employees, our goal remains the same: to simplify your workflows, maximize productivity, and let you focus on what matters most—your core business objectives.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPageComponent;