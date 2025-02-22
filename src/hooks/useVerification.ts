// hooks/useVerification.ts
import { useState } from 'react';
import { createVerificationApi } from '@/app/api/external/omnigateway/verification';
import { toast } from 'react-toastify';

export const useVerification = () => {
    const [isLoading, setIsLoading] = useState(false);

    const verifyEmail = async (token: string) => {
        try {
            setIsLoading(true);
            const api = createVerificationApi();
            const response = await api.verifyEmail(token);
            
            if (response.success) {
                toast.success('Email verified successfully');
                return response;
            } else {
                throw new Error(response.message || 'Verification failed');
            }
        } catch (error: any) {
            console.error('Error verifying email:', error);
            toast.error(error.message || 'Failed to verify email');
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        verifyEmail
    };
};