// hooks/useTrialRegistration.ts
import { useState, useCallback } from "react";
import { createTrialRegistrationApi } from "@/app/api/external/omnigateway/trial-registration";
import { TrialRegistrationFormData } from "@/app/api/external/omnigateway/types/trial-registration";
import { toast, ToastOptions } from "react-toastify";

interface ApiError {
  message: string;
  status?: number;
}

const toastConfig: ToastOptions = {
  position: "top-right",
  autoClose: 10000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
};

export const useTrialRegistration = () => {
  const [isLoading, setIsLoading] = useState(false);

  const registerTrial = useCallback(async (data: TrialRegistrationFormData) => {
    try {
      setIsLoading(true);
      const api = createTrialRegistrationApi();
      const response = await api.registerTrial(data);

      if (response.success) {
        toast.success(
          "Registration successful! Please check your email to verify your account.",
          toastConfig
        );
        return response;
      } else {
        throw new Error(response.message);
      }
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : (error as ApiError)?.message ||
            "Failed to register. Please try again.";

      toast.error(errorMessage, toastConfig);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    registerTrial,
  };
};
