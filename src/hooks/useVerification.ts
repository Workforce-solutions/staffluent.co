// hooks/useVerification.ts
import { useState, useRef } from 'react';
import { createVerificationApi, VerificationResponse } from '@/app/api/external/omnigateway/verification';
import { toast } from 'react-toastify';

interface ApiError {
    message: string;
    status?: number;
}

export const useVerification = () => {
    const [isLoading, setIsLoading] = useState(false);
    // Use a ref to track if we've already verified
    const hasVerified = useRef(false);
    // Store the cached response
    const cachedResponse = useRef<VerificationResponse | null>(null);

    const verifyEmail = async (token: string): Promise<VerificationResponse> => {
        if (!token) {
            return {
                status: 'invalid',
                message: 'No token provided'
            };
        }

        // If we've already verified, return the cached response
        if (hasVerified.current && cachedResponse.current) {
            return cachedResponse.current;
        }

        try {
            setIsLoading(true);
            const api = createVerificationApi();
            const response = await api.verifyEmail(token);
            
            // Only show the toast and store the result on the first verification
            if (!hasVerified.current) {
                if (response.status === 'success' || response.status === 'already_verified') {
                    toast.success(response.message);
                } else if (response.status === 'expired') {
                    toast.warning(response.message);
                } else {
                    toast.error(response.message);
                }
                
                // Mark as verified and cache the response
                hasVerified.current = true;
                cachedResponse.current = response;
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