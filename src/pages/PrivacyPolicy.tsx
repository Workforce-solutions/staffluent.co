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
        { href: "/contact", label: "Contact" },
    ];

    const PrivacyContent = () => (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="bg-white rounded-lg shadow-sm p-4">
                <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
                <p className="text-gray-600 text-center mb-12">Last Updated: November 27, 2024</p>

                {/* Introduction */}
                <section className="mb-12">
                    <p className="text-gray-700 leading-relaxed">
                        At Staffluent, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                        disclose, and safeguard your information when you use our workforce management platform,
                        including our website, mobile applications, and related services (collectively, the &ldquo;Services&rdquo;).
                    </p>
                </section>

                {/* Main Privacy Sections */}
                <div className="space-y-12">
                    {/* Information We Collect */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-800">1. Information We Collect</h2>
                        <div className="space-y-6 text-gray-700">
                            <h3 className="text-xl font-medium mb-2">1.1 Employee Data</h3>
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

                            <h3 className="text-xl font-medium mb-2">1.2 Client Data</h3>
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

                            <h3 className="text-xl font-medium mb-2">1.3 Management Data</h3>
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

                            <h3 className="text-xl font-medium mb-2">1.4 Automatically Collected Data</h3>
                            <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Device information (IP address, device type, operating system)</li>
                                    <li>Usage patterns and activity logs</li>
                                    <li>Location data (when permitted)</li>
                                    <li>Performance and analytics data</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* How We Use Your Information */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-800">2. How We Use Your Information</h2>
                        <div className="space-y-6 text-gray-700">
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

                            <h3 className="text-xl font-medium mb-2">2.3 Compliance and Security</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Ensuring workplace safety and compliance</li>
                                <li>Detecting and preventing fraud</li>
                                <li>Maintaining audit trails</li>
                                <li>Meeting legal obligations</li>
                            </ul>
                        </div>
                    </section>

                    {/* Data Sharing */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-800">3. Information Sharing</h2>
                        <div className="space-y-4 text-gray-700">
                            <p>We share your information with:</p>

                            <div className="bg-yellow-50 p-4 rounded-lg space-y-4">
                                <h3 className="text-xl font-medium">3.1 Internal Sharing</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Team leaders can access their team members&apos; data</li>
                                    <li>Operations managers can view assigned project information</li>
                                    <li>Administrators have access based on their role permissions</li>
                                </ul>
                            </div>

                            <div className="bg-yellow-50 p-4 rounded-lg space-y-4 mt-4">
                                <h3 className="text-xl font-medium">3.2 External Sharing</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Service providers (hosting, analytics, payment processing)</li>
                                    <li>Legal authorities when required by law</li>
                                    <li>Clients (limited to relevant project data)</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Location Services */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-800">4. Location Services</h2>
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
                        <h2 className="text-2xl font-semibold mb-4 text-blue-800">5. Data Security</h2>
                        <div className="space-y-4 text-gray-700">
                            <p>We implement various security measures including:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Encryption of data in transit and at rest</li>
                                <li>Regular security assessments</li>
                                <li>Access controls and authentication</li>
                                <li>Employee training on data protection</li>
                                <li>Regular security updates</li>
                            </ul>
                        </div>
                    </section>

                    {/* Data Retention */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-800">6. Data Retention</h2>
                        <div className="bg-gray-50 p-6 rounded-lg space-y-4 text-gray-700">
                            <h3 className="text-xl font-medium">Retention Periods</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Active accounts: Data retained while account is active</li>
                                <li>Employee records: Retained according to employment law requirements</li>
                                <li>Financial records: Kept for required tax and audit purposes</li>
                                <li>Project data: Maintained for specified retention period</li>
                                <li>Inactive accounts: Data archived after 12 months of inactivity</li>
                            </ul>
                        </div>
                    </section>

                    {/* Your Rights */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-800">7. Your Rights</h2>
                        <div className="space-y-4 text-gray-700">
                            <p>You have the right to:</p>
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
                        <h2 className="text-2xl font-semibold mb-4 text-blue-800">8. Contact Us</h2>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <p className="mb-4">For privacy-related inquiries, please contact our Data Protection Officer:</p>
                            <div className="space-y-2 text-gray-700">
                                <p>Email: privacy@staffluent.xyz</p>
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
                    <PrivacyContent />
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

export default PrivacyPolicyPage;