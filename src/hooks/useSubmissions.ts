// hooks/useSubmissions.ts
import { useState, useCallback } from 'react';
import { createSubmissionsApi } from '@/app/api/external/omnigateway/submission';
import { SubmissionFormData } from '@/app/api/external/omnigateway/types/submissions';
import { toast } from 'react-toastify';

export const useSubmissions = () => {
    const [isLoading, setIsLoading] = useState(false);

    const submitForm = useCallback(async (data: SubmissionFormData) => {
        try {
            setIsLoading(true);
            const submissionApi = createSubmissionsApi();
            const response = await submissionApi.createSubmission(data);
            toast.success('Form submitted successfully');
            return response;
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Failed to submit form');
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