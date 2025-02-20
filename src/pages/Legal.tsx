"use client";
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const LegalPage = () => {
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/request-demo", label: "Request a Demo" },
        { href: "https://app.staffluent.co/login", label: "Access Platform" },
    ];

    const LegalContent = () => (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="bg-white rounded-lg shadow-sm p-4">
                <h1 className="text-4xl text-[#0A0A0A] font-bold mb-8 text-center">Legal & Corporate Information</h1>
                <p className="text-gray-600 text-center mb-12">Last Updated: February 15, 2025</p>

                {/* Introduction */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">Staffluent</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Staffluent is a registered brand (trademarks pending) of VenueBoost Inc.—offering advanced project, team, and workforce management solutions designed for diverse industries, from venue management to field operations and beyond.
                    </p>
                </section>

                {/* Main Sections */}
                <div className="space-y-12">
                    {/* Company Information */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">1. Corporate Details</h2>
                        <div className="bg-blue-50 p-6 rounded-lg space-y-4 text-gray-700">
                            <p>VenueBoost Inc.</p>
                            <p>222 East 44th Street</p>
                            <p>New York, NY 10017</p>
                            <p>United States</p>
                            <p>Employer Identification Number (EIN): 301368139</p>
                        </div>
                    </section>

                    {/* Corporate Overview */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">2. Corporate Overview</h2>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                VenueBoost Inc. develops and supports Staffluent along with a broad portfolio of venue management solutions. By integrating advanced project tracking, time & attendance, quality control, and client engagement into a single, unified platform, Staffluent exemplifies our commitment to operational excellence and digital transformation.
                            </p>
                            <p>
                                Our approach is built around innovation, customer success, and long-term strategic partnership, ensuring that our solutions evolve with your business needs.
                            </p>
                        </div>
                    </section>

                    {/* Trademark & Copyright */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">3. Trademark & Copyright</h2>
                        <div className="space-y-6 text-gray-700">
                            <div className="bg-yellow-50 p-4 rounded-lg space-y-4">
                                <h3 className="text-xl font-medium">3.1 Trademarks</h3>
                                <p>
                                    Staffluent is a registered brand of VenueBoost Inc. (trademarks pending). All related logos, names, and marks are the exclusive property of VenueBoost Inc.
                                </p>
                            </div>

                            <div className="bg-yellow-50 p-4 rounded-lg space-y-4">
                                <h3 className="text-xl font-medium">3.2 Copyright</h3>
                                <p>
                                    © 2025 VenueBoost Inc. All rights reserved. No part of this website or its content may be reproduced, distributed, or transmitted without prior written permission from VenueBoost Inc.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Disclaimer */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">4. Disclaimer</h2>
                        <div className="bg-gray-50 p-6 rounded-lg text-gray-700">
                            <p>
                                The information provided on this page is for general informational purposes only and is subject to change without notice. VenueBoost Inc. makes no warranties, expressed or implied, regarding the completeness or accuracy of this information.
                            </p>
                            <p className="mt-4">
                                For further details or legal inquiries, please contact us at <a
                                href="mailto:contact@staffluent.co"
                                className="text-indigo-600 hover:text-indigo-800 underline transition-colors"
                            >
                                contact@staffluent.co
                            </a>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <Header
                isHamburgerMenuOpen={isHamburgerMenuOpen}
                setIsHamburgerMenuOpen={setIsHamburgerMenuOpen}
                navLinks={navLinks}
            />
            {!isHamburgerMenuOpen ? (
                <div>
                    <LegalContent />
                    <Footer />
                </div>
            ) : (
                <div className="absolute top-0 left-0 w-full h-[calc(100vh-100px)] bg-white flex flex-col items-center gap-4 pr-6 mt-28">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className={"text-black"}>
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
};

export default LegalPage;