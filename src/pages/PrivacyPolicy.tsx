"use client";
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const PrivacyPolicyPage = () => {
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/request-demo", label: "Request a Demo" },
        { href: "https://app.staffluent.co/login", label: "Access Platform" },
    ];

    const PrivacyContent = () => (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="bg-white rounded-lg shadow-sm p-4">
                <h1 className="text-4xl text-[#0A0A0A] font-bold mb-8 text-center">Privacy Policy</h1>
                <p className="text-gray-600 text-center mb-12">Last Updated: February 15, 2025</p>

                {/* Introduction */}
                <section className="mb-12">
                    <p className="text-gray-700 leading-relaxed">
                        At Staffluent, a registered brand of VenueBoost Inc., we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (the &ldquo;Site&rdquo;) and use our workforce management platform, including our mobile applications and related services (collectively, the &ldquo;Services&rdquo;). By accessing or using our Services, you agree to this Privacy Policy.
                    </p>
                </section>

                {/* Main Privacy Sections */}
                <div className="space-y-12">
                    {/* Information We Collect */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">1. Information We Collect</h2>
                        <div className="space-y-6 text-gray-700">
                            <h3 className="text-xl font-medium mb-2">1.1 Website Data</h3>
                            <div className="bg-blue-50 p-4 rounded-lg space-y-4">
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Personal Information: Name, email address, phone number, and company name when voluntarily provided</li>
                                    <li>Usage Data: Pages visited, time spent on pages, and interaction patterns</li>
                                    <li>Device Information: IP address, browser type, and device details</li>
                                    <li>Cookies and similar tracking technologies to enhance user experience and analyze trends</li>
                                </ul>
                            </div>

                            <h3 className="text-xl font-medium mb-2">1.2 Employee Data</h3>
                            <div className="bg-blue-50 p-4 rounded-lg space-y-4">
                                <p>We collect the following information for employees:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Personal identification information (name, email, phone number, photo)</li>
                                    <li>Employment details (employee ID, department, role, team assignments)</li>
                                    <li>Time and attendance records</li>
                                    <li>Location data when using mobile app features</li>
                                    <li>Project and task activities</li>
                                    <li>Performance metrics and activity logs</li>
                                    <li>Clock in/out records and break times</li>
                                    <li>Communication history within the platform</li>
                                </ul>
                            </div>

                            <h3 className="text-xl font-medium mb-2">1.3 Client Data</h3>
                            <div className="bg-blue-50 p-4 rounded-lg space-y-4">
                                <p>For our clients, we collect:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Business contact information</li>
                                    <li>Client type categorization (Individual/Business)</li>
                                    <li>Service requests and requirements</li>
                                    <li>Project details and specifications</li>
                                    <li>Payment and billing information</li>
                                    <li>Support ticket history</li>
                                    <li>Client feedback and ratings</li>
                                </ul>
                            </div>

                            <h3 className="text-xl font-medium mb-2">1.4 Management Data</h3>
                            <div className="bg-blue-50 p-4 rounded-lg space-y-4">
                                <p>For team leaders and operations managers:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Team performance metrics</li>
                                    <li>Project progress tracking</li>
                                    <li>Resource allocation data</li>
                                    <li>Quality inspection records</li>
                                    <li>Compliance monitoring data</li>
                                    <li>Team schedule and shift information</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* How We Use Your Information */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">2. How We Use Your Information</h2>
                        <div className="space-y-6 text-gray-700">
                            <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                                <p>We use your information to:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Provide, operate, and maintain our services</li>
                                    <li>Improve, personalize, and expand our Site and service offerings</li>
                                    <li>Understand and analyze how you use our Site</li>
                                    <li>Communicate with you, including for customer service, updates, and marketing purposes (with your consent where required)</li>
                                    <li>Process transactions and send related information</li>
                                    <li>Comply with legal obligations and enforce our terms</li>
                                </ul>
                            </div>

                            <h3 className="text-xl font-medium mb-2">2.1 Core Platform Functions</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Time tracking and attendance management</li>
                                <li>Project and task management</li>
                                <li>Team communication and collaboration</li>
                                <li>Client service delivery</li>
                                <li>Payroll processing</li>
                                <li>Performance monitoring and reporting</li>
                            </ul>

                            <h3 className="text-xl font-medium mb-2">2.2 Analytics and Improvements</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Analyzing usage patterns to improve our services</li>
                                <li>Generating performance metrics and reports</li>
                                <li>Optimizing resource allocation</li>
                                <li>Enhancing user experience</li>
                            </ul>
                        </div>
                    </section>

                    {/* Information Sharing */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">3. Information Sharing</h2>
                        <div className="space-y-4 text-gray-700">
                            <div className="bg-yellow-50 p-4 rounded-lg space-y-4">
                                <h3 className="text-xl font-medium">3.1 Third-Party Service Providers</h3>
                                <p>We may share your information with trusted third-party vendors who assist us in:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Operating our Site and services</li>
                                    <li>Processing payments</li>
                                    <li>Providing hosting services</li>
                                    <li>Analytics and performance monitoring</li>
                                </ul>
                                <p className="mt-4">These vendors are obligated to protect your data and only use it as directed by us.</p>
                            </div>

                            <div className="bg-yellow-50 p-4 rounded-lg space-y-4 mt-4">
                                <h3 className="text-xl font-medium">3.2 Legal Requirements and Business Transfers</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>We may disclose information if required by law or valid legal requests</li>
                                    <li>In the event of a merger, acquisition, or asset sale, your information may be transferred</li>
                                    <li>We ensure continued protection of your data in such events</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Location Services */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">4. Location Services</h2>
                        <div className="bg-blue-50 p-6 rounded-lg space-y-4 text-gray-700">
                            <p>Our mobile app uses location services for:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Time tracking verification</li>
                                <li>Project site check-ins</li>
                                <li>Route optimization</li>
                                <li>Attendance verification</li>
                            </ul>
                            <p className="mt-4">
                                You can control location tracking through your device settings and app permissions.
                                Disabling location services may limit certain app features.
                            </p>
                        </div>
                    </section>

                    {/* Data Security */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">5. Data Security</h2>
                        <div className="bg-gray-50 p-6 rounded-lg space-y-4 text-gray-700">
                            <p>We implement appropriate technical and organizational measures to secure your personal information against unauthorized access, disclosure, alteration, or destruction. These measures include:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Encryption of data in transit and at rest</li>
                                <li>Regular security assessments</li>
                                <li>Access controls and authentication</li>
                                <li>Employee training on data protection</li>
                                <li>Regular security updates</li>
                            </ul>
                            <p className="mt-4">However, no security system is impenetrable, and we cannot guarantee absolute security.</p>
                        </div>
                    </section>

                    {/* International Data Transfers */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">6. International Data Transfers</h2>
                        <div className="bg-gray-50 p-6 rounded-lg space-y-4 text-gray-700">
                            <p>Your information may be stored and processed in the United States or other countries where our service providers operate. By using our Site, you consent to the transfer of your data to countries that may have different data protection laws than your jurisdiction.</p>
                        </div>
                    </section>

                    {/* Your Rights */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">7. Your Rights</h2>
                        <div className="space-y-4 text-gray-700">
                            <p>Depending on your location, you may have certain rights regarding your personal data:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Access your personal data</li>
                                        <li>Correct inaccurate data</li>
                                        <li>Request data deletion</li>
                                        <li>Export your data</li>
                                    </ul>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Restrict data processing</li>
                                        <li>Object to processing</li>
                                        <li>Withdraw consent</li>
                                        <li>File a complaint</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contact Information */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">8. Contact Us</h2>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <p className="mb-4 text-[#0A0A0A]">If you have questions or concerns about this Privacy Policy, please contact us:</p>
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
                    <PrivacyContent />
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

export default PrivacyPolicyPage;