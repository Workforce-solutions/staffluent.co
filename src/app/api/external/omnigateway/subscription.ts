// app/api/external/omnigateway/subscription.ts
import { createOmniGateway } from './index';
import { BusinessDetails } from './types/business';
import { SubscriptionPlan, SubscriptionResponse } from './types/subscription-plan';


export const createSubscriptionApi = () => {
  const api = createOmniGateway();

  return {
    updateBusinessAndSubscribe: async (
      businessDetails: BusinessDetails,
      subscriptionPlan: SubscriptionPlan
    ): Promise<SubscriptionResponse> => {
      const { data } = await api.post('/business/update-and-subscribe', {
        ...businessDetails,
        subscription: subscriptionPlan
      });
      return data;
    }
  };
};
