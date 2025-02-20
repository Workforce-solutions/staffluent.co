"use client";
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const TermsPage = () => {
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/request-demo", label: "Request a Demo" },
        { href: "https://app.staffluent.co/login", label: "Access Platform" },
    ];

    const TermsContent = () => (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="bg-white rounded-lg shadow-sm p-4">
                <h1 className="text-4xl font-bold mb-8 text-center">Terms of Use</h1>
                <p className="text-gray-600 text-center mb-12">Last Updated: February 15, 2025</p>

                {/* Introduction */}
                <section className="mb-12">
                    <p className="text-gray-700 leading-relaxed">
                        These Terms of Use ("Terms") govern your access to and use of the Staffluent website (the "Site") and related services provided by Staffluent, a registered brand of VenueBoost Inc. ("we," "us," or "our"). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site.
                    </p>
                </section>

                {/* Main Terms Sections */}
                <div className="space-y-12">
                    {/* Acceptance of Terms */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">1. Acceptance of Terms</h2>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                By using our Site, you acknowledge that you have read, understood, and agree to these Terms and our
                                <Link href="/privacy-policy" className="text-blue-600 hover:underline mx-1">
                                    Privacy Policy
                                </Link>
                                . These Terms constitute a legally binding agreement between you and VenueBoost Inc.
                            </p>
                        </div>
                    </section>

                    {/* Modifications */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">2. Modifications</h2>
                        <div className="bg-yellow-50 p-6 rounded-lg space-y-4 text-gray-700">
                            <p>
                                We reserve the right to change or modify these Terms at any time. Any changes will be effective immediately upon posting on the Site. Your continued use of the Site following the posting of any changes constitutes acceptance of those changes.
                            </p>
                        </div>
                    </section>

                    {/* Use of Site */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">3. Use of the Site</h2>
                        <div className="space-y-6 text-gray-700">
                            <h3 className="text-xl font-medium mb-2">3.1 Eligibility</h3>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <p>You represent that you are at least 18 years of age or have the consent of a parent or guardian to use the Site.</p>
                            </div>

                            <h3 className="text-xl font-medium mb-2">3.2 Permitted Use</h3>
                            <div className="bg-blue-50 p-4 rounded-lg space-y-4">
                                <p>You agree to use the Site solely for lawful purposes and in accordance with these Terms.</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Workforce management and time tracking</li>
                                    <li>Project and task management</li>
                                    <li>Team communication and collaboration</li>
                                    <li>Client management and service delivery</li>
                                </ul>
                            </div>

                            <h3 className="text-xl font-medium mb-2">3.3 Prohibited Activities</h3>
                            <div className="bg-red-50 p-4 rounded-lg">
                                <ul className="list-disc pl-6 space-y-2 text-red-600">
                                    <li>Use the Site in any way that could damage, disable, or overburden it</li>
                                    <li>Interfere with any other party's use of the Site</li>
                                    <li>Submit false or misleading information</li>
                                    <li>Attempt to gain unauthorized access</li>
                                    <li>Use the Site for malicious purposes</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Intellectual Property */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">4. Intellectual Property</h2>
                        <div className="space-y-4 text-gray-700">
                            <h3 className="text-xl font-medium mb-2">4.1 Ownership</h3>
                            <p>
                                All content on the Site, including text, graphics, logos, images, and software, is the property of VenueBoost Inc. or its licensors and is protected by intellectual property laws.
                            </p>

                            <h3 className="text-xl font-medium mb-2">4.2 Restrictions</h3>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p>You may not:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Reproduce or distribute any Site content</li>
                                    <li>Modify or create derivative works</li>
                                    <li>Publicly display or exploit content</li>
                                    <li>Use content without prior written consent</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* User Content */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">5. User Content</h2>
                        <div className="bg-blue-50 p-6 rounded-lg space-y-4 text-gray-700">
                            <p>
                                If you submit any content (such as comments, feedback, or other materials) to the Site, you grant us a non-exclusive, worldwide, royalty-free, perpetual license to use, reproduce, modify, and display such content.
                            </p>
                        </div>
                    </section>

                    {/* Disclaimers and Limitations */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">6. Disclaimers and Limitation of Liability</h2>
                        <div className="bg-yellow-50 p-6 rounded-lg space-y-4 text-gray-700">
                            <h3 className="text-xl font-medium mb-2">6.1 Disclaimer of Warranties</h3>
                            <p className="uppercase text-sm">
                                The Site and its content are provided "as is" and "as available" basis without any warranties of any kind, either express or implied.
                            </p>

                            <h3 className="text-xl font-medium mb-2">6.2 Limitation of Liability</h3>
                            <p>
                                To the fullest extent permitted by law, VenueBoost Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, arising out of or related to your use of the Site.
                            </p>
                        </div>
                    </section>

                    {/* Indemnification */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">7. Indemnification</h2>
                        <div className="bg-gray-50 p-6 rounded-lg space-y-4 text-gray-700">
                            <p>
                                You agree to indemnify, defend, and hold harmless VenueBoost Inc. and its affiliates from any claims, liabilities, damages, losses, or expenses (including reasonable attorneys' fees) arising out of or in any way connected with your access to or use of the Site.
                            </p>
                        </div>
                    </section>

                    {/* Governing Law */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">8. Governing Law</h2>
                        <div className="bg-blue-50 p-6 rounded-lg space-y-4 text-gray-700">
                            <p>
                                These Terms are governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions.
                            </p>
                        </div>
                    </section>

                    {/* Termination */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">9. Termination</h2>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                We reserve the right to suspend or terminate your access to the Site at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users or our business.
                            </p>
                        </div>
                    </section>

                    {/* Contact Information */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">10. Contact Us</h2>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <p className="mb-4">If you have any questions about these Terms, please contact us:</p>
                            <div className="space-y-2 text-gray-700">
                                <p>Email: <a href="mailto:contact@staffluent.co" className="text-indigo-600 hover:text-indigo-800 underline transition-colors">contact@staffluent.co</a></p>
                                <p>Address: 222 East 44th Street, New York, NY 10017, United States</p>
                            </div>
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
                    <TermsContent />
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

export default TermsPage;