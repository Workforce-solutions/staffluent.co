// components/SubscriptionFinalizeSuccess.tsx
"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircle, Loader } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSubscription } from "@/hooks/useSubscription";
import Link from "next/link";

const SubscriptionFinalizeSuccess = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [countdown, setCountdown] = useState(10);
  const { finalizeSubscription, isLoading } = useSubscription();
  const [isFinalized, setIsFinalized] = useState(false);
  const sessionId = params?.get("session_id");

  useEffect(() => {
    // Finalize the subscription with Stripe session ID
    if (sessionId && !isFinalized) {
      finalizeSubscription(sessionId)
        .then(() => {
          setIsFinalized(true);
        })
        .catch((error) => {
          console.error("Error finalizing subscription:", error);
          toast.error("There was an issue activating your subscription. Please contact support.");
        });
    } else if (!sessionId) {
      toast.error("Missing session information. Please contact support.");
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }
  }, [sessionId, finalizeSubscription, router, isFinalized]);

  // Countdown to redirect
  useEffect(() => {
    if (!isFinalized) return;

    if (countdown <= 0) {
      router.push("https://app.staffluent.co/login");
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, router, isFinalized]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white p-8 rounded-2xl border border-[#DEE5ED] shadow-sm text-center">
            <div className="mb-4">
              <Loader className="w-12 h-12 text-[#0A0A0A] animate-spin mx-auto" />
            </div>
            <h1 className="text-2xl font-bold text-[#0A0A0A] mb-2">Activating Your Subscription</h1>
            <p className="text-[#3D495B]">Please wait while we finalize your subscription...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
      <ToastContainer position="top-right" autoClose={5000} />
      <div className="max-w-md w-full mx-4">
        <div className="bg-white p-8 rounded-2xl border border-[#DEE5ED] shadow-sm text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-[#0A0A0A] mb-4">
            Subscription Complete!
          </h1>
          <p className="text-[#3D495B] mb-6">
            Your account has been set up successfully. Your 14-day free trial starts now!
          </p>
          <div className="mb-6 p-4 bg-[#F8FAFC] rounded-lg">
            <p className="text-[#3D495B]">
              You&apos;ll be redirected to your dashboard in <span className="font-bold">{countdown}</span> seconds...
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="https://app.staffluent.co/dashboard"
              className="block w-full bg-[#0A0A0A] text-white text-center py-3 px-6 rounded-xl hover:bg-black/90 transition-colors"
            >
              Access Dashboard
            </Link>
            <Link
              href="/"
              className="block w-full bg-white border border-[#DEE5ED] text-[#0A0A0A] text-center py-3 px-6 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Homepage
            </Link>
          </div>
          <div className="mt-8 text-sm text-[#3D495B]">
            <p>Need help getting started?</p>
            <Link href="/contact" className="text-[#0A0A0A] underline hover:text-[#171717]">
              Contact our support team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionFinalizeSuccess;