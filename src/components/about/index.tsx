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
                        <span className="text-[#1c1c1c]">About Us</span>
                    </div>
                    <h2 className="text-5xl font-bold mb-4">Empowering Teams Through Intelligent Project Management</h2>
                    <p className="text-[#3d495b] max-w-3xl mx-auto">
                        We're revolutionizing how teams work together by providing comprehensive project tracking,
                        real-time collaboration tools, and powerful analytics in one integrated platform.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutPageComponent;