// components/verifyEmail/VerifyEmail.tsx
"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircle, Loader, XCircle } from "lucide-react";
import { useVerification } from "@/hooks/useVerification";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const VerifyEmail = () => {
    const router = useRouter();
    const params = useSearchParams();
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
    const [verificationStatus, setVerificationStatus] = useState<"loading" | "success" | "error">("loading");
    const { verifyEmail } = useVerification();
    const token = params?.get("token");

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/request-demo", label: "Request a Demo" },
        { href: "https://app.staffluent.co/login", label: "Access Platform" },
    ];

    useEffect(() => {
        const handleVerification = async () => {
            if (!token) {
                setVerificationStatus("error");
                return;
            }

            try {
                await verifyEmail(token);
                setVerificationStatus("success");
                setTimeout(() => {
                    router.push("/pricing");
                }, 3000);
            } catch (error) {
                setVerificationStatus("error");
            }
        };

        handleVerification();
    }, [token, verifyEmail, router]);

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
                        <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
                            <div className="max-w-md w-full mx-4">
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
                                            <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                                        </div>
                                        <h1 className="text-2xl font-bold text-[#0A0A0A] mb-2">Email Verified!</h1>
                                        <p className="text-[#3D495B] mb-4">
                                            Your email has been successfully verified. You'll be redirected to choose your plan in a moment.
                                        </p>
                                        <div className="animate-pulse">
                                            <Loader className="w-5 h-5 text-[#0A0A0A] animate-spin mx-auto" />
                                        </div>
                                    </div>
                                )}

                                {verificationStatus === "error" && (
                                    <div className="bg-white p-8 rounded-2xl border border-[#DEE5ED] shadow-sm text-center">
                                        <div className="mb-4">
                                            <XCircle className="w-12 h-12 text-red-500 mx-auto" />
                                        </div>
                                        <h1 className="text-2xl font-bold text-[#0A0A0A] mb-2">Verification Failed</h1>
                                        <p className="text-[#3D495B] mb-4">
                                            We couldn't verify your email. The link might be expired or invalid.
                                        </p>
                                        <button
                                            onClick={() => router.push("/contact")}
                                            className="text-[#0A0A0A] underline hover:text-[#171717]"
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

export default VerifyEmail;