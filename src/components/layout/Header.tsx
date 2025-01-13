// src/components/layout/Header.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

// Define a type for navLinks
type NavLink = {
  href: string;
  label: string;
};

// Define props with specific types
interface HeaderProps {
  isHamburgerMenuOpen: boolean;
  setIsHamburgerMenuOpen: (open: boolean) => void;
  navLinks: NavLink[];
}

const Header = ({
                  isHamburgerMenuOpen,
                  setIsHamburgerMenuOpen,
                  navLinks,
                }: HeaderProps) => {
  return (
      <header className={styles.header}>
        <div className={styles.container}>
          {/* Logo */}
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logo}>
              <Image
                  src="/logo.png"
                  alt="Logo Icon"
                  width={40}
                  height={40}
                  className={styles.logoIcon}
              />
              <span className={styles.logoText}>Staffluent</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className={`${styles.nav} hidden sm:flex sm:gap-4`}>
            {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className={styles.authButtons}>
            <Link
                href="https://app.staffluent.co"
                className={styles.signupButton}
            >
              Access Platform
            </Link>
          </div>

          {/* Hamburger Menu */}
          {!isHamburgerMenuOpen ? (
              <div
                  className="cursor-pointer sm:hidden"
                  style={{ color: "var(--primary)" }}
                  onClick={() => setIsHamburgerMenuOpen(true)}
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </div>
          ) : (
              <div
                  className="cursor-pointer"
                  style={{ color: "var(--primary)" }}
                  onClick={() => setIsHamburgerMenuOpen(false)}
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
          )}
        </div>
      </header>
  );
};

export default Header;
