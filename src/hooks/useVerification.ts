// hooks/useVerification.ts
import { useState } from 'react';
import { createVerificationApi, VerificationResponse } from '@/app/api/external/omnigateway/verification';
import { toast } from 'react-toastify';


interface ApiError {
    message: string;
    status?: number;
}

export const useVerification = () => {
    const [isLoading, setIsLoading] = useState(false);

    const verifyEmail = async (token: string): Promise<VerificationResponse> => {
        if (!token) {
            return {
                status: 'invalid',
                message: 'No token provided'
            };
        }

        try {
            setIsLoading(true);
            const api = createVerificationApi();
            const response = await api.verifyEmail(token);
            
            if (response.status === 'success' || response.status === 'already_verified') {
                toast.success(response.message);
            } else if (response.status === 'expired') {
                toast.warning(response.message);
            } else {
                toast.error(response.message);
            }
            
            return response;
        } catch (error: unknown) {
            const errorMessage = error instanceof Error 
                ? error.message 
                : (error as ApiError)?.message || 'Failed to verify email. Please try again.';
            
            throw new Error(errorMessage);
        } finally {
            setIsLoading(false);
          }
    };

    return {
        isLoading,
        verifyEmail
    };
};