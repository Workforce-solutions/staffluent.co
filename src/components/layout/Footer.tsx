import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Twitter, Facebook, Linkedin } from "lucide-react";
import styles from "./Footer.module.css";

interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}

interface MainLink {
  href: string;
  label: string;
}

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const mainLinks: MainLink[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const legalLinks: MainLink[] = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Use" },
    { href: "/data-deletion", label: "Data Deletion" },
  ];

  const socialLinks: SocialLink[] = [
    { href: "#", icon: <Twitter size={20} />, label: "Twitter" },
    { href: "#", icon: <Facebook size={20} />, label: "Facebook" },
    { href: "#", icon: <Linkedin size={20} />, label: "LinkedIn" },
  ];

  const renderSocialLinks = () => {
    return socialLinks.map((socialLink) => (
        <a
            key={socialLink.label}
            href={socialLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label={socialLink.label}
        >
          {socialLink.icon}
        </a>
    ));
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
                  <p>222 East 44th Street New York, NY 10017</p>
                </div>
                <div className={styles.contactItem}>
                  <Mail size={20} className={styles.icon} />
                  <a href="mailto:contact@staffluent.co">contact@staffluent.co</a>
                </div>
                <div className={styles.contactItem}>
                  <Phone size={20} className={styles.icon} />
                  <a href="tel:+18442481465">+1 (844) 248-1465</a>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className={styles.navigation}>
              <h3 className={styles.sectionTitle}>Quick Links</h3>
              <ul className={styles.linksList}>
                {mainLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={styles.link}>
                        {link.label}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className={styles.navigation}>
              <h3 className={styles.sectionTitle}>Legal</h3>
              <ul className={styles.linksList}>
                {legalLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={styles.link}>
                        {link.label}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className={styles.social}>
              <h3 className={styles.sectionTitle}>Connect With Us</h3>
              <div className={styles.socialLinks}>{renderSocialLinks()}</div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className={styles.footerBottom}>
            <p className={styles.copyright}>
              © {currentYear} Staffluent. All rights reserved
            </p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;