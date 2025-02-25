// hooks/useSubscription.ts
import { useState, useCallback } from 'react';
import { createSubscriptionApi, } from '@/app/api/external/omnigateway/subscription';
import { toast, ToastOptions } from 'react-toastify';
import { SubscriptionPlan } from '@/app/api/external/omnigateway/types/subscription-plan';
import { BusinessDetails } from '@/app/api/external/omnigateway/types/business';

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
  theme: "light"
};

export const useSubscription = () => {
  const [isLoading, setIsLoading] = useState(false);

  const updateBusinessAndSubscribe = useCallback(async (
    businessDetails: BusinessDetails,
    subscriptionPlan: SubscriptionPlan
  ) => {
    try {
      setIsLoading(true);
      const api = createSubscriptionApi();
      const response = await api.updateBusinessAndSubscribe(businessDetails, subscriptionPlan);
      
      if (response.success) {
        toast.success('Subscription updated successfully!', toastConfig);
        return response;
      } else {
        throw new Error(response.message);
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error 
        ? error.message 
        : (error as ApiError)?.message || 'Failed to update subscription. Please try again.';
      
      toast.error(errorMessage, toastConfig);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    updateBusinessAndSubscribe
  };
};