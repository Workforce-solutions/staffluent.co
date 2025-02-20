// src/components/layout/Header.tsx
"use client";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
    isHamburgerMenuOpen: boolean;
    setIsHamburgerMenuOpen: (open: boolean) => void;
    navLinks: { href: string; label: string }[];
}

const Header = ({ isHamburgerMenuOpen, setIsHamburgerMenuOpen, navLinks }: HeaderProps) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-10 pt-[30px]">
            <div className="max-w-[1200px] mx-auto px-4">
                <nav className="w-full flex items-center justify-between bg-black rounded-2xl px-4 py-4 backdrop-blur-md">
                    {/* Left section - Navigation */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-white text-[17px] px-4 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Center - Logo */}
                    <Link href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Image
                            src="https://framerusercontent.com/images/YWkjUs3TyLqowl3SfODlTHzg.png"
                            alt="Staffluent"
                            width={40}
                            height={40}
                            className="w-10 h-10"
                        />
                    </Link>

                    {/* Right section */}
                    <div className="flex items-center gap-2">
                        <Link
                            href="https://app.staffluent.co/login"
                            target="_blank"
                            rel="noopener"
                            className="bg-white text-black text-[17px] px-4 py-3.5 rounded-xl hover:bg-white/90 transition-colors"
                        >
                            Access Platform
                        </Link>

                        {/* Mobile menu */}
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