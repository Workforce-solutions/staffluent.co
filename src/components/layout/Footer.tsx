import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const socialLinks = {
    linkedin: "https://www.linkedin.com/company/staffluentco",
    instagram: "https://www.instagram.com/staffluent",
    twitter: "https://x.com/staffluent_co",
    facebook: "https://www.facebook.com/staffluent",
  };

  return (
    <footer className="w-full bg-[url('https://framerusercontent.com/images/74LehQoe77vSoidpjaDEmwrLHho.png')] bg-cover bg-center rounded-t-[50px]">
      <div className="max-w-[1200px] mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left Column */}
          <div className="flex flex-col items-center md:items-start space-y-8">
            <div className="space-y-4 text-center md:text-left">
              <div className="flex justify-center md:justify-start">
                <Link href="/" className="block w-[200px] h-20 relative">
                  <Image
                    src="/logo-footer.svg"
                    alt="Staffluent Logo"
                    style={{
                      marginLeft: "-12px",
                      marginTop: "-14px",
                    }}
                    fill
                    className="object-contain"
                    priority
                  />
                </Link>
              </div>
              <p className="text-white max-w-xs">
                Empowering your productivity with intuitive tools and seamless
                solutions.
              </p>
            </div>
            <div className="flex justify-center md:justify-start w-full">
              <a
                href="mailto:contact@staffluent.co"
                className="inline-flex items-center gap-2 bg-white rounded-xl px-4 py-2 text-[#262626]"
              >
                <Image
                  src="/bq8j0XRxNw5W65cEtpyVTuWArA.svg"
                  alt="Staffluent - Email"
                  width={24}
                  height={24}
                />
                <span>contact@staffluent.co</span>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col md:flex-row md:justify-end gap-8 md:gap-28">
            {/* Company Links */}
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-white font-semibold">Company</h3>
              <div className="space-y-2">
                <Link
                  href="/about"
                  className="block text-white/80 hover:text-white"
                >
                  About Us
                </Link>
                <Link
                  href="/contact-us"
                  className="block text-white/80 hover:text-white"
                >
                  Contact us
                </Link>
                <Link
                  href="/legal"
                  className="block text-white/80 hover:text-white"
                >
                  Legal
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-white font-semibold">Social Profiles</h3>
              <div className="flex justify-center md:justify-start gap-2">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#333333] p-2 rounded-xl hover:bg-[#262626]"
                >
                  <Image
                    src="/lE6exgFCC7D83cPTOY1ydeVc5Q.svg"
                    alt="Staffluent - LinkedIn"
                    width={24}
                    height={24}
                  />
                </a>

                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#333333] p-2 rounded-xl hover:bg-[#262626]"
                >
                  <Image
                    src="/qpDZ05AACAyO52WOnvrc0Bz3i0Y.svg"
                    alt="Staffluent - Instagram"
                    width={24}
                    height={24}
                  />
                </a>

                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#333333] p-2 rounded-xl hover:bg-[#262626]"
                >
                  <Image
                    src="/mHz04n9m5dvAnDw0bIe3uCF268.svg"
                    alt="Staffluent - X"
                    width={24}
                    height={24}
                  />
                </a>

                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#333333] p-2 rounded-xl hover:bg-[#262626]"
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
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#0A0A0A] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="border border-[#262626] rounded-full px-6 py-2 text-[#b3b3b3]">
              © 2025 Staffluent. All rights reserved
            </div>
            <div className="flex gap-6">
              <Link
                href="/terms"
                className="text-[#b3b3b3] cursor-pointer hover:text-white transition-colors"
              >
                Terms of Use
              </Link>
              <Link
                href="/privacy-policy"
                className="text-[#b3b3b3] cursor-pointer hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
