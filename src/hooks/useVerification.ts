// hooks/useVerification.ts
// import { useState } from 'react';
import { createVerificationApi } from '@/app/api/external/omnigateway/verification';
import { toast } from 'react-toastify';

interface VerificationResponse {
    status: 'success' | 'already_verified' | 'expired' | 'invalid';
    message: string;
    userId?: string;
}

interface ApiError {
    message: string;
    status?: number;
}

export const useVerification = () => {
    const verifyEmail = async (token: string): Promise<VerificationResponse> => {
        if (!token) {
            return {
                status: 'invalid',
                message: 'No token provided'
            };
        }

        try {
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
        } 
    };

    return {
        verifyEmail
    };
};