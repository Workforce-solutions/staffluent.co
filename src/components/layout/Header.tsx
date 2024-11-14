// src/components/layout/Header/index.tsx
"use client";
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/features', label: 'Features' },
        { href: '/testimonial', label: 'Testimonial' },
        { href: '/pricing', label: 'Pricing' },
    ];

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* Logo */}
                <Link href="/" className={styles.logoLink}>
                    <div className={styles.logo}>
                        <Image
                            src="/logo-icon.svg"
                            alt="Logo Icon"
                            width={40}
                            height={40}
                            className={styles.logoIcon}
                        />
                        <span className={styles.logoText}>Orginaziz</span>
                    </div>
                </Link>

                {/* Navigation */}
                <nav className={styles.nav}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={styles.navLink}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Auth Buttons */}
                <div className={styles.authButtons}>
                    <Link href="/login" className={styles.loginButton}>
                        Login
                    </Link>
                    <Link href="/signup" className={styles.signupButton}>
                        Sign up
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;