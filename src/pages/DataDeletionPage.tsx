"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FormData {
    email: string;
    userType: string;
    reason: string;
    confirmUnderstand: boolean;
    verificationDoc: File | null;
}

const DataDeletionPage = () => {
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        email: '',
        userType: 'employee',
        reason: '',
        confirmUnderstand: false,
        verificationDoc: null
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData({...formData, verificationDoc: file});
    };

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    const DataDeletionContent = () => (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="bg-white rounded-lg shadow-sm p-4">
                <h1 className="text-4xl font-bold mb-8 text-center">Data Deletion Request</h1>
                <p className="text-gray-600 text-center mb-12">Learn about your data deletion rights and how to request deletion</p>

                {/* Important Notice */}
                <div className="bg-yellow-50 p-6 rounded-lg mb-12">
                    <div className="flex items-start space-x-3">
                        <AlertCircle className="text-yellow-600 w-6 h-6 mt-1" />
                        <div>
                            <h2 className="text-lg font-semibold text-yellow-800 mb-2">Important Information</h2>
                            <p className="text-gray-700">
                                Before requesting data deletion, please note that this process is permanent and cannot be
                                undone. Some data may need to be retained for legal or business purposes.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content Sections */}
                <div className="space-y-12">
                    {/* Who Can Request */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-6 text-blue-800">Who Can Request Data Deletion</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card>
                                <CardContent className="p-6 mt-6">
                                    <h3 className="text-xl font-medium mb-4">Employees & Staff</h3>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Current and former employees</li>
                                        <li>Team leaders</li>
                                        <li>Operations managers</li>
                                        <li>Project team members</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 mt-6">
                                    <h3 className="text-xl font-medium mb-4">Clients & Organizations</h3>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Individual clients</li>
                                        <li>Business representatives</li>
                                        <li>Service recipients</li>
                                        <li>Project stakeholders</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* What We Delete */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-6 text-blue-800">What We Delete</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="text-xl font-medium mb-4">Personal Information</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Account details</li>
                                    <li>Contact information</li>
                                    <li>Profile pictures</li>
                                    <li>User preferences</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="text-xl font-medium mb-4">Work Data</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Time tracking records</li>
                                    <li>Project contributions</li>
                                    <li>Task history</li>
                                    <li>Performance data</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="text-xl font-medium mb-4">Communication Data</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Messages and comments</li>
                                    <li>Support tickets</li>
                                    <li>Feedback history</li>
                                    <li>Chat logs</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Data We Must Retain */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-6 text-blue-800">Data We Must Retain</h2>
                        <div className="bg-red-50 p-6 rounded-lg">
                            <p className="mb-4 text-gray-700">
                                Certain information must be retained to comply with legal obligations:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Financial records required by tax laws</li>
                                <li>Employment records required by labor laws</li>
                                <li>Project documentation for legal compliance</li>
                                <li>Safety and incident reports</li>
                                <li>Audit trails and compliance records</li>
                                <li>Legal documentation and contracts</li>
                            </ul>
                        </div>
                    </section>

                    {/* Request Form */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-6 text-blue-800">Submit Deletion Request</h2>
                        <Card>
                            <CardContent className="p-6">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2 mt-8">Email Address</label>
                                        <input
                                            type="email"
                                            className="w-full p-2 border rounded-md"
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">User Type</label>
                                        <select
                                            className="w-full p-2 border rounded-md"
                                            value={formData.userType}
                                            onChange={(e) => setFormData({...formData, userType: e.target.value})}
                                        >
                                            <option value="employee">Employee</option>
                                            <option value="team_leader">Team Leader</option>
                                            <option value="operations_manager">Operations Manager</option>
                                            <option value="client_individual">Individual Client</option>
                                            <option value="client_business">Business Client</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Verification Document</label>
                                        <input
                                            type="file"
                                            className="w-full"
                                            onChange={handleFileChange}
                                        />
                                        <p className="text-sm text-gray-500 mt-1">
                                            Please provide ID or authorization documentation
                                        </p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Reason for Deletion</label>
                                        <textarea
                                            className="w-full p-2 border rounded-md h-32"
                                            value={formData.reason}
                                            onChange={(e) => setFormData({...formData, reason: e.target.value})}
                                            required
                                        />
                                    </div>

                                    <div className="flex items-start space-x-2">
                                        <input
                                            type="checkbox"
                                            id="confirmUnderstand"
                                            className="mt-1"
                                            checked={formData.confirmUnderstand}
                                            onChange={(e) => setFormData({...formData, confirmUnderstand: e.target.checked})}
                                            required
                                        />
                                        <label htmlFor="confirmUnderstand" className="text-sm text-gray-700">
                                            I understand that this process is permanent and cannot be undone. Some data
                                            may be retained for legal purposes.
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                                    >
                                        Submit Request
                                    </button>
                                </form>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Process Timeline */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-6 text-blue-800">Deletion Process Timeline</h2>
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <ol className="space-y-4 text-gray-700">
                                <li className="flex items-center space-x-3">
                                    <div className="font-medium">1. Request Submission</div>
                                    <div className="text-sm text-gray-500">(Day 1)</div>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="font-medium">2. Verification Process</div>
                                    <div className="text-sm text-gray-500">(1-3 business days)</div>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="font-medium">3. Data Review</div>
                                    <div className="text-sm text-gray-500">(3-5 business days)</div>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="font-medium">4. Deletion Process</div>
                                    <div className="text-sm text-gray-500">(up to 30 days)</div>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="font-medium">5. Confirmation</div>
                                    <div className="text-sm text-gray-500">(within 1 business day of completion)</div>
                                </li>
                            </ol>
                        </div>
                    </section>

                    {/* Contact Information */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-6 text-blue-800">Contact Us</h2>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <p className="mb-4">For questions about data deletion or to follow up on a request:</p>
                            <div className="space-y-2 text-gray-700">
                                <p>Email: privacy@staffluent.co</p>
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
                    <DataDeletionContent />
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

export default DataDeletionPage;