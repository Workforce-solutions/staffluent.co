// hooks/useSubscription.ts
import { useState, useCallback } from "react";
import { createBusinessApi } from "@/app/api/external/omnigateway/subscription";
import { toast, ToastOptions } from "react-toastify";
import { AuthProps } from "@/types/auth";

interface ApiError {
  message: string;
  status?: number;
}

const toastConfig: ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
};

export const useSubscription = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [authData, setAuthData] = useState<AuthProps>();

  const updateBusinessAndSubscribe = useCallback(
    async (
      businessId: string,
      businessDetails: {
        businessType?: string;
        phone?: string;
        address?: {
          street?: string;
          city?: string;
          state?: string;
          zip?: string;
          country?: string;
        };
        taxId?: string;
        vatNumber?: string;
      },
      subscription: {
        planId: string;
        interval: "month" | "year";
      }
    ) => {
      try {
        setIsLoading(true);
        const api = createBusinessApi();
        const response = await api.updateBusinessAndSubscribe(
          businessId,
          businessDetails,
          subscription
        );

        if (response.success && response.checkoutUrl) {
          return response;
        } else {
          throw new Error(response.message || "Failed to create subscription");
        }
      } catch (error: unknown) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : (error as ApiError)?.message ||
              "Failed to create subscription. Please try again.";

        toast.error(errorMessage, toastConfig);
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const finalizeSubscription = useCallback(async (sessionId: string) => {
    try {
      setIsLoading(true);
      const api = createBusinessApi();
      const response = await api.finalizeSubscription(sessionId);

      if (response.success) {
        toast.success("Subscription activated successfully!", toastConfig);
        setAuthData(response.auth_response);
        return response;
      } else {
        throw new Error(response.message || "Failed to finalize subscription");
      }
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : (error as ApiError)?.message ||
            "Failed to finalize subscription. Please try again.";

      toast.error(errorMessage, toastConfig);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    updateBusinessAndSubscribe,
    finalizeSubscription,
    authData,
  };
};
