// src/components/layout/Footer/index.tsx
import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = {
    "Section Page": ["Header", "Advantage", "Features", "Pricing"],
    "Useful Link": ["Services", "Product", "Features", "Contact US"],
    "Social Media": ["Instagram", "Twitter", "Facebook"],
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.footerContent}>
          {/* Company Info */}
          <div className={styles.companyInfo}>
            <Link href="/" className={styles.logoContainer}>
              <Image
                src="/logo.png"
                alt="Staffluent Logo"
                width={40}
                height={40}
                className={styles.logo}
              />
              <span className={styles.companyName}>Staffluent</span>
            </Link>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <MapPin size={20} className={styles.icon} />
                <p>
                  Street wasington ave number A2901 Manchester, Kentuky (42882)
                </p>
              </div>
              <div className={styles.contactItem}>
                <Mail size={20} className={styles.icon} />
                <a href="mailto:Contactmail@mailcu.com">
                  Contactmail@mailcu.com
                </a>
              </div>
              <div className={styles.contactItem}>
                <Phone size={20} className={styles.icon} />
                <a href="tel:+62123456789">+62 123 456 789</a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 col-span-3 text-center">
            {/* Navigation Sections */}
            {Object.entries(sections).map(([title, links]) => (
              <div key={title} className={styles.section}>
                <h3 className={styles.sectionTitle}>{title}</h3>
                <ul className={styles.linksList}>
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href={`/${link.toLowerCase()}`}
                        className={styles.link}
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            {currentYear} Organizez. All rights reserved
          </p>
          <div className={styles.legalLinks}>
            <Link href="/terms" className={styles.legalLink}>
              Terms of service
            </Link>
            <Link href="/privacy" className={styles.legalLink}>
              Privacy policy
            </Link>
            <Link href="/cookies" className={styles.legalLink}>
              Cookies
            </Link>
          </div>
          <div className={styles.socialIcons}>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// <!-- public/twitter.svg -->
// <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1DA1F2">
//     <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
// </svg>
//
// <!-- public/facebook.svg -->
// <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1877F2">
//     <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
// </svg>
//
// <!-- public/linkedin.svg -->
// <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0A66C2">
//     <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
//     <rect x="2" y="9" width="4" height="12"/>
//     <circle cx="4" cy="4" r="2"/>
// </svg>
