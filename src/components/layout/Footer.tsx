import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
      <footer className="w-full bg-[url('https://framerusercontent.com/images/74LehQoe77vSoidpjaDEmwrLHho.png')] bg-cover bg-center rounded-t-[50px]">
        <div className="max-w-[1200px] mx-auto px-4 py-16">
          {/* Top Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Link href="/" className="block w-[200px] h-20 relative">
                  <Image
                      src="logo-footer.svg"
                      alt="Staffluent Logo"
                      fill
                      className="object-contain"
                      priority
                  />
                </Link>
                <p className="text-white">
                  Empowering your productivity with intuitive tools and seamless solutions.
                </p>
              </div>
              <a
                  href="mailto:contact@staffluent.co"
                  className="inline-flex items-center gap-2 bg-white rounded-xl px-4 py-2 text-[#262626]"
              >
                <Image
                    src="https://framerusercontent.com/images/bq8j0XRxNw5W65cEtpyVTuWArA.svg"
                    alt="Email"
                    width={24}
                    height={24}
                />
                <span>contact@staffluent.co</span>
              </a>
            </div>

            {/* Right Column */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Company Links */}
              <div className="space-y-4">
                <h3 className="text-white font-medium">Company</h3>
                <div className="space-y-2">
                  <Link href="/#about-us" className="block text-white/80 hover:text-white">
                    About Us
                  </Link>
                  <Link href="/contact" className="block text-white/80 hover:text-white">
                    Contact us
                  </Link>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-white font-medium">Social Profiles</h3>
                <div className="flex gap-2">
                  <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#333333] p-2 rounded-xl hover:bg-[#262626]"
                  >
                    <Image
                        src="https://framerusercontent.com/images/lE6exgFCC7D83cPTOY1ydeVc5Q.svg"
                        alt="LinkedIn"
                        width={24}
                        height={24}
                    />
                  </a>
                  <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#333333] p-2 rounded-xl hover:bg-[#262626]"
                  >
                    <Image
                        src="https://framerusercontent.com/images/qpDZ05AACAyO52WOnvrc0Bz3i0Y.svg"
                        alt="Instagram"
                        width={24}
                        height={24}
                    />
                  </a>
                  <a
                      href="https://x.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#333333] p-2 rounded-xl hover:bg-[#262626]"
                  >
                    <Image
                        src="https://framerusercontent.com/images/mHz04n9m5dvAnDw0bIe3uCF268.svg"
                        alt="X.com"
                        width={24}
                        height={24}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-[#1c1c1c] pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <a
                  href="https://lander.studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#262626] rounded-full px-6 py-2 text-[#b3b3b3] hover:bg-[#262626]/10"
              >
                © 2025 Staffluent. All rights reserved
              </a>
              <div className="flex gap-6">
                <Link href="/terms" className="text-[#b3b3b3] hover:text-white transition-colors">
                  Terms of Use
                </Link>
                <Link href="/privacy-policy" className="text-[#b3b3b3] hover:text-white transition-colors">
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