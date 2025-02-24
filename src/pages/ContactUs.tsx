"use client";
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";
import Link from "next/link";
import Image from "next/image";
import { Mail, Building } from "lucide-react";

const ContactUsPage = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const socialLinks = {
    linkedin: "https://www.linkedin.com/company/staffluentco",
    instagram: "https://www.instagram.com/staffluent",
    twitter: "https://x.com/staffluent_co",
    facebook: "https://www.facebook.com/staffluent",
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/request-demo", label: "Request a Demo" },
    { href: "https://app.staffluent.co/login", label: "Access Platform" },
  ];

  return (
    <>
      <Header
        isHamburgerMenuOpen={isHamburgerMenuOpen}
        setIsHamburgerMenuOpen={setIsHamburgerMenuOpen}
        navLinks={navLinks}
      />
      {!isHamburgerMenuOpen ? (
        <div>
          <div className="bg-white pt-16">
            <div className="max-w-[1200px] mx-auto px-4">
              {/* Header */}
              <div className="text-center mb-16">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  We&apos;re Here to Help
                </h1>
                <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                  Whether you have questions, need support, or want to explore a
                  strategic partnership, our team is ready to assist.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info - Left Column */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
                    <p className="text-gray-600 mb-2">
                      For questions about our platform or general information:
                    </p>
                    <a
                      href="mailto:contact@staffluent.co"
                      className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800"
                    >
                      <Mail size={20} />
                      contact@staffluent.co
                    </a>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-2">
                      Sales & Partnerships
                    </h2>
                    <p className="text-gray-600 mb-2">
                      Interested in learning more or exploring strategic
                      partnerships:
                    </p>
                    <a
                      href="mailto:sales@staffluent.co"
                      className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800"
                    >
                      <Mail size={20} />
                      sales@staffluent.co
                    </a>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-2">
                      Technical Support
                    </h2>
                    <p className="text-gray-600 mb-2">
                      Need assistance with the platform:
                    </p>
                    <a
                      href="mailto:support@staffluent.co"
                      className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800"
                    >
                      <Mail size={20} />
                      support@staffluent.co
                    </a>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-2">Our Offices</h2>
                    <div className="flex items-start gap-2 text-gray-600">
                      <Building size={20} className="flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Headquarters:</p>
                        <p>222 East 44th Street</p>
                        <p>New York, NY 10017</p>
                        <p>United States</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-4">
                      Social Profiles
                    </h2>
                    <div className="flex gap-2">
                      <a
                        href={socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#0A0A0A] p-2 rounded-xl hover:bg-[#262626]"
                      >
                        <Image
                          src="lE6exgFCC7D83cPTOY1ydeVc5Q.svg"
                          alt="Staffluent - LinkedIn"
                          width={24}
                          height={24}
                        />
                      </a>
                      <a
                        href={socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#0A0A0A] p-2 rounded-xl hover:bg-[#262626]"
                      >
                        <Image
                          src="qpDZ05AACAyO52WOnvrc0Bz3i0Y.svg"
                          alt="Staffluent - Instagram"
                          width={24}
                          height={24}
                        />
                      </a>
                      <a
                        href={socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#0A0A0A] p-2 rounded-xl hover:bg-[#262626]"
                      >
                        <Image
                          src="mHz04n9m5dvAnDw0bIe3uCF268.svg"
                          alt="Staffluent - X"
                          width={24}
                          height={24}
                        />
                      </a>
                      <a
                        href={socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#0A0A0A] p-2 rounded-xl hover:bg-[#262626]"
                      >
                        <Image
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtZmFjZWJvb2siPjxwYXRoIGQ9Ik0xOCA0aC0zYTUgNSAwIDAgMC01IDV2M0g3djRoM3Y4aDR2LThoM2wxLTRoLTR2LTNhMSAxIDAgMCAxIDEtMWgzeiIvPjwvc3ZnPg=="
                          alt="Staffluent - Facebook"
                          width={24}
                          height={24}
                        />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Form - Right Column */}
                <div>
                  <div
                    className="bg-gray-50 mb-8 py-2"
                    style={{ borderRadius: "15px" }}
                  >
                    <div className="max-w-2xl mx-auto">
                      <h2 className="text-2xl mt-4 font-semibold mb-0 text-center">
                        Send us a Message
                      </h2>
                      <ContactForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default ContactUsPage;
