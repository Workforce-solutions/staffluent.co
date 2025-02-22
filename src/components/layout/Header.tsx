"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

interface HeaderProps {
    isHamburgerMenuOpen: boolean;
    setIsHamburgerMenuOpen: (open: boolean) => void;
    navLinks: { href: string; label: string }[];
}

const Header = ({ isHamburgerMenuOpen, setIsHamburgerMenuOpen, navLinks }: HeaderProps) => {

    const navigationLinks = navLinks.slice(0, -1);
    return (
        <header className="fixed top-0 left-0 right-0 z-40 pt-[30px]">
            <div className="max-w-[1200px] mx-auto px-4">
                <nav className="relative w-full flex items-center justify-between bg-black rounded-2xl px-4 py-4 backdrop-blur-md">
                    {/* Left section - Navigation */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navigationLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-white text-[17px] px-4 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Logo */}
                    <Link
                        href="/"
                        className="absolute left-4 md:left-1/2 top-1/2 -translate-y-1/2 md:-translate-x-1/2"
                    >
                        <Image
                            src="/logo-footer.svg"
                            alt="Staffluent Logo"
                            style={{marginLeft: "-4px"}}
                            width={200}
                            height={100}
                            className="object-contain"
                        />
                    </Link>

                    {/* Right section */}
                    <div className="flex items-center gap-2 ml-auto">
                        <Link
                            href="https://app.staffluent.co/login"
                            target="_blank"
                            rel="noopener"
                            className="hidden md:flex bg-white text-black text-[17px] px-4 py-3.5 rounded-xl hover:bg-white/90 transition-colors"
                        >
                            Access Platform
                        </Link>

                        {/* Mobile menu button */}
                        <button
                            className="md:hidden p-2"
                            onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
                        >
                            {isHamburgerMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;