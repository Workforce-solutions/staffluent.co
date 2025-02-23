"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircle, Loader, XCircle, Star } from "lucide-react";
import { useVerification } from "@/hooks/useVerification";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

type VerificationStatus = 
    | "loading" 
    | "success" 
    | "already_verified" 
    | "expired" 
    | "error";

const VerifyEmail = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
    const [verificationStatus, setVerificationStatus] = useState<VerificationStatus>("loading");
    const { verifyEmail } = useVerification();
    const token = searchParams?.get("token");

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/request-demo", label: "Request a Demo" },
        { href: "https://app.staffluent.co/login", label: "Access Platform" },
    ];

    useEffect(() => {
        let mounted = true;

        const handleVerification = async () => {    
            if (!token) {
                setVerificationStatus("error");
                return;
            }

            try {
                const response = await verifyEmail(token);
                
                if (!mounted) return;

                switch (response.status) {
                    case 'success':
                        setVerificationStatus("success");
                        setTimeout(() => {
                            if (mounted) {
                                router.push("/pricing");
                            }
                        }, 3000);
                        break;
                    case 'already_verified':
                        setVerificationStatus("already_verified");
                        break;
                    case 'expired':
                        setVerificationStatus("expired");
                        break;
                    default:
                        setVerificationStatus("error");
                }
            } catch {
                if (mounted) {
                    setVerificationStatus("error");
                }
            }
        };

        handleVerification();

        return () => {
            mounted = false;
        };
    }, [token, verifyEmail, router]);

    const renderVerificationContent = () => {
        if (!isHamburgerMenuOpen) {
            return (
                <div className="bg-[#F8FAFC] min-h-screen">
                    <div className="max-w-[1200px] mx-auto px-4 py-16">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#DEE5ED] bg-white mb-6">
                                <Star className="h-5 w-5" />
                                <span className="text-[#0A0A0A] text-base">Email Verification</span>
                            </div>
                            <h1 className="text-2xl md:text-3xl font-bold mt-6 mb-6 text-[#0A0A0A]">
                                Verify Your Email
                            </h1>
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="max-w-md w-full">
                                {verificationStatus === "loading" && (
                                    <div className="bg-white p-8 rounded-2xl border border-[#DEE5ED] shadow-sm text-center">
                                        <div className="mb-4">
                                            <Loader className="w-12 h-12 text-[#0A0A0A] animate-spin mx-auto" />
                                        </div>
                                        <h1 className="text-2xl font-bold text-[#0A0A0A] mb-2">Verifying Your Email</h1>
                                        <p className="text-[#3D495B]">Please wait while we verify your email address...</p>
                                    </div>
                                )}

                                {verificationStatus === "success" && (
                                    <div className="bg-white p-8 rounded-2xl border border-[#DEE5ED] shadow-sm text-center">
                                        <div className="mb-4">
                                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                                <CheckCircle className="w-8 h-8 text-green-500" />
                                            </div>
                                        </div>
                                        <h1 className="text-2xl font-bold text-[#0A0A0A] mb-2">Email Verified Successfully!</h1>
                                        <p className="text-[#3D495B] mb-6">
                                            Your email has been verified. You&apos;ll be redirected to choose your plan in a moment.
                                        </p>
                                        <div className="animate-pulse">
                                            <Loader className="w-5 h-5 text-[#0A0A0A] animate-spin mx-auto" />
                                        </div>
                                    </div>
                                )}

                                {verificationStatus === "already_verified" && (
                                    <div className="bg-white p-8 rounded-2xl border border-[#DEE5ED] shadow-sm text-center">
                                        <div className="mb-4">
                                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                                <CheckCircle className="w-8 h-8 text-green-500" />
                                            </div>
                                        </div>
                                        <h1 className="text-2xl font-bold text-[#0A0A0A] mb-2">Already Verified</h1>
                                        <p className="text-[#3D495B] mb-6">
                                            This email has already been verified.
                                        </p>
                                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                                            <Link 
                                                href="/"
                                                className="px-6 py-3 bg-[#0A0A0A] hover:bg-[#171717] text-white rounded-lg transition-colors"
                                            >
                                                Explore
                                            </Link>
                                            <Link 
                                                href="https://app.staffluent.co/login"
                                                className="px-6 py-3 border border-[#DEE5ED] hover:border-[#0A0A0A] rounded-lg transition-colors"
                                            >
                                                Login
                                            </Link>
                                        </div>
                                    </div>
                                )}

                                {verificationStatus === "expired" && (
                                    <div className="bg-white p-8 rounded-2xl border border-[#DEE5ED] shadow-sm text-center">
                                        <div className="mb-4">
                                            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                                                <XCircle className="w-8 h-8 text-yellow-500" />
                                            </div>
                                        </div>
                                        <h1 className="text-2xl font-bold text-[#0A0A0A] mb-2">Link Expired</h1>
                                        <p className="text-[#3D495B] mb-6">
                                            This verification link has expired. Please request a new one.
                                        </p>
                                        <button
                                            onClick={() => router.push("/contact")}
                                            className="px-6 py-3 bg-[#0A0A0A] hover:bg-[#171717] text-white rounded-lg transition-colors"
                                        >
                                            Contact Support
                                        </button>
                                    </div>
                                )}

                                {verificationStatus === "error" && (
                                    <div className="bg-white p-8 rounded-2xl border border-[#DEE5ED] shadow-sm text-center">
                                        <div className="mb-4">
                                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                                                <XCircle className="w-8 h-8 text-red-500" />
                                            </div>
                                        </div>
                                        <h1 className="text-2xl font-bold text-[#0A0A0A] mb-2">Verification Failed</h1>
                                        <p className="text-[#3D495B] mb-6">
                                            We couldn&apos;t verify your email. The link might be invalid.
                                        </p>
                                        <button
                                            onClick={() => router.push("/contact")}
                                            className="px-6 py-3 bg-[#0A0A0A] hover:bg-[#171717] text-white rounded-lg transition-colors"
                                        >
                                            Contact Support
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            );
        }

        return (
            <div className="absolute top-0 left-0 w-full h-[calc(100vh-100px)] bg-white flex flex-col items-center gap-4 pr-6 mt-28">
                {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-black">
                        {link.label}
                    </Link>
                ))}
            </div>
        );
    };

    return (
        <>
            <Header
                isHamburgerMenuOpen={isHamburgerMenuOpen}
                setIsHamburgerMenuOpen={setIsHamburgerMenuOpen}
                navLinks={navLinks}
            />
            {renderVerificationContent()}
        </>
    );
};

export default VerifyEmail;