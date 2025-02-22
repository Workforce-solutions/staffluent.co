// app/api/external/omnigateway/verification.ts
import { createOmniGateway } from './index';

export const createVerificationApi = () => {
    const api = createOmniGateway();

    return {
        verifyEmail: async (token: string) => {
            const { data } = await api.get(`/business-registration/verify-email?token=${token}`);
            return data;
        }
    };
};