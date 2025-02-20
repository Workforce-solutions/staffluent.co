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
        { href: "/contact", label: "Contact" },
    ];

    const TermsContent = () => (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="bg-white rounded-lg shadow-sm p-4">
                <h1 className="text-4xl font-bold mb-8 text-center">Terms of Use</h1>
                <p className="text-gray-600 text-center mb-12">Last Updated: November 27, 2024</p>

                {/* Introduction */}
                <section className="mb-12">
                    <p className="text-gray-700 leading-relaxed">
                        Welcome to Staffluent. These Terms of Use govern your access to and use of the Staffluent platform,
                        including our website, mobile applications, and services (collectively, the &ldquo;Services&rdquo;).
                        Please read these terms carefully before using our Services.
                    </p>
                </section>

                {/* Main Terms Sections */}
                <div className="space-y-12">
                    {/* Agreement to Terms */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">1. Agreement to Terms</h2>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                By accessing or using Staffluent&apos;s Services, you agree to be bound by these Terms of Use
                                and our Privacy Policy. If you are using the Services on behalf of an organization,
                                you represent and warrant that you have the authority to bind that organization to
                                these Terms.
                            </p>
                            <p>
                                We may update these Terms at any time. We will notify you of any material changes via
                                email or through the Services. Your continued use of the Services after such notice
                                constitutes your acceptance of the updated Terms.
                            </p>
                        </div>
                    </section>

                    {/* Access and Account Security */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">2. Access and Account Security</h2>
                        <div className="space-y-4 text-gray-700">
                            <h3 className="text-xl font-medium mb-2">2.1 Account Requirements</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>You must be 18 years or older to use the Services</li>
                                <li>You must provide accurate, complete, and current information</li>
                                <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                                <li>You must notify us immediately of any unauthorized access</li>
                            </ul>

                            <h3 className="text-xl font-medium mb-2 mt-6">2.2 Account Security</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Use strong passwords and enable two-factor authentication when available</li>
                                <li>Do not share your account credentials with others</li>
                                <li>Log out from your account when using shared devices</li>
                                <li>Regularly review your account activity</li>
                            </ul>
                        </div>
                    </section>

                    {/* Use of Services */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">3. Use of Services</h2>
                        <div className="space-y-4 text-gray-700">
                            <h3 className="text-xl font-medium mb-2">3.1 Permitted Use</h3>
                            <p>You may use the Services only for:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Workforce management and time tracking</li>
                                <li>Project and task management</li>
                                <li>Team communication and collaboration</li>
                                <li>Client management and service delivery</li>
                            </ul>

                            <h3 className="text-xl font-medium mb-2 mt-6">3.2 Prohibited Activities</h3>
                            <p>You agree not to:</p>
                            <ul className="list-disc pl-6 space-y-2 text-red-600">
                                <li>Violate any applicable laws or regulations</li>
                                <li>Submit false or misleading information</li>
                                <li>Interfere with or disrupt the Services</li>
                                <li>Attempt to gain unauthorized access</li>
                                <li>Use the Services for malicious purposes</li>
                                <li>Infringe on intellectual property rights</li>
                            </ul>
                        </div>
                    </section>

                    {/* Data Collection and Privacy */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">4. Data Collection and Privacy</h2>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                Our collection and use of personal information is governed by our
                                <Link href="/privacy-policy" className="text-blue-600 hover:underline mx-1">
                                    Privacy Policy
                                </Link>
                                which is incorporated into these Terms.
                            </p>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="text-xl font-medium mb-2">4.1 Location Data</h3>
                                <p>
                                    The Services may collect location data when enabled. You can control location
                                    tracking through your device settings and app permissions.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Intellectual Property */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">5. Intellectual Property Rights</h2>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                The Services and their contents are owned by Staffluent and protected by copyright,
                                trademark, and other intellectual property laws.
                            </p>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-xl font-medium mb-2">License Grant</h3>
                                <p>
                                    We grant you a limited, non-exclusive, non-transferable license to use the
                                    Services in accordance with these Terms.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Payment Terms */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">6. Payment Terms</h2>
                        <div className="space-y-4 text-gray-700">
                            <h3 className="text-xl font-medium mb-2">6.1 Billing</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Subscription fees are billed in advance</li>
                                <li>All fees are non-refundable unless required by law</li>
                                <li>You are responsible for all applicable taxes</li>
                            </ul>

                            <h3 className="text-xl font-medium mb-2 mt-6">6.2 Changes to Fees</h3>
                            <p>
                                We may change our fees at any time. We will notify you of any fee changes at
                                least 30 days in advance.
                            </p>
                        </div>
                    </section>

                    {/* Termination */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">7. Termination</h2>
                        <div className="space-y-4 text-gray-700">
                            <div className="bg-red-50 p-4 rounded-lg">
                                <h3 className="text-xl font-medium mb-2">7.1 Termination by Us</h3>
                                <p>We may terminate or suspend your access to the Services:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-2">
                                    <li>For violations of these Terms</li>
                                    <li>At your employer&apos;s request</li>
                                    <li>For prolonged inactivity</li>
                                    <li>For any other reason with notice</li>
                                </ul>
                            </div>

                            <h3 className="text-xl font-medium mb-2 mt-6">7.2 Effect of Termination</h3>
                            <p>
                                Upon termination, your right to use the Services will cease immediately. You may
                                request your data in accordance with our data retention policies.
                            </p>
                        </div>
                    </section>

                    {/* Disclaimers and Limitations */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">8. Disclaimers and Limitations</h2>
                        <div className="bg-yellow-50 p-6 rounded-lg space-y-4 text-gray-700">
                            <h3 className="text-xl font-medium mb-2">8.1 Warranty Disclaimer</h3>
                            <p className="uppercase text-sm">
                                THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; WITHOUT ANY WARRANTY OF ANY KIND
                            </p>

                            <h3 className="text-xl font-medium mb-2 mt-6">8.2 Limitation of Liability</h3>
                            <p>
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, STAFFLUENT SHALL NOT BE LIABLE FOR ANY
                                INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
                            </p>
                        </div>
                    </section>

                    {/* Contact Information */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">9. Contact Us</h2>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <p className="mb-4">For questions about these Terms, please contact us at:</p>
                            <div className="space-y-2 text-gray-700">
                                <p>Email: legal@staffluent.co</p>
                                <p>Phone: +1 (844) 248-1465</p>
                                <p>Address: 222 East 44th Street, New York, NY 10017</p>
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
                <div className="absolute top-0 left-0 w-full h-[calc(100vh-100px)] bg-white flex flex-col items-center gap-4 pr-6 mt-24">
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