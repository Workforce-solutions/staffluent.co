// hooks/useSubmissions.ts
import { useState, useCallback } from 'react';
import { createSubmissionsApi } from '@/app/api/external/omnigateway/submission';
import { SubmissionFormData } from '@/app/api/external/omnigateway/types/submissions';
import { toast, ToastOptions } from 'react-toastify';

const toastConfig: ToastOptions = {
    autoClose: 10000, // 10 seconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light"
};

export const useSubmissions = () => {
    const [isLoading, setIsLoading] = useState(false);

    const submitForm = useCallback(async (data: SubmissionFormData) => {
        try {
            setIsLoading(true);
            const submissionApi = createSubmissionsApi();
            const response = await submissionApi.createSubmission(data);
            toast.success('Form submitted successfully', toastConfig);
            return response;
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Failed to submit form', toastConfig);
            throw error;
        } finally {
            setIsLoading(false);
        }
    }, []);

    return {
        isLoading,
        submitForm
    };
};